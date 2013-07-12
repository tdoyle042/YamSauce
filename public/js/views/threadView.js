var ThreadView = Backbone.View.extend({
	className : "threadView",
	initialize : function(params) {
		this.thread = params.thread;
		this.template = $("#thread-template");
	},
	render : function(elem) {
		var threadStarter = this.thread.threadStarter;
		console.log(threadStarter);
		this.data = {
			avatar : "",
			from : threadStarter.poster_id,
			to : "Bob",
			"time-stamp" : threadStarter.timestamp,
			content : threadStarter.text.plain,
		};
		var el = Mustache.render(this.template.html(),this.data);
		elem.append(el);

		$(".message").click(function() {
		  if($(this).parent().hasClass("active"))
		    return;

		  var shadow = $("<div />").addClass("shadowbox").hide().click(function(){
		    $(".active").removeClass("active pure-u-1").addClass("pure-u-1-2")
		        .find(".message")
		          .removeClass("pure-u-1-2")
		        .end().find(".meta-comments")
		          .show()
		        .end()
		        .find(".close")
		          .hide()
		        .end()
		        .height("auto");

		    $(this).fadeOut(function(){
		      $(".shadowbox").remove();
		    });
		    $("content").masonry();
		  });

		  $("body").append(shadow);
		  $(".shadowbox").fadeIn();

		  var current_height = $(this).parent().height();

		  $(this).parent()
		    .addClass("active pure-u-1")
		    .removeClass("pure-u-1-2")
		    .find(".close").show().end()
		    .height(Math.max(current_height, 550))
		    .siblings().removeClass("active");
		  $(this).addClass("pure-u-1-2");
		  $(this).find(".meta-comments").hide();
		});
	}
});