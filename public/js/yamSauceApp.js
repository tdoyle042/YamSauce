// TODO: In prime time, put these in document.ready so they
// remain private / don't pollute the namespace.
var msnry;

// Document ready stuff
$(document).ready(function() {
  $(".sidebar").show();

  //
  // TEMPLATING (should be done before any other DOM-related stuff)
  //

  // Templates and Context (Change here when not testing)
  // var message_template = $("#message-template").html();
  // var message_context = test_messages

  // MESSAGES
  // $(".content").html(Mustache.render(message_template, message_context));


  //
  // GET MASONRY GOIN'
  //
  $(".content").masonry({
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

    var shadow = $("<div />").addClass("shadowbox").hide().click(function(){
      $(".active").removeClass("active pure-u-1").addClass("pure-u-1-2")
          .find(".message")
            .removeClass("pure-u-1-2")
          .end().find(".meta-comments")
            .show()
          .end()
          .find(".close")
            .hide()
          .end()
          .height("auto");

      $(this).fadeOut(function(){
        $(".shadowbox").remove();
      });
      $("content").masonry();
    });

    $("body").append(shadow);
    $(".shadowbox").fadeIn();

    var current_height = $(this).parent().height();

    $(this).parent()
      .addClass("active pure-u-1")
      .removeClass("pure-u-1-2")
      .find(".close").show().end()
      .height(Math.max(current_height, 550))
      .siblings().removeClass("active");
    $(this).addClass("pure-u-1-2");
    $(this).find(".meta-comments").hide();
  });

  // WHEN YOU CLOSE THINGS THEY CLOSE!
  $(".close").click(function(){
    // Super lame, I know, but hackathon so whatever
    console.log("shadowbox click!");
    $(".shadowbox").click();
  });

  // WHEN YOU HOVER OVER THE YAMMER THING IT BRINGS DA MENU IN.
  $(".sidebar").css("margin-left","-350px");
  $(".logo-box").hover(function() {
    $(".sidebar").animate({marginLeft: 0}, 100);
  });

  $(".sidebar").hover(function(){}, function(){
    $(".sidebar").animate({marginLeft: -350}, 100);
  });

});