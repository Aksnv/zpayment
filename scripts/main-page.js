"use strict";

/* ------------- Header - Main navigation ------------- */

var mainPage = document.querySelector(".main-page");
var mainNavigationButtonOpen = document.querySelector(".main-navigation__button_open");
var mainNavigationButtonClose = document.querySelector(".main-navigation__button_close");

document.addEventListener("DOMContentLoaded", function() {
  mainPage.classList.remove("main-page_visible");
});

mainNavigationButtonOpen.addEventListener("click", function() {
  mainPage.classList.add("main-page_visible");
});

mainNavigationButtonClose.addEventListener("click", function() {
  mainPage.classList.remove("main-page_visible");
});

window.addEventListener("resize", function() {
  if (container.clientWidth !== 1180) {
    mainPage.removeAttribute("style");
  }
});
