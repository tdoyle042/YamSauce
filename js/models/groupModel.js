define(['js/backbone'],function(require){
	var GroupModel= Backbone.Model.extend({
		initialize : function  (id,threads) {
			this.id = id;
			this.threads = threads;
		}
	});
});