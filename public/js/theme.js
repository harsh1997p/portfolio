// jQuery(window).scroll(function () {
//   if (jQuery(this).scrollTop() > 50) {
//     jQuery("#header").addClass('affix .navbar-image');
//     jQuery(".navbar-brand img").attr('src', 'images/logo.png');

//   } else {
//     jQuery("#header").removeClass('affix .navbar-image');
//     jQuery(".navbar-brand img").attr('src', 'img/logo.png');

//   }

// });

jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 50) {
    jQuery("#header").addClass('affix');

  } else {
    jQuery("#header").removeClass('affix');

  }

});

$(function(){ 
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
      navMain.collapse('hide');
  });
});






$(document).ready(function () {


  $('.clients').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 5
      },
      1000: {
        items: 5
      }
    }
  })




});



/* Animated Wow Js */	
