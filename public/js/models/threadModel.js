var ThreadModel = Backbone.Model.extend({
	initialize : function (params) {
		this.id = params.id;
		this.threadStarter = params.threadStarter;
		this.replies = params.replies;
		this.read = params.read;
	}
});