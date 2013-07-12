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
		this.group = params.group
		this.data = {
			"group-name" : this.group.name,
			"group-unread-count" : 15
		};
	},
	render : function() {
		this.$el.html(Mustache.render(this.template,this.data));
		$(".content").append(this.el);

		// console.log(this.group.threads);
		// console.log(this.group.threads.models);
		_.map(this.group.threads.models,function(thread){
			
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