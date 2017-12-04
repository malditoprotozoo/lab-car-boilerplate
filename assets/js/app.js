$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $("#navbar").addClass('shrink');
    $("#navbar").removeClass("half-basis-height");
    $("#logo1").addClass("invisible");
    $("#logo2").removeClass("invisible");
  } else {
    $("#navbar").removeClass("shrink");
    $("#navbar").addClass("half-basis-height");
    $("#logo2").addClass("invisible");
    $("#logo1").removeClass("invisible");
  }
});