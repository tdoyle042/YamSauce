var SauceApp = function (currentUser) {
  var log = function (d) { }
  SauceUtil.init(currentUser);

  SauceUtil.getInboxMessages(function (msgData) {
    var inboxThreads = new ThreadCollection();

    var messages = msgData.messages;
    SauceUtil.addMessagesToThreads(messages, inboxThreads);
    
    $("#loading-message").hide();
    //Testing Creating Thread Views and Such
    var testGroup = new GroupModel({
        id : 0,
        name : "Inbox Messages",
        threads : inboxThreads
    });
    var testGroupView = new GroupView({group: testGroup});
    testGroupView.render();
  });

  SauceUtil.getTopGroups(function (groupsData) {
    var topGroups = new GroupCollection();
    _.each(groupsData, function (groupData) {
      var groupThreads = new ThreadCollection();

      // For the current group, grab its messages, add them to threads
      SauceUtil.getGroupMessages(groupData.id, function (msgData) {
        var messages = msgData.messages;
        SauceUtil.addMessagesToThreads(messages, groupThreads);
      });

      // Create the group model and add it to topGroups collection
      var group = new GroupModel(groupData.id, groupThreads);
      topGroups.add(group);
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