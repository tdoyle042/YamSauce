define(function(){
	var GroupModel= Backbone.Model.extend({
		initialize : function  (id,threads) {
			this.id = id;
			this.threads = threads;
		}
	});
});