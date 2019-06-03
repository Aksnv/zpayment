"use strict";

/* ------------- Reviews carousel ------------- */

/*var container = document.querySelector(".container");*/
var controlsButtonReviewsForward = document.querySelector(".controls__button_reviews_forward");
var controlsButtonReviewsBack = document.querySelector(".controls__button_reviews_back");
var reviewsItems = document.querySelectorAll(".reviews__item");

document.addEventListener("DOMContentLoaded", function() {
  /*for (var i = reviewsItems.length - 1; i >= 0; i--) {
    reviewsItems[i]
  }*/
});

controlsButtonReviewsForward.addEventListener("click", function() {
  if (reviewsItems.length > 3) {
    controlsButtonReviewsBack.removeAttribute("disabled");
  }
});

controlsButtonReviewsBack.addEventListener("click", function() {

});
