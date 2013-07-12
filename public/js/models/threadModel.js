var ThreadModel = Backbone.Model.extend({
	initialize : function (id,threadStarter,replies) {
		this.id = id;
		this.threadStarter = threadStarter;
		this.replies = replies;
	}
});