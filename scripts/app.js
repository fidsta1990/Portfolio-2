// Modal

// SELECTORS
const html = document.querySelector(".modal-btn");
const css = document.querySelector(".modal-css");
const javascript = document.querySelector(".modal-javascript");
const overlay = document.querySelector(".modal-overlay");
const overlayJs = document.querySelector(".modal-overlay-js");
const closeBtn = document.querySelector(".close-btn");
const closeJs = document.querySelector(".close-js");
// EVENT LISTENERS
html.addEventListener("click", () => {
  overlay.classList.add("open-modal");
});
css.addEventListener("click", () => {
  overlay.classList.add("open-modal");
});
javascript.addEventListener("click", () => {
  overlayJs.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open-modal");
});
closeJs.addEventListener("click", () => {
  overlayJs.classList.remove("open-modal");
});
// FUNCTIONS
