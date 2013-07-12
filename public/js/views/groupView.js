var GroupView = Backbone.View.extend({
	defaults : {
		"expanded" : false
	},
	className : "group-view",
	events : {
		"click .group-header" : "toggleGroupState" 
	},
	initialize : function(params) {
		this.template = $("#group-template").html();
		this.group = params.group;
		this.threadViews = [];
		this.data = {
			"group-name" : this.group.name,
			"group-unread-count" : 15
		};
	},
	render : function() {
		this.$el.html(Mustache.render(this.template,this.data));
		$(".content").append(this.el);

		var self = this;
		_.map(this.group.threads.models,function(thread){
			var tv = new ThreadView({thread: thread});
			tv.render(this.$(".group-threads"));
			self.threadViews.push(tv);
		});

	},
	toggleGroupState : function() {

		if(!this.expanded) {
			this.$el.addClass("expanded-group");
			this.expandGroup();
		}
		else {
			this.$el.removeClass("expanded-group");
		}

		this.expanded = !this.expanded;
	},
	expandGroup : function() {

	}
});