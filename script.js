$(document).ready(function(){
  $("#nav-about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 2000);
  });
});
