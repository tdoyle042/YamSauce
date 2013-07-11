define(['js/models/threadModel'],function(Thread){
	
	var ThreadView = Backbone.View.extend({
		className : "threadView",
		initialize : function(thread) {
			this.thread = thread;
		},
		render : function() {
			
		}
	});

	return ThreadView;
});