define(['models/userModel'],function(userModel){
	var UserCollection = Backbone.Collection.extend({
		model : userModel
	});

	return UserCollection;
});