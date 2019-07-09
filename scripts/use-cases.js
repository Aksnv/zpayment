"use strict";

/* ------------- Use cases carousel ------------- */

var container = document.querySelector(".container");
var controlsButtonUseCasesForward = document.querySelector(".controls__button_use-cases_forward");
var controlsButtonUseCasesBack = document.querySelector(".controls__button_use-cases_back");
var useCases = document.querySelector(".use-cases");
var useCasesList = document.querySelector(".use-cases__list");
var useCasesItems = document.querySelectorAll(".use-cases__item");
var useCasesIndicators = document.querySelectorAll(".indicator_pagination_use-cases");

document.addEventListener("DOMContentLoaded", function() {
  if (container.clientWidth === 768) {
    for (var i = useCasesItems.length - 1; i >= 0; i--) {
      useCasesItems[i].classList.add("use-cases__item_hidden");
    }
    useCasesList.children[0].classList.remove("use-cases__item_hidden");
  }
  if (container.clientWidth === 320) {
    for (var i = useCasesItems.length - 1; i >= 0; i--) {
      useCasesItems[i].classList.add("use-cases__item_hidden");
    }
  }
});

window.addEventListener("resize", function() {
  if (container.clientWidth === 768) {
    for (var i = useCasesItems.length - 1; i >= 0; i--) {
      useCasesItems[i].classList.add("use-cases__item_hidden");
    }
    useCasesList.children[0].classList.remove("use-cases__item_hidden");
  }
  if (container.clientWidth === 320) {
    for (var i = useCasesItems.length - 1; i >= 0; i--) {
      useCasesItems[i].classList.add("use-cases__item_hidden");
    }
  }
});

controlsButtonUseCasesForward.addEventListener("click", function() {
  if (container.clientWidth === 768) {
    if (useCasesItems.length > 1) {
      controlsButtonUseCasesBack.removeAttribute("disabled");
    }
    for (var i = 0; i <= useCasesItems.length - 1; i++) {
      if (useCasesItems[i].classList.contains("use-cases__item_current")) {
        if (i == useCasesItems.length - 1) {
          controlsButtonUseCasesForward.setAttribute("disabled", "disabled");
          break;
        } else {
          useCasesItems[i].classList.remove("use-cases__item_current");
          useCasesItems[i].classList.add("use-cases__item_hidden");
          useCasesIndicators[i].classList.remove("indicator_pagination_current");
          useCasesItems[i + 1].classList.add("use-cases__item_current");
          useCasesItems[i + 1].classList.remove("use-cases__item_hidden");
          useCasesIndicators[i + 1].classList.add("indicator_pagination_current");
          break;
        }
      }
    }
  }
});

controlsButtonUseCasesBack.addEventListener("click", function() {
  if (container.clientWidth === 768) {
    controlsButtonUseCasesForward.removeAttribute("disabled");
    for (var i = 0; i <= useCasesItems.length - 1; i++) {
      if (useCasesItems[i].classList.contains("use-cases__item_current")) {
        if (i == 0) {
          controlsButtonUseCasesBack.setAttribute("disabled", "disabled");
          break;
        } else {
          useCasesItems[i].classList.remove("use-cases__item_current");
          useCasesItems[i].classList.add("use-cases__item_hidden");
          useCasesIndicators[i].classList.remove("indicator_pagination_current");
          useCasesItems[i - 1].classList.add("use-cases__item_current");
          useCasesItems[i - 1].classList.remove("use-cases__item_hidden");
          useCasesIndicators[i - 1].classList.add("indicator_pagination_current");
          break;
        }
      }
    }
  }
});

/* ------------- Use cases items animation ------------- */

window.addEventListener("scroll", function() {
  if ((container.clientWidth === 1180) && (useCases.getBoundingClientRect().top < document.documentElement.clientHeight)) {
    for (var i = useCasesItems.length - 1; i >= 0; i--) {
      useCasesItems[i].classList.add("use-cases__item_animation");
    }
  }
});

/* ------------- Use cases carousel swipe ------------- */

var useCasesCarousel = new Hammer(document.querySelector(".use-cases__carousel"));
var $carouselUseCases = $(".use-cases__carousel").carousel({"interval": 0});
useCasesCarousel.get("swipe");
useCasesCarousel.on("swipeleft", function(){
    $carouselUseCases.carousel("next");

    for (var i = 0; i < $(".indicator_pagination_use-cases").length; i++) {
      if ($($(".indicator_pagination_use-cases")[i]).hasClass("indicator_pagination_current")) {
        var num = i;
        if (num === $(".indicator_pagination_use-cases").length - 1) {
          num = -1;
        }
      }
      $($(".indicator_pagination_use-cases")[i]).removeClass("indicator_pagination_current");
    }
    $($(".indicator_pagination_use-cases")[num + 1]).addClass("indicator_pagination_current");
});
useCasesCarousel.on("swiperight", function(){
    $carouselUseCases.carousel("prev");

    for (var i = 0; i < $(".indicator_pagination_use-cases").length; i++) {
      if ($($(".indicator_pagination_use-cases")[i]).hasClass("indicator_pagination_current")) {
        var num = i;
        if (num === 0) {
          num = $(".indicator_pagination_use-cases").length;
        }
      }
      $($(".indicator_pagination_use-cases")[i]).removeClass("indicator_pagination_current");
    }
    $($(".indicator_pagination_use-cases")[num - 1]).addClass("indicator_pagination_current");
});
