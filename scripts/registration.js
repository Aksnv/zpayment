"use strict";

/* ------------- Registration form ------------- */

var container = document.querySelector(".container");
var registrationForm = document.querySelector(".registration-form");
var registrationFormFieldText = document.querySelectorAll(".registration-form__field_text");
var registrationFormFieldEmail = document.querySelector(".registration-form__field_email");
var registrationFormSignatureEmail = document.querySelectorAll(".registration-form__signature_email");
var registrationFormButtonExtraData = document.querySelector(".registration-form__button_extra-data");
var registrationFormFieldsetExtraData = document.querySelector(".registration-form__fieldset_extra-data");

document.addEventListener("DOMContentLoaded", function() {
  registrationFormFieldsetExtraData.classList.remove("registration-form__fieldset_visible");
  registrationFormButtonExtraData.classList.remove("registration-form__button_extra-data_hidden");
  if (container.clientWidth === 320) {
    registrationFormButtonExtraData.innerHTML = "Еще данные (необязательно)";
  } else {
    registrationFormButtonExtraData.innerHTML = "Дополнительные данные (необязательно)";
  }
});

registrationFormButtonExtraData.addEventListener("click", function() {
  registrationFormFieldsetExtraData.classList.toggle("registration-form__fieldset_visible");
  registrationFormButtonExtraData.classList.toggle("registration-form__button_extra-data_visible");
});

window.addEventListener("resize", function() {
  if (container.clientWidth === 320) {
    registrationFormButtonExtraData.innerHTML = "Еще данные (необязательно)";
  } else {
    registrationFormButtonExtraData.innerHTML = "Дополнительные данные (необязательно)";
  }
});

registrationForm.addEventListener("submit", function(e) {
  if (!registrationFormFieldEmail.value) {
    e.preventDefault();
    registrationFormFieldEmail.classList.remove("registration-form__field_valid");
    registrationFormFieldEmail.classList.add("registration-form__field_invalid");
  }
});

registrationForm.addEventListener("blur", function() {
  for (var i = registrationFormFieldText.length - 1; i >= 0; i--) {
    if (registrationFormFieldText[i].value) {
      registrationFormFieldText[i].classList.remove("registration-form__field_invalid");
      registrationFormFieldText[i].classList.add("registration-form__field_valid");
      registrationFormFieldText[i].nextElementSibling.firstElementChild.classList.add("registration-form__signature_focused");
    } else {
      registrationFormFieldText[i].nextElementSibling.firstElementChild.classList.remove("registration-form__signature_focused");
    }
  }
}, true);
