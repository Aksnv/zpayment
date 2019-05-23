"use strict";

/* ------------- Parallax animation ------------- */

var pageBody = document.querySelector("body");
var container = document.querySelector(".container");
var intro = document.querySelector(".intro");

intro.addEventListener("mousemove", function(e) {
  if (container.clientWidth === 1180) {
    pageBody.style.backgroundPosition = (-e.pageX/20 + pageBody.clientWidth/2 - 1299/2) + 'px ' + (-e.pageY/20 + 216) + 'px, ' +
                                        (e.pageX/30 + pageBody.clientWidth/2 - 1920/2) + 'px ' + (e.pageY/30 + 63) + 'px, ' +
                                        (-e.pageX/50 + pageBody.clientWidth/2 - 1624/2) + 'px ' + (-e.pageY/50 + 163) + 'px, ' +
                                        'center top' + ', ' +
                                        'left 1146px' + ', ' +
                                        'right 1442px' + ', ' +
                                        'left 2446px' + ', ' +
                                        'center 2662px' + ', ' +
                                        'right 3618px' + ', ' +
                                        'left 3880px';
  }
});