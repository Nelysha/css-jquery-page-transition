$(".btn_nav").click(function() {
  // animate content
  $(".section_transition").addClass("animated");
  $(".section-content")
    .fadeOut(100)
    .delay(2800)
    .fadeIn();

  setTimeout(function() {
    $(".section_transition").removeClass("animated");
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $(".section_transition").removeClass("fadeIn");
  }, 1500);
});
$(".btn_nav").click(function() {
    var name = $(this).attr('name');
    setTimeout(function () {
      $(".section-"+name).addClass('fadeIn');
    }, 1500);
});

