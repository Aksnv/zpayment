"use strict";

/* ------------- Reviews carousel ------------- */

var container = document.querySelector(".container");
var controlsButtonReviewsForward = document.querySelector(".controls__button_reviews_forward");
var controlsButtonReviewsBack = document.querySelector(".controls__button_reviews_back");
var reviewsItems = document.querySelectorAll(".reviews__item");

document.addEventListener("DOMContentLoaded", function() {
  /*for (var i = reviewsItems.length - 1; i >= 0; i--) {
    reviewsItems[i]
  }*/
});

controlsButtonReviewsForward.addEventListener("click", function() {
  if (container.clientWidth !== 320) {
    if (reviewsItems.length > 3) {
      controlsButtonReviewsBack.removeAttribute("disabled");
    }
    for (var i = 0; i <= reviewsItems.length - 1; i++) {
      if (reviewsItems[i].classList.contains("reviews__item_visible")) {
        if (i == useCasesItems.length - 4) {
          controlsButtonReviewsForward.setAttribute("disabled", "disabled");
          /*break;*/
        } /*else {*/
          reviewsItems[i].classList.remove("reviews__item_visible");
          reviewsItems[i + 3].classList.add("reviews__item_visible");
          break;
        /*}*/
      }
    }
  }
});

controlsButtonReviewsBack.addEventListener("click", function() {

});
