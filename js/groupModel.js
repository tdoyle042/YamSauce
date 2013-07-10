define(['js/backbone','js/groupModel'],function(require){
	var GroupView = Backbone.View.extend({
		tagName : "div",
		className : "groupView",
		initialize : function  (group) {
			this.group = group;
		},
		events : {

		},
		render : function() {

		}
	});
});