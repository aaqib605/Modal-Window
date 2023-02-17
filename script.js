"use strict";

const modalEl = document.querySelector(".modal");
const buttonElements = document.querySelectorAll(".show-modal");
const closeModalEl = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

buttonElements.forEach((button) => {
  button.addEventListener("click", function () {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
  });
});

closeModalEl.addEventListener("click", function () {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalEl.classList.add("hidden");
    overlayEl.classList.add("hidden");
  }
});
