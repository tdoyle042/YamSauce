define(['js/backbone','js/groupModel'],function(require){
	
	var GroupView = Backbone.View.extend({
		className : "groupView",
		initialize : function(group) {
			this.group = group;
		},
		render : function() {
			
		}
	});

	return GroupView;
});