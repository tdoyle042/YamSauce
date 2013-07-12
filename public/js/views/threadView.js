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

		// WHEN YOU CLOSE THINGS THEY CLOSE!
		$(".close").click(function(){
		  // Super lame, I know, but hackathon so whatever
		  console.log("shadowbox click!");
		  $(".shadowbox").click();
		});

		// WHEN YOU CLICK MESSAGES THEY COME INTO FOCUS HELL YEAH.
		$(".message").click(function() {
		  if($(this).parent().hasClass("active"))
		    return;

		  var shadow = $("<div />").addClass("shadowbox").hide().click(function(){
		    var that = $(".active")

		    that
		    		.find(".close").hide().end()
		    		.find(".comments")
		    			.animate({marginLeft: "-50%"}, 300, function(){
		    				that
		    						.removeClass("active pure-u-1").addClass("pure-u-1-2")
		    				    .find(".message")
		    				      .removeClass("pure-u-1-2")
		    				    .end().find(".meta-comments")
		    				      .show()
		    				    .end()
		    				    .find(".close")
		    				      .hide()
		    				    .end()
		    				    .height("auto");
		    				    // .animate({width: "50%"});

		    				    $(this).fadeOut(function(){
		    				      $(".shadowbox").remove();
		    				    });
		    				    $("content").masonry();
		    			});
		    		

		    
		  });

		  $("body").append(shadow);
		  $(".shadowbox").fadeIn();

		  var current_height = $(this).parent().height();

		  var that = $(this).parent();
		  that.height(Math.max(current_height, 550));
		  that.find(".meta-comments").hide();

		  that
		    .addClass("active")
		    .removeClass("pure-u-1-2")
		    .find(".comments").show()
		    .animate({marginLeft: "0%"}, 400, function(){
			    that
			      .find(".close").show().end()
			      .siblings().removeClass("active");
			    $(this).addClass("pure-u-1-2");
		    });
		  
		});

	}
});