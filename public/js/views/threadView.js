var ThreadView = Backbone.View.extend({
    className : "threadView",
    initialize : function(params) {
        this.thread = params.thread;
        this.thread.read = false;
        this.template = $("#thread-template");
        this.group = params.group;
    },
    render : function(elem) {
        var threadStarter = this.thread.threadStarter;
        this.data = {
            avatar: threadStarter.user.mugshot_url
            , from: threadStarter.user.full_name
            , "time-stamp": threadStarter.timestamp
            , content: threadStarter.text.rich
            , comments: this.thread.replies.models
            , likes: threadStarter.likes
        };
        
        this.el = Mustache.render(this.template.html(),this.data);
        elem.append(this.el);
        var self = this;
        // WHEN YOU CLOSE THINGS THEY CLOSE!
        $(".close").unbind("click");
        $(".close").click(function(){
          // Super lame, I know, but hackathon so whatever
          // console.log("Closing");
          var that = $(".active")
          // that.addClass(".read-message");

          //So Ghetto it makes me cry :'(
          // that.find(".message")

          that
                .find(".close").hide().end()
                .find(".comments")
                    .animate({marginLeft: "-50%"}, 300, function(){
                        that
		                        .height("auto")
                    				.css("opacity", "0.5")
                            .removeClass("active pure-u-1").addClass("pure-u-1-2")
                            .find(".message")
                              .removeClass("pure-u-1-2")
                    					.css("background-color","#aaa")
                            .end().find(".meta-comments")
                              .show()
                            .end()
                            .find(".close")
                              .hide()
                            .end()
                            .find(".message-body")
                            	.css("border-bottom","1px solid #777")
                            .end().find("header")
                            	.css("border-bottom","1px solid #777")
                            .end();

                            

                            $(".shadowbox").fadeOut(300, function(){
                              $(".shadowbox").remove();
                            });
                            $(".group-threads").masonry();
                    });
        });

        
        // WHEN YOU CLICK MESSAGES THEY COME INTO FOCUS HELL YEAH.
        $(".message").click(function() {

            
            // console.log(self.thread);
            //TODO: ok this is really, really gross and hackey and I'm sorry
          if($(this).parent().hasClass("active"))
            return;

        self.thread.set("read",true);
        

          var shadow = $("<div />").addClass("shadowbox").hide();

          $("body").append(shadow);
          $(".shadowbox").fadeIn();

          var current_height = $(this).parent().height();

          var that = $(this).parent();
          that.find(".meta-comments").hide();

          that
            .addClass("active");
          $(".active").animate({left: "0"}, function(){
              that
                .removeClass("pure-u-1-2")
                .find(".comments").show()
                .animate({marginLeft: "0%", left: "0px"}, 400, function(){
                    that
                      .find(".close").show().end()
                      .siblings().removeClass("active");
                    $(this).addClass("pure-u-1-2");
                });
          });

          
          
        });

    },
    removeSelf : function() {
        console.log("removing myself!",this.$el);
        this.remove();
    }
});