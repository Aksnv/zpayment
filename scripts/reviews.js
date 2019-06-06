"use strict";

/* ------------- Reviews carousel ------------- */

var container = document.querySelector(".container");
var controlsButtonReviewsForward = document.querySelector(".controls__button_reviews_forward");
var controlsButtonReviewsBack = document.querySelector(".controls__button_reviews_back");
var reviewsList = document.querySelector(".reviews__list");
var reviewsItems = document.querySelectorAll(".reviews__item");

document.addEventListener("DOMContentLoaded", function() {
  /*for (var i = reviewsItems.length - 1; i >= 0; i--) {
    reviewsItems[i]
  }*/
});

controlsButtonReviewsForward.addEventListener("click", function() {
  for (var i = 0; i <= reviewsItems.length - 1; i++) {
    reviewsItems[i].classList.remove("reviews__item_current");
  }
  for (var i = 0; i <= reviewsItems.length - 1; i++) {
    reviewsItems[i].classList.remove("reviews__item_visible");
    reviewsItems[(i + 3) % reviewsItems.length].classList.add("reviews__item_visible");
    reviewsItems[i + 2].classList.add("reviews__item_current");
    var reviewsItemNext = reviewsItems[i].cloneNode(true);
    reviewsItems[i].remove();
    reviewsList.appendChild(reviewsItemNext);
    reviewsItems = document.querySelectorAll(".reviews__item");
    break;
  }
});

controlsButtonReviewsBack.addEventListener("click", function() {
  for (var i = 0; i <= reviewsItems.length - 1; i++) {
    reviewsItems[i].classList.remove("reviews__item_current");
  }
  for (var i = 0; i <= reviewsItems.length - 1; i++) {
    reviewsItems[i + 2].classList.remove("reviews__item_visible");
    var reviewsItemPrevious = reviewsItems[reviewsItems.length - 1].cloneNode(true);
    reviewsItems[reviewsItems.length - 1].remove();
    reviewsList.insertBefore(reviewsItemPrevious, reviewsList.firstChild);
    reviewsList.firstChild.classList.add("reviews__item_visible");
    reviewsList.children[1].classList.add("reviews__item_current");
    reviewsItems = document.querySelectorAll(".reviews__item");
    break;
  }
});
