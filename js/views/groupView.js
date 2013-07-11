define(['models/groupModel'],function(Group){
	
	var GroupView = Backbone.View.extend({
		className : "groupView",
		initialize : function() {
			// this.group = group;
			this.template = $("#group-template").html();
			this.data = {
				"group-name" : "Rainbows and Sunshine",
				"group-unread-count" : 15
			}
		},
		render : function() {
			this.$el.html(Mustache.render(this.template,this.data));
			$(".content").append(this.el);
		}
	});

	return GroupView;
});