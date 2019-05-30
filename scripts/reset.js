"use strict";

/* ------------- Reset password form ------------- */

var container = document.querySelector(".container");
var resetForm = document.querySelector(".reset-form");
var resetFormFieldText = document.querySelectorAll(".reset-form__field_text");
var resetFormFieldEmail = document.querySelector(".reset-form__field_email");
var resetFormSignatureEmail = document.querySelectorAll(".reset-form__signature_email");

resetForm.addEventListener("submit", function(e) {
  if (!resetFormFieldEmail.value) {
    e.preventDefault();
    resetFormFieldEmail.classList.remove("reset-form__field_valid");
    resetFormFieldEmail.classList.add("reset-form__field_invalid");
  }
});

resetForm.addEventListener("blur", function() {
  for (var i = resetFormFieldText.length - 1; i >= 0; i--) {
    if (resetFormFieldText[i].value) {
      resetFormFieldText[i].classList.remove("reset-form__field_invalid");
      resetFormFieldText[i].classList.add("reset-form__field_valid");
      resetFormFieldText[i].nextElementSibling.firstElementChild.classList.add("reset-form__signature_focused");
    } else {
      resetFormFieldText[i].nextElementSibling.firstElementChild.classList.remove("reset-form__signature_focused");
    }
  }
}, true);
