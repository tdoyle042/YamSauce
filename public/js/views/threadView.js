var ThreadView = Backbone.View.extend({
	className : "threadView",
	initialize : function(params) {
		this.thread = params.thread;
		this.template = $("#thread-template");
	},
	render : function(elem) {
		console.log(elem);
		var threadStarter = this.thread.threadStarter;
		this.data = {
			avatar : "",
			from : threadStarter.poster_id,
			to : "Bob",
			"time-stamp" : threadStarter.timestamp,
			content : threadStarter.text,
		};
		var el = Mustache.render(this.template.html(),this.data);
		elem.append(el);
	}
});