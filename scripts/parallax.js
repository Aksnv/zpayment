"use strict";

/* ------------- Parallax animation ------------- */

var container = document.querySelector(".container");
var intro = document.querySelector(".intro");
var stars = document.querySelector(".stars");
var chains = document.querySelector(".chains");
var logos = document.querySelector(".logos");

intro.addEventListener("mousemove", function(e) {
  if (container.clientWidth === 1180) {
    stars.style.transform = "translate(" + (-e.pageX/20 - 1299/2) + "px, " + (-e.pageY/20) + "px)";
    chains.style.transform = "translate(" + (e.pageX/30 - 1920/2) + "px, " + (e.pageY/30) + "px)";
    logos.style.transform = "translate(" + (-e.pageX/50 - 1624/2) + "px, " + (-e.pageY/50) + "px)";
  }
});
