var MessageModel = Backbone.Model.extend({
	initialize : function (msgData) {
		this.id = msgData.id;
		this.poster_id = msgData.sender_id;
		this.text = msgData.body;
		this.timestamp = msgData.created_at;
		this.inReplyTo = msgData.thread_id;
    this.user = SauceUtil.globalUsers.get(msgData.sender_id);
    this.likes = msgData.liked_by.count;
    this.group_id = msgData.group_id;
	}
});