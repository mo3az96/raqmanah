$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  lazyLoad();

  /************************************ Menu ************************************/
  if ($(window).width() <= 767) {
    $(".menu-btn").click(function () {
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
      $(".overlay").fadeIn();
    });
    $(".close-btn,.overlay").click(function () {
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
      $(".overlay").fadeOut();
    });
    $(".has-children>a").click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(".has-children>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-children>a").not(this).siblings().slideUp(500);
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Services Slider ************************************/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    loop: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".services-slider .swiper-btn-next",
      prevEl: ".services-slider .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Blog Slider ************************************/
  var blogSwiper = new Swiper(".blog-slider .swiper", {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 15,

    pagination: {
      el: ".blog-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".blog-slider .swiper-btn-next",
      prevEl: ".blog-slider .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Footer ************************************/
  if ($(window).width() <= 767) {
    $(".footer-title").click(function () {
      $(".footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-title").not(this).siblings().slideUp(500);
    });
  }
});
