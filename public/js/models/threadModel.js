var ThreadModel = Backbone.Model.extend({
	initialize : function (id,threadStarter,messages) {
		this.id = id;
		this.threadStarter = threadStarter;
		this.replies = replies;
	}
});