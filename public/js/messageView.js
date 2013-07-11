define(['js/backbone','js/messageModel'],function(require){
	
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