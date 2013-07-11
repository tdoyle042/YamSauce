define(['js/backbone'],function (require) {
	var ThreadModel = Backbone.Model.extend({
		initialize : function (threadStarter,messages) {
			this.threadStarter = threadStarter;
			this.replies = replies;
		}
	});

	return ThreadModel;
});