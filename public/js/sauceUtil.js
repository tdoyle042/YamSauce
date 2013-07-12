var SauceUtil = {
  init: function (currentUser, globalUsers) {
    this.currentUser = currentUser;
    this.globalUsers = globalUsers;
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
    _.each(messages, function (msgData) {
      if (msgData.id === msgData.thread_id) {
        // Message is the threadstarter
        var threadStarter = new MessageModel(msgData);
        var replies = new MessageCollection();
        var thread = new ThreadModel(msgData.thread_id, threadStarter, replies);
        threadColl.add(thread);
      }
    });

    _.each(messages, function (msgData) {
      if (msgData.id != msgData.thread_id) {
        // Just a reply in the thread
        var thread = threadColl.get(msgData.thread_id);

        // [NOTE] This is wrong, it's not necessarily in reply to the thread starter, it
        // may be in reply to a message in that thread, but that can be fixed later since
        // this will have pretty much the same behavior for now
        if (thread) {
          var message = new MessageModel(msgData);
          thread.replies.add(message);
        }
      }
    });
  }
  , extractGlobalUsers: function (references) {
    var self = this;
    _.chain(references)
      .filter(function (ref) { return ref.type === 'user'; })
      .each(function (userData) {
        var user = new UserModel(userData);
        self.globalUsers.add(user);
      });
  }
}