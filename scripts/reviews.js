"use strict";

/* ------------- Reviews carousel ------------- */

var container = document.querySelector(".container");
var controlsButtonReviewsForward = document.querySelector(".controls__button_reviews_forward");
var controlsButtonReviewsBack = document.querySelector(".controls__button_reviews_back");
var reviewsList = document.querySelector(".reviews__list");
var reviewsItems = document.querySelectorAll(".reviews__item");

document.addEventListener("DOMContentLoaded", function() {
  for (var i = reviewsItems.length - 1; i >= 0; i--) {
    reviewsItems[i].classList.add("reviews__item_hidden");
  }
  if (container.clientWidth === 320) {
    reviewsList.children[0].classList.remove("reviews__item_hidden");
  }
});

window.addEventListener("resize", function() {
  for (var i = reviewsItems.length - 1; i >= 0; i--) {
    reviewsItems[i].classList.add("reviews__item_hidden");
  }
  if (container.clientWidth === 320) {
    reviewsList.children[0].classList.remove("reviews__item_hidden");
  }
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

/* ------------- Reviews carousel swipe ------------- */

var reviewsCarousel = new Hammer(document.querySelector(".reviews__carousel"));
var $carouselReviews = $(".reviews__carousel").carousel({"interval": 0});
reviewsCarousel.get("swipe");
reviewsCarousel.on("swipeleft", function(){
    $carouselReviews.carousel("next");

    for (var i = 0; i < $(".indicator_pagination_reviews").length; i++) {
      if ($($(".indicator_pagination_reviews")[i]).hasClass("indicator_pagination_current")) {
        var num = i;
        if (num === $(".indicator_pagination_reviews").length - 1) {
          num = -1;
        }
      }
      $($(".indicator_pagination_reviews")[i]).removeClass("indicator_pagination_current");
    }
    $($(".indicator_pagination_reviews")[num + 1]).addClass("indicator_pagination_current");
});
reviewsCarousel.on("swiperight", function(){
    $carouselReviews.carousel("prev");

    for (var i = 0; i < $(".indicator_pagination_reviews").length; i++) {
      if ($($(".indicator_pagination_reviews")[i]).hasClass("indicator_pagination_current")) {
        var num = i;
        if (num === 0) {
          num = $(".indicator_pagination_reviews").length;
        }
      }
      $($(".indicator_pagination_reviews")[i]).removeClass("indicator_pagination_current");
    }
    $($(".indicator_pagination_reviews")[num - 1]).addClass("indicator_pagination_current");
});
