var SauceApp = function (currentUser) {
  var log = function (d) { console.log(d); }
  SauceUtil.init(currentUser);

  var inboxThreads = new ThreadCollection();
  SauceUtil.getInboxMessages(function (data) {
    var messages = data.messages;
    _.each(messages, function (msg) {
      if (msg.id === msg.thread_id) {
        // Message is the threadstarter
        var threadStarter = new MessageModel(msg.id, msg.body, msg.sender_id, msg.created_at, null);
        var replies = new MessageCollection();
        var thread = new ThreadModel(msg.thread_id, threadStarter, replies);
        inboxThreads.add(thread);
      }
    });
    _.each(messages, function (msg) {
      if (msg.id != msg.thread_id) {
        // Just a reply in the thread
        var thread = inboxThreads.get(msg.thread_id);

        // [NOTE] This is wrong, it's not necessarily in reply to the thread starter, it 
        // may be in reply to a message in that thread, but that can be fixed later since
        // this will have pretty much the same behavior for now
        if (thread) {
          var message = new MessageModel(msg.id, msg.body, msg.sender_id, msg.created_at, msg.thread_id);
          thread.replies.add(message);
          console.log(thread);
        }
      }
    });
  });

  // SauceUtil.getCurrentUser(log);
  // SauceUtil.getTopGroups(log);
  // SauceUtil.getInboxMessages(log);
  // SauceUtil.getGroupMessages(1201487, log);
  // SauceUtil.postGroupMessage(1201487, null, "sauceTest", log);
  // SauceUtil.postGroupMessage(1201487, 309226587, "format test @shilal1", log);
  // SauceUtil.getUserGroups(log);
}

yam.config({
  appId: 'GUxLUf5ujCfUT7CJ3qTg'
});

yam.getLoginStatus(
  function(response) {
    if (response.authResponse) {
      yam.request({
        url: "https://www.yammer.com/api/v1/users/current.json"
        , method: "GET"
        , data: {
          include_top_groups: true,
        }
        , success: function (user) {
          SauceApp(user);
        }
        , error: function (err) {
          console.error(err);
        }
      });
    }
    else {
      yam.login(function (response) { //prompt user to login and authorize your app, as necessary
        if (response.authResponse) {
          // console.dir(response); //print user information to the console
        }
      });
    }
  }
);