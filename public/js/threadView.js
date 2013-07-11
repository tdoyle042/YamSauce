define(['js/backbone','js/threadModel'],function(require){
	
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