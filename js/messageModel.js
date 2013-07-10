define(['backbone'],function (require) {
	var MessageModel = Backbone.Model.extend({
		initialize : function (text,poster_id,timestamp,inReplyTo) {
			this.poster_id = poster_id;
			this.text = text;
			this.timestamp = timestamp;
			this.inReplyTo = inReplyTo;
		}
	});

	return MessageModel;
});