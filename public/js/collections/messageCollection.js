define(['models/messageModel'],function(messageModel){
	var MessageCollection = Backbone.Collection.extend({
		model : messageModel
	});

	return MessageCollection;
});