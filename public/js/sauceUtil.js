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
}