define(['js/backbone','js/models/groupModel'],function(Backbone,Group){
	
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