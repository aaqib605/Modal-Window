"use strict";

const modalEl = document.querySelector(".modal");
const buttonElements = document.querySelectorAll(".show-modal");
const closeModalEl = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

const displayModal = function () {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

const hideModal = function () {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

buttonElements.forEach((button) => {
  button.addEventListener("click", function () {
    displayModal();
  });
});

closeModalEl.addEventListener("click", function () {
  hideModal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});

overlayEl.addEventListener("click", function () {
  hideModal();
});
