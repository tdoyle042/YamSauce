var UserModel = Backbone.Model.extend({
	initialize : function (id,network_id,fullname,mugshot_url) {
		this.id = id;
		this.network_id = network_id;
		this.fullname = fullname;
		this.mugshot_url = mugshot_url;
	}
});