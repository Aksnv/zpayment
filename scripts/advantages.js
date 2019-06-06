"use strict";

/* ------------- Advantages items ------------- */

var container = document.querySelector(".container");
var advantagesList = document.querySelector(".advantages-list");
var advantagesItems = document.querySelectorAll(".advantages-item");

document.addEventListener("DOMContentLoaded", function() {
  if (container.clientWidth === 320) {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.add("advantages-item_hidden");
    }
    advantagesList.children[0].classList.remove("advantages-item_hidden");
  }
});

window.addEventListener("resize", function() {
  if (container.clientWidth === 320) {
    for (var i = advantagesItems.length - 1; i >= 0; i--) {
      advantagesItems[i].classList.add("advantages-item_hidden");
    }
    advantagesList.children[0].classList.remove("advantages-item_hidden");
  }
});
