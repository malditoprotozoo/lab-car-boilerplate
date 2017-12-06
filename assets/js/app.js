/**
Función que determina el tamaño del margen superior
de header 
*/

var navbarHeight = $(".navbar").height();

$(window).on("load", function() {
  $("#header").css({ marginTop : navbarHeight + 64 + "px" });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $("#header").css({ marginTop : navbarHeight + "px" });
  } else {
    $("#header").css({ marginTop : navbarHeight + 64 + "px" });
  }
});

/* Función que permite que la barra de navegación se agrande
o encoja según el scroll */
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $("#navbar").removeClass("padding-both-small");
    $("#navbar").addClass("shrink");
    $("#logo1").addClass("invisible");
    $("#logo2").removeClass("invisible");
  } else {
    $("#navbar").addClass("padding-both-small");
    $("#navbar").removeClass("shrink");
    $("#logo2").addClass("invisible");
    $("#logo1").removeClass("invisible");
  }
});

/**
*
*/

$(document).ready(function() {
  $("#nav-burger").click(function() {
    $("#nav-items-big").toggleClass("is-hidden-touch");
  })
});

/**
* Abre el modal de inicio 
*/
$(document).ready(function(){
  $("#login-btn").click(function(){
    $("#login-modal").modal();
      $("#login-modal").modal({
        fadeDuration: 250
      });
    });
});

/** 
* Abre el modal de registro 
*/
$(document).ready(function(){
  $("#register-btn").click(function(){
    $("#register-modal").modal();
      $("#register-modal").modal({
        fadeDuration: 250
      });
    });
});

/**
Abre el modal de inicio al hacer clic en otro
botón 
*/
$(document).ready(function(){
  $("#login-link").click(function(){
    $("#login-modal").modal();
      $("#login-modal").modal({
        fadeDuration: 250
      });
    });
});

$.modal.close();