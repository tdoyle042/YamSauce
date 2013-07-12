var GroupView = Backbone.View.extend({
	defaults : {
		"expanded" : false
	},
	className : "group-view",
	events : {
		"click .group-markasread" : "markAsRead" ,
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
		this.$(".group-threads").hide();
		this.$(".group-markasread").hide();
	},
	render : function() {
		this.$el.html(Mustache.render(this.template,this.data));
		$(".content").append(this.el);

		var self = this;
		var des = self.$(".group-threads");
		_.map(this.group.threads.models,function(thread){
			var tv = new ThreadView({thread: thread});
			tv.render(des);
			self.threadViews.push(tv);
		});
		$(".group-threads").masonry({
			columnWidth : '.message-wrapper',
			itemSelector : '.message-wrapper'
		});
	},
	toggleGroupState : function(event) {
		//If the click event isn't aimed at the header
		//button then ignore it
		if(event.target != this.$('.group-header')[0])
			return false;

		if(!this.expanded) {
			this.$el.addClass("expanded-group");
			var self = this;
			this.$el.on("transitionend",function(event) {
				if(self.$el.attr("class").indexOf("expanded-group") !== -1){
					self.$(".group-threads").masonry({
						columnWidth : '.message-wrapper',
						itemSelector : '.message-wrapper'
					});
					self.$(".group-threads").show();
					self.$(".group-unread-count").hide();
					self.$(".group-markasread").show();
				}
			});
		}
		else {
			this.$el.removeClass("expanded-group");
			this.$(".group-threads").hide();
			this.$(".group-markasread").hide();
			this.$(".group-unread-count").show();
		}

		this.expanded = !this.expanded;
		return true;
	},
	markAsRead : function() {
		return true;
	}
});