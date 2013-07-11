//Load All Required Javascript Files
require(['underscore','backbone','views/groupView','jquery-2.0.3','masonry','mustache'],
	function(underscore,backbone,GroupView){
	console.log("Got JS Modules for Application");

	
  // TODO: In prime time, put these in document.ready so they
  // remain private / don't pollute the namespace.
  var msnry;

  // Document ready stuff
  $(document).ready(function() {
    //
    // TEMPLATING (should be done before any other DOM-related stuff)
    //

    // Templates and Context (Change here when not testing)
    var message_template = $("#message-template").html();
    var message_context = test_messages

    // MESSAGES
    $(".content").html(Mustache.render(message_template, message_context));


    //
    // GET MASONRY GOIN'
    //
    var container = document.querySelector('.content');

    msnry = new Masonry( container, {
      columnWidth: '.message-wrapper',
      itemSelector: '.message-wrapper'
    });


    //
    // EVENT LISTENERS
    // 

    // WHEN YOU CLICK THINNGS THEY GET FOCUSED. HOT DOG!
    $(".message").click(function() {
      if($(this).parent().hasClass("active"))
        return;

      var shadow = $("<div />").addClass("shadowbox").click(function(){
        msnry.unstamp($(".message-wrapper").toArray());
        $(".active").removeClass("active pure-u-1").addClass("pure-u-1-2")
            .children(".message").removeClass("pure-u-1-2");

        $(this).remove();
        msnry.layout();
      });

      $("body").append(shadow);
      $(this).parent().addClass("active pure-u-1").removeClass("pure-u-1-2").siblings().removeClass("active");
      $(this).addClass("pure-u-1-2");
      msnry.stamp($(this).parent()[0]);
    });


    // WHEN YOU HOVER OVER THE YAMMER THING IT BRINGS DA MENU IN.
    $(".sidebar").css("margin-left","-350px");
    $(".logo").hover(function() {
      $(".sidebar").animate({marginLeft: 0}, 100);
    });

    $(".sidebar").hover(function(){}, function(){
      $(".sidebar").animate({marginLeft: -350}, 100);
    });

  });
});