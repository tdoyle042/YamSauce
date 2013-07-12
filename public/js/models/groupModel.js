var GroupModel= Backbone.Model.extend({
	defaults : {
		unreadCount : 0
	},
	initialize : function  (params) {
		this.id = params.id;
		this.name = params.name;
		this.threads = params.threads;
		this.unreadCount();
	},
	unreadCount : function() {
		var unreadCount = 0;
		this.threads.each(function(thread){
			if(!thread.get("read")) unreadCount++;
		});
		this.set("unreadCount",unreadCount);
	}
});