$(function () {
  "use strict";
  // Trigger page Loader...
  window.FakeLoader.init({});
  // Trigger Search Page
  var popup = $(".header .container li.search .popup-search");
  var openSearch = $(".header .container li.search i");
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
  // Moving Elements on loading page
  setTimeout(function () {
    $(".landing-video h3 ").animate(
      {
        fontSize: 18,
        top: "520px",
      },
      800
    );
  }, 450);
  setTimeout(function () {
    $(".landing-video h1 ").fadeIn();
  }, 800);
  setTimeout(function () {
    $(".landing-video a ").fadeIn().animate(
      {
        top: "350px",
        left: "700px",
        fontSize: "12px",
        borderWidth: "2px",
      },
      800,
      "easeInOutBounce"
    );
  }, 1400);
});
