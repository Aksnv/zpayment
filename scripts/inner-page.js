"use strict";

/* ------------- Header - Main navigation ------------- */

var innerPage = document.querySelector(".inner-page");
var mainNavigationButtonOpen = document.querySelector(".main-navigation__button_open");
var mainNavigationButtonClose = document.querySelector(".main-navigation__button_close");

document.addEventListener("DOMContentLoaded", function() {
  innerPage.classList.remove("inner-page_visible");
});

mainNavigationButtonOpen.addEventListener("click", function() {
  innerPage.classList.add("inner-page_visible");
});

mainNavigationButtonClose.addEventListener("click", function() {
  innerPage.classList.remove("inner-page_visible");
});
