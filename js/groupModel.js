define(['js/backbone'],function (requrie) {
	var GroupModel = Backbone.Model.extend({
		initialize : function (id,fullname,threads) {
			this.id = id;
			this.fullname = fullname;
			this.threads = threads;
		},
		unreadCount : function() {
			return 0;
		}
	});

	return GroupModel;
})