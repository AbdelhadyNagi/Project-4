$(function () {
  "use strict";
  // Trigger page Loader...
  window.FakeLoader.init({});
  // Trigger Search Page
  var popup = $(".header .header-content li.search .popup-search");
  var openSearch = $(".header .header-content li.search i");
  var closeSearch = $(".header .closing");
  openSearch.click(function () {
    setTimeout(function () {
      popup.removeClass("visibility");
      closeSearch.removeClass("visibility");
      popup.css({
        cursor: "auto",
      });
    }, 300);
    popup.find(".content").animate(
      {
        marginBottom: "+=50",
      },
      600
    );
  });
  closeSearch.click(function () {
    setTimeout(function () {
      popup.addClass("visibility");
      closeSearch.addClass("visibility");
    }, 250);
    popup.find(".content").animate(
      {
        marginBottom: "-=50",
      },
      300
    );
  });
  //Slider Top
  $(".slider-pro.top").sliderPro({
    width: 1000,
    height: 280,
    imageScaleMode: "exact",
    centerImage: false,
    arrows: true,
    buttons: true,
    waitForLayers: true,
    autoplay: false,
  });
  //Calender
  $("#container").simpleCalendar();
  //Slider Down
  $(".slider-pro.down").sliderPro({
    width: 2000,
    height: 1100,
    arrows: true,
    buttons: false,
    autoplay: false,
  });
  // hover
  $(".sec-five #demo .sp-slide .img").hover(function () {
    $(this).find(".hover").fadeIn("slow");
  });
  $(".sec-five #demo .sp-slide .img").mouseleave(function () {
    $(this).find(".hover").fadeOut("fast");
  });
  //Logo Slider
  $(".demo").slick({
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    touchMove: true,
    rows: 1,
    infinite: true,
    centerPadding: "30px",
    autoplay: true,
    autoplaySpeed: 1500,
  });
  // Vertical Page Slider
  $(".container").fsScroll();
});
