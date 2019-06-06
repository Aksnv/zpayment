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
        if (i == reviewsItems.length - 4) {
          reviewsItems[i].classList.remove("reviews__item_visible");
          reviewsItems[i + 3].classList.add("reviews__item_visible");
          controlsButtonReviewsForward.setAttribute("disabled", "disabled");
          console.log(i);
          break;
        } else {
          reviewsItems[i].classList.remove("reviews__item_visible");
          reviewsItems[i + 3].classList.add("reviews__item_visible");
          console.log(i);
          break;
        }
      }
    }
  }
});

controlsButtonReviewsBack.addEventListener("click", function() {
  if (container.clientWidth !== 320) {
    controlsButtonReviewsForward.removeAttribute("disabled");
    for (var j = reviewsItems.length - 1; j >= 0; j--) {
      if (reviewsItems[j].classList.contains("reviews__item_visible")) {
        if (j == reviewsItems.length - 3) {
          reviewsItems[j].classList.remove("reviews__item_visible");
          reviewsItems[j - 3].classList.add("reviews__item_visible");
          controlsButtonReviewsBack.setAttribute("disabled", "disabled");
          console.log(j);
          break;
        } else {
          reviewsItems[j].classList.remove("reviews__item_visible");
          reviewsItems[j - 3].classList.add("reviews__item_visible");
          console.log(j);
          break;
        }
      }
    }
  }
});
