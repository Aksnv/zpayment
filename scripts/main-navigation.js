"use strict";

/* ------------- Header - Main navigation ------------- */

var mainNavigationButtonOpen = document.querySelector(".main-navigation__button_open");
var mainNavigationButtonClose = document.querySelector(".main-navigation__button_close");
var mainNavigation = document.querySelector(".main-navigation");
var siteNavigationHeader = document.querySelector(".site-navigation_header");
var userNavigation = document.querySelector(".user-navigation");
var languageNavigation = document.querySelector(".language-navigation");

document.addEventListener("DOMContentLoaded", function() {
  mainNavigationButtonOpen.classList.remove("main-navigation__button_hidden");
  mainNavigation.classList.remove("main-navigation_visible");
  siteNavigationHeader.classList.remove("site-navigation_visible");
  userNavigation.classList.remove("user-navigation_visible");
  languageNavigation.classList.remove("language-navigation_visible");
});

mainNavigationButtonOpen.addEventListener("click", function() {
  mainNavigationButtonOpen.classList.add("main-navigation__button_hidden");
  mainNavigationButtonClose.classList.remove("main-navigation__button_hidden");
  mainNavigation.classList.add("main-navigation_visible");
  siteNavigationHeader.classList.add("site-navigation_visible");
  userNavigation.classList.add("user-navigation_visible");
  languageNavigation.classList.add("language-navigation_visible");
});

mainNavigationButtonClose.addEventListener("click", function() {
  mainNavigationButtonOpen.classList.remove("main-navigation__button_hidden");
  mainNavigationButtonClose.classList.add("main-navigation__button_hidden");
  mainNavigation.classList.remove("main-navigation_visible");
  siteNavigationHeader.classList.remove("site-navigation_visible");
  userNavigation.classList.remove("user-navigation_visible");
  languageNavigation.classList.remove("language-navigation_visible");
});
