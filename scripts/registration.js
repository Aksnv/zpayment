"use strict";

/* ------------- Registration ------------- */

var registrationFormButtonExtraData = document.querySelector(".registration-form__button_extra-data");
var registrationFormFieldsetExtraData = document.querySelector(".registration-form__fieldset_extra-data");

document.addEventListener("DOMContentLoaded", function() {
  registrationFormFieldsetExtraData.classList.remove("registration-form__fieldset_visible");
  registrationFormButtonExtraData.classList.remove("registration-form__button_extra-data_hidden");
});

registrationFormButtonExtraData.addEventListener("click", function() {
  registrationFormFieldsetExtraData.classList.toggle("registration-form__fieldset_visible");
  registrationFormButtonExtraData.classList.toggle("registration-form__button_extra-data_visible");
});
