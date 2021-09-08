$("#testimonial-owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 0,
  nav: false,
  dots: true,
  mouseDrag: true,
  slideBy: 2,
  responsiveClass: true,
  autoplaySpeed: 600,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

//clientel carousel
$("#clientele-owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 0,
  nav: false,
  dots: false,
  mouseDrag: true,
  responsiveClass: true,
  autoplaySpeed: 200,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// Back to top button function
$("#backToTop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});

$(document).ready(function () {
  var offset = 400;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $("#backToTop").fadeIn(duration);
    } else {
      $("#backToTop").fadeOut(duration);
    }
  });
});
