define(['models/threadModel'],function(threadModel){
	var ThreadCollection = Backbone.Collection.extend({
		model : threadModel
	});

	return ThreadCollection;
});