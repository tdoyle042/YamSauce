define(function () {
	var MessageModel = Backbone.Model.extend({
		initialize : function (id,text,poster_id,timestamp,inReplyTo) {
			this.id = id;
			this.poster_id = poster_id;
			this.text = text;
			this.timestamp = timestamp;
			this.inReplyTo = inReplyTo;
		}
	});

	return MessageModel;
});