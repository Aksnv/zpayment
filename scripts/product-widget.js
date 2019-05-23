"use strict";

/* ------------- Product widget ------------- */

var productWidgetFormButtonIncrease = document.querySelector(".product-widget__form-button_increase");
var productWidgetFormButtonDecrease = document.querySelector(".product-widget__form-button_decrease");
var productWidgetFormFieldText = document.querySelector(".product-widget__form-field_text");

productWidgetFormButtonIncrease.addEventListener("click", function() {
  productWidgetFormButtonDecrease.removeAttribute("disabled");
  if (productWidgetFormFieldText.value < 99) {
    productWidgetFormFieldText.value++;
  } else {
    productWidgetFormButtonIncrease.setAttribute("disabled", "disabled");
  }
});

productWidgetFormButtonDecrease.addEventListener("click", function() {
  productWidgetFormButtonIncrease.removeAttribute("disabled");
  if (productWidgetFormFieldText.value > 1) {
    productWidgetFormFieldText.value--;
  } else {
    productWidgetFormButtonDecrease.setAttribute("disabled", "disabled");
  }
});

productWidgetFormFieldText.addEventListener("blur", function() {
  productWidgetFormButtonDecrease.removeAttribute("disabled");
  productWidgetFormButtonIncrease.removeAttribute("disabled");
  if (productWidgetFormFieldText.value == 1) {
    productWidgetFormButtonDecrease.setAttribute("disabled", "disabled");
  } else if (productWidgetFormFieldText.value == 99) {
    productWidgetFormButtonIncrease.setAttribute("disabled", "disabled");
  }
});
