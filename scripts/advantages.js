"use strict";

/* ------------- Advantages items ------------- */

var container = document.querySelector(".container");
var advantagesList = document.querySelector(".advantages-list");
var advantagesItems = document.querySelectorAll(".advantages-item");

document.addEventListener("DOMContentLoaded", function() {
  if (container.clientWidth === 320) {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.add("advantages-item_hidden");
    }
  } else {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.remove("advantages-item_hidden");
    }
  }
  if (container.clientWidth === 1180) {
    for (var i = 2; i >= 0; i--) {
      advantagesItems[i].classList.add("advantages-item_hidden_left");
    }
    for (var i = advantagesItems.length - 1; i >= 3; i--) {
      advantagesItems[i].classList.add("advantages-item_hidden_right");
    }
  } else {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.remove("advantages-item_hidden_left");
      advantagesItems[i].classList.remove("advantages-item_hidden_right");
    }
  }
});

window.addEventListener("resize", function() {
  if (container.clientWidth === 320) {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.add("advantages-item_hidden");
    }
  } else {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.remove("advantages-item_hidden");
    }
  }
  if (container.clientWidth === 1180) {
    for (var i = 2; i >= 0; i--) {
      advantagesItems[i].classList.add("advantages-item_hidden_left");
    }
    for (var i = advantagesItems.length - 1; i >= 3; i--) {
      advantagesItems[i].classList.add("advantages-item_hidden_right");
    }
  } else {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.remove("advantages-item_hidden_left");
      advantagesItems[i].classList.remove("advantages-item_hidden_right");
    }
  }
});

/* ------------- Advantages items animation ------------- */

window.addEventListener("scroll", function() {
  if (container.clientWidth === 1180) {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.add("advantages-item_animation");
    }
  }
});

/* ------------- Advantages carousel swipe ------------- */

var advantagesCarousel = new Hammer(document.querySelector(".advantages__carousel"));
var $carouselAdvantages = $(".advantages__carousel").carousel({"interval": 0});
advantagesCarousel.get("swipe");
advantagesCarousel.on("swipeleft", function(){
    $carouselAdvantages.carousel("next");

    for (var i = 0; i < $(".indicator_pagination_advantages").length; i++) {
      if ($($(".indicator_pagination_advantages")[i]).hasClass("indicator_pagination_current")) {
        var num = i;
        if (num === $(".indicator_pagination_advantages").length - 1) {
          num = -1;
        }
      }
      $($(".indicator_pagination_advantages")[i]).removeClass("indicator_pagination_current");
    }
    $($(".indicator_pagination_advantages")[num + 1]).addClass("indicator_pagination_current");
});
advantagesCarousel.on("swiperight", function(){
    $carouselAdvantages.carousel("prev");

    for (var i = 0; i < $(".indicator_pagination_advantages").length; i++) {
      if ($($(".indicator_pagination_advantages")[i]).hasClass("indicator_pagination_current")) {
        var num = i;
        if (num === 0) {
          num = $(".indicator_pagination_advantages").length;
        }
      }
      $($(".indicator_pagination_advantages")[i]).removeClass("indicator_pagination_current");
    }
    $($(".indicator_pagination_advantages")[num - 1]).addClass("indicator_pagination_current");
});
