define(['js/backbone','js/models/threadModel'],function(Backbone,Thread){
	
	var ThreadView = Backbone.View.extend({
		className : "threadView",
		initialize : function(group) {
			this.group = group;
		},
		render : function() {
			
		}
	});

	return ThreadView;
});