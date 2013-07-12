var GroupModel= Backbone.Model.extend({
	initialize : function  (params) {
		this.id = params.id;
		this.name = params.name;
		this.threads = params.threads;
	}
});