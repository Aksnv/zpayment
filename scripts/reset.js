"use strict";

/* ------------- Reset password form ------------- */

var container = document.querySelector(".container");
var resetForm = document.querySelector(".reset-form");
var resetFormFieldText = document.querySelectorAll(".reset-form__field_text");
var resetFormFieldEmail = document.querySelector(".reset-form__field_email");
var resetFormSignatureEmail = document.querySelectorAll(".reset-form__signature_email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

document.addEventListener("DOMContentLoaded", function() {
  if (storage) {
    resetFormFieldEmail.value = storage;
    resetFormFieldEmail.focus();
  } else {
    resetFormFieldEmail.focus();
  }
  if (resetFormFieldEmail.value) {
    resetFormFieldEmail.nextElementSibling.firstElementChild.classList.add("reset-form__signature_focused");
  } else {
    resetFormFieldEmail.nextElementSibling.firstElementChild.classList.remove("reset-form__signature_focused");
  }
});

resetForm.addEventListener("submit", function(e) {
  if (!resetFormFieldEmail.value) {
    e.preventDefault();
    resetFormFieldEmail.classList.remove("reset-form__field_valid");
    resetFormFieldEmail.classList.add("reset-form__field_invalid");
  }
  if (isStorageSupport) {
    localStorage.setItem("email", resetFormFieldEmail.value);
  }
});

resetForm.addEventListener("blur", function() {
  if (resetFormFieldEmail.value) {
    resetFormFieldEmail.classList.remove("reset-form__field_invalid");
    resetFormFieldEmail.classList.add("reset-form__field_valid");
    resetFormFieldEmail.nextElementSibling.firstElementChild.classList.add("reset-form__signature_focused");
  } else {
    resetFormFieldEmail.nextElementSibling.firstElementChild.classList.remove("reset-form__signature_focused");
  }
}, true);
