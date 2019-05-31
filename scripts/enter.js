"use strict";

/* ------------- Enter form ------------- */

var container = document.querySelector(".container");
var enterForm = document.querySelector(".enter-form");
var enterFormFieldText = document.querySelectorAll(".enter-form__field_text");
var enterFormFieldLogin = document.querySelector(".enter-form__field_login");
var enterFormFieldPassword = document.querySelector(".enter-form__field_password");
var enterFormSignatureLogin = document.querySelectorAll(".enter-form__signature_login");
var enterFormFieldPassword = document.querySelector(".enter-form__field_password");
var enterFormSignaturePassword = document.querySelectorAll(".enter-form__signature_password");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

document.addEventListener("DOMContentLoaded", function() {
  if (storage) {
    enterFormFieldLogin.value = storage;
    enterFormFieldPassword.focus();
  } else {
    enterFormFieldLogin.focus();
  }
  for (var i = enterFormFieldText.length - 1; i >= 0; i--) {
    if (enterFormFieldText[i].value) {
      enterFormFieldText[i].nextElementSibling.firstElementChild.classList.add("enter-form__signature_focused");
    } else {
      enterFormFieldText[i].nextElementSibling.firstElementChild.classList.remove("enter-form__signature_focused");
    }
  }
});

enterForm.addEventListener("submit", function(e) {
  if (!enterFormFieldLogin.value) {
    e.preventDefault();
    enterFormFieldLogin.classList.remove("enter-form__field_valid");
    enterFormFieldLogin.classList.add("enter-form__field_invalid");
  }
  if (!enterFormFieldPassword.value) {
    e.preventDefault();
    enterFormFieldPassword.classList.remove("enter-form__field_valid");
    enterFormFieldPassword.classList.add("enter-form__field_invalid");
  }
  if (isStorageSupport) {
    localStorage.setItem("login", enterFormFieldLogin.value);
  }
});

enterForm.addEventListener("blur", function() {
  for (var i = enterFormFieldText.length - 1; i >= 0; i--) {
    if (enterFormFieldText[i].value) {
      enterFormFieldText[i].classList.remove("enter-form__field_invalid");
      enterFormFieldText[i].classList.add("enter-form__field_valid");
      enterFormFieldText[i].nextElementSibling.firstElementChild.classList.add("enter-form__signature_focused");
    } else {
      enterFormFieldText[i].nextElementSibling.firstElementChild.classList.remove("enter-form__signature_focused");
    }
  }
}, true);
