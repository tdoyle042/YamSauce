define(['models/groupModel'],function(groupModel){
	var GroupCollection = Backbone.Collection.extend({
		model : groupModel
	});

	return GroupCollection;
});