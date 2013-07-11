define(['js/backbone','js/models/messageModel'],function(require,Message){
	
	var MessageView = Backbone.View.extend({
		className : "messageView",
		initialize : function(group) {
			this.group = group;
		},
		render : function() {
			
		}
	});

	return MessageView;
});