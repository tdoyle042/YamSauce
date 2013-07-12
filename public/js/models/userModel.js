var UserModel = Backbone.Model.extend({
	initialize : function (userData) {
		this.id = userData.id;
		this.full_name = userData.full_name;

    var mug_template = userData.mugshot_url_template;
    var better_mug_url = mug_template.replace("{width}x{height}", "75x75");
		this.mugshot_url = better_mug_url;
	}
});