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
  $(".group-threads").masonry({
    columnWidth: '.message-wrapper',
    itemSelector: '.message-wrapper'
  });

  //
  // EVENT LISTENERS
  // 

  // WHEN YOU HOVER OVER THE YAMMER THING IT BRINGS DA MENU IN.
  $(".sidebar").css("margin-left","-350px");
  $(".logo-box").hover(function() {
    $(".sidebar").animate({marginLeft: 0}, 100);
  });

  $(".sidebar").hover(function(){}, function(){
    $(".sidebar").animate({marginLeft: -350}, 100);
  });

});