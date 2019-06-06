"use strict";

/* ------------- Use cases carousel ------------- */

var container = document.querySelector(".container");
var controlsButtonUseCasesForward = document.querySelector(".controls__button_use-cases_forward");
var controlsButtonUseCasesBack = document.querySelector(".controls__button_use-cases_back");
var useCasesItems = document.querySelectorAll(".use-cases__item");
var useCasesIndicators = document.querySelectorAll(".indicator_pagination_use-cases");

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
          useCasesIndicators[i].classList.remove("indicator_pagination_current");
          useCasesItems[i + 1].classList.add("use-cases__item_current");
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
          useCasesIndicators[i].classList.remove("indicator_pagination_current");
          useCasesItems[i - 1].classList.add("use-cases__item_current");
          useCasesIndicators[i - 1].classList.add("indicator_pagination_current");
          break;
        }
      }
    }
  }
});
