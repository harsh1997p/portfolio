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


(function ($) {
  "use strict";

var $window = $(window); 
var $body = $('body'); 

/* Preloader Effect */
$window.on('load', function(){
  $(".preloader").fadeOut(600);
});

/* Sticky Header */	
if($('.active-sticky-header').length){
  $window.on('resize', function(){
    setHeaderHeight();
  });

  function setHeaderHeight(){
     $("header.main-header").css("height", $('header .header-sticky').outerHeight());
  }	

  $window.on("scroll", function() {
    var fromTop = $(window).scrollTop();
    setHeaderHeight();
    var headerHeight = $('header .header-sticky').outerHeight()
    $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
    $("header .header-sticky").toggleClass("active", (fromTop > 600));
  });
}	


/* Text Effect Animation */
if ($('.text-anime-style-1').length) {
  let staggerAmount 	= 0.05,
    translateXValue = 0,
    delayValue 		= 0.5,
     animatedTextElements = document.querySelectorAll('.text-anime-style-1');
  
  animatedTextElements.forEach((element) => {
    let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.words, {
      duration: 1,
      delay: delayValue,
      x: 20,
      autoAlpha: 0,
      stagger: staggerAmount,
      scrollTrigger: { trigger: element, start: "top 90%" },
      });
  });		
}

if ($('.text-anime-style-2').length) {				
  let	 staggerAmount 		= 0.03,
     translateXValue	= 20,
     delayValue 		= 0.1,
     easeType 			= "power2.out",
     animatedTextElements = document.querySelectorAll('.text-anime-style-2');
  
  animatedTextElements.forEach((element) => {
    let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%"},
      });
  });		
}

if ($('.text-anime-style-3').length) {		
  let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
  
   animatedTextElements.forEach((element) => {
    //Reset if needed
    if (element.animation) {
      element.animation.progress(1).kill();
      element.split.revert();
    }

    element.split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });
    gsap.set(element, { perspective: 400 });

    gsap.set(element.split.chars, {
      opacity: 0,
      x: "50",
    });

    element.animation = gsap.to(element.split.chars, {
      scrollTrigger: { trigger: element,	start: "top 90%" },
      x: "0",
      y: "0",
      rotateX: "0",
      opacity: 1,
      duration: 1,
      ease: Back.easeOut,
      stagger: 0.02,
    });
  });		
}



$('.marquee-with-options').marquee({
	speed: 5000,
	gap: 50,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true
});

  
})(jQuery);

/* Animated Wow Js */	
