var GroupView = Backbone.View.extend({
	defaults : {
		"expanded" : false
	},
	className : "group-view",
	events : {
		"click .group-header" : "toggleGroupState" 
	},
	initialize : function() {
		// this.group = group;
		this.template = $("#group-template").html();
		this.data = {
			"group-name" : "Rainbows and Sunshine",
			"group-unread-count" : 15
		};
	},
	render : function() {
		this.$el.html(Mustache.render(this.template,this.data));
		$(".content").append(this.el);
	},
	toggleGroupState : function() {

		if(!this.expanded)
			this.$el.addClass("expanded-group");
		else
			this.$el.removeClass("expanded-group");

		this.expanded = !this.expanded;
	}
});