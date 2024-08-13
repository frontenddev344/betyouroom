
// Menu Toggle Functionality JS Start

$(document).ready(function () {
  $(".menu-icon").click(function () {
    $("header").addClass("menuToggle");
  });
  $(".close-icon").click(function () {
    $("header").removeClass("menuToggle");
  });
});
// Menu Toggle Functionality JS End

// Slick Slider JS Start
$('.home-page-cards-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  dots:true,
  autoplaySpeed: 1500,
   responsive: [
       {
      breakpoint:1900 ,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '80px',
             }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '50px',
             }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }     
  ]
});
// Slick Slider JS End


// Read More Functionality JS Start 
$('.subpage-readmore-btn').click(function (e) {
  e.preventDefault();
  // console.log('click');
  $(this).parent().prev().slideToggle('slow');
  // $('.subpage-exp-content').slideToggle('slow');
  $(this).text($(this).text() == 'Read Less' ? 'Read More' : 'Read Less');
});
// Read More Functionality JS End 





// //Cookies JS Start
$("#cookie-popup button").click(function () {
  $("#cookie-popup").fadeOut();
  });

// //Cookies JS Start



$(document).ready(function(){
  $(".button-dropdown").click(function(){
    $(this).find(".dropdown").slideToggle();
  });
});

