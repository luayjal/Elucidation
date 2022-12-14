document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

$(document).ready(function () {
  $(".center-slider").slick({
    rtl: true,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    adaptiveHeight: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    dots: true,
    customPaging: function (slider, i) {
      return '<a href="javascript:void(0);" class="dot-item"></a>';
    },
    appendDots: $(".dots"),
    dotsClass: "d-flex container-dots",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".items-slider").slick({
    rtl: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2700,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "20px",
    adaptiveHeight: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    dots: true,
    customPaging: function (slider, i) {
      return '<a href="javascript:void(0);" class="dot-item"></a>';
    },
    appendDots: $(".dots"),
    dotsClass: "d-flex container-dots",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
           centerPadding: "20px",
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
  });
});
