var UserModel = Backbone.Model.extend({
	initialize : function (userData) {
		this.id = userData.id;
		this.fullname = userData.full_name;
		this.mugshot_url = userData.mugshot_url;
	}
});