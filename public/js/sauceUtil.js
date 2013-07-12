var SauceUtil = {
  init: function (currentUser) {
    this.currentUser = currentUser;
  }
  , getCurrentUser: function (cb) {
    cb(this.currentUser);
  }
  , getUser: function (userId, cb) {
    yam.request({
      url: "https://www.yammer.com/api/v1/users/" + userId + ".json"
      , method: "GET"
      , success: function (data) { cb(data) }
      , error: function (err) { console.error(err); }
    })
  }
  , getTopGroups: function (cb) {
    cb(this.currentUser.top_groups);
  }
  , getInboxMessages: function (cb) {
    yam.request({
      url: "https://www.yammer.com/api/v1/messages/private.json"
      , method: "GET"
      , success: function (data) { cb(data); }
      , error: function (err) { console.error(err); }
    });
  }
  , getGroupMessages: function (groupId, cb) {
    yam.request({
      url: "https://www.yammer.com/api/v1/messages/in_group/" + groupId + ".json"
      , method: "GET"
      , success: function (data) { cb(data); }
      , error: function (err) { console.error(err); }
    });
  }
  , postGroupMessage: function (groupId, replyId, messageBody, cb) {
    yam.request({
      url: "https://www.yammer.com/api/v1/messages.json"
      , method: "POST"
      , data: {
        group_id: groupId
        , replied_to_id: replyId
        , body: messageBody
      }
      , success: function (res) { cb(res); }
      , error: function (err) { console.error(err); }
    });
  }
  , getUserGroups: function (cb) {
    yam.request({
      url: "https://www.yammer.com/api/v1/groups/for_user/" + this.currentUser.id + ".json"
      , method: "GET"
      , success: function (res) { cb(res); }
      , error: function (err) { console.error(err); }
    });
  }
  , addMessagesToThreads: function (messages, threadColl) {
    _.each(messages, function (msg) {
      if (msg.id === msg.thread_id) {
        // Message is the threadstarter
        var threadStarter = new MessageModel(msg.id, msg.body, msg.sender_id, msg.created_at, null);
        var replies = new MessageCollection();
        var thread = new ThreadModel(msg.thread_id, threadStarter, replies);
        threadColl.add(thread);
      }
    });

    _.each(messages, function (msg) {
      if (msg.id != msg.thread_id) {
        // Just a reply in the thread
        var thread = threadColl.get(msg.thread_id);

        // [NOTE] This is wrong, it's not necessarily in reply to the thread starter, it
        // may be in reply to a message in that thread, but that can be fixed later since
        // this will have pretty much the same behavior for now
        if (thread) {
          var message = new MessageModel(msg.id, msg.body, msg.sender_id, msg.created_at, msg.thread_id);
          thread.replies.add(message);
        }
      }
    });
  }
}