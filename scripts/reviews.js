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

/*controlsButtonReviewsForward.addEventListener("click", function() {
  if (container.clientWidth !== 320) {
    if (reviewsItems.length > 3) {
      controlsButtonReviewsBack.removeAttribute("disabled");
    }
    for (var i = 0; i <= reviewsItems.length - 1; i++) {
      if (reviewsItems[i].classList.contains("reviews__item_visible")) {
        if (i == reviewsItems.length - 4) {
          reviewsItems[i].classList.remove("reviews__item_visible");
          reviewsItems[i].classList.remove("reviews__item_current");
          reviewsItems[i + 3].classList.add("reviews__item_visible");
          reviewsItems[i + 1].classList.add("reviews__item_current");
          controlsButtonReviewsForward.setAttribute("disabled", "disabled");
          break;
        } else {
          reviewsItems[i].classList.remove("reviews__item_visible");
          reviewsItems[i].classList.remove("reviews__item_current");
          reviewsItems[i + 3].classList.add("reviews__item_visible");
          reviewsItems[i + 1].classList.add("reviews__item_current");
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
          reviewsItems[j - 2].classList.remove("reviews__item_current");
          reviewsItems[j - 3].classList.add("reviews__item_visible");
          reviewsItems[j - 3].classList.add("reviews__item_current");
          controlsButtonReviewsBack.setAttribute("disabled", "disabled");
          break;
        } else {
          reviewsItems[j].classList.remove("reviews__item_visible");
          reviewsItems[j - 2].classList.remove("reviews__item_current");
          reviewsItems[j - 3].classList.add("reviews__item_visible");
          reviewsItems[j - 3].classList.add("reviews__item_current");
          break;
        }
      }
    }
  }
});*/

controlsButtonReviewsForward.addEventListener("click", function() {
  for (var i = 0; i <= reviewsItems.length - 1; i++) {
    reviewsItems[i].classList.remove("reviews__item_visible");
    reviewsItems[(i + 3) % reviewsItems.length].classList.add("reviews__item_visible");
    var reviewsItemNext = reviewsItems[i].cloneNode(true);
    reviewsItems[i].remove();
    reviewsList.appendChild(reviewsItemNext);
    reviewsItems = document.querySelectorAll(".reviews__item");
    break;
  }
});

controlsButtonReviewsBack.addEventListener("click", function() {
  for (var i = 0; i <= reviewsItems.length - 1; i++) {
    reviewsItems[i + 2].classList.remove("reviews__item_visible");
    var reviewsItemPrevious = reviewsItems[reviewsItems.length - 1].cloneNode(true);
    reviewsItems[reviewsItems.length - 1].remove();
    reviewsList.insertBefore(reviewsItemPrevious, reviewsList.firstChild);
    reviewsList.firstChild.classList.add("reviews__item_visible");
    reviewsItems = document.querySelectorAll(".reviews__item");
    break;
  }
});
