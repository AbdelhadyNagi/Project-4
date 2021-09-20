$(function () {
  "use strict";
  // Trigger page Loader...
  window.FakeLoader.init({});
  // Trigger Search Page
  var popup = $(".header .container li.search .popup-search");
  var openSearch = $(".header .container li.search");
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
    }, 300);
    popup.find(".content").animate(
      {
        marginBottom: "-=50",
      },
      600
    );
  });
  // Moving Elements on loading page
  setTimeout(function () {
    $(".landing-video h3 ").animate(
      {
        fontSize: 18,
        marginTop: 0,
      },
      600
    );
  }, 600);
  setTimeout(function () {
    $(".landing-video h1 ").fadeIn();
  }, 600);
  setTimeout(function () {
    $(".landing-video a ").fadeIn("slow").animate(
      {
        marginTop: 0,
      },
      600
    );
  }, 600);
});
