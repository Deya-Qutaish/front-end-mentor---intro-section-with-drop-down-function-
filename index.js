"use strict";

const dropClick = document.querySelectorAll(".drop-click");
const dropMenu = document.querySelectorAll("#dropped-menu");
// MOBILE POP SLIDER VARIABLES
const slider = document.querySelector(".slider");
const popDiv = document.querySelector(".pop");
const overlay = document.querySelector(".overlay");
const closeDiv = document.querySelector(".x");
const body = document.querySelector("body");
const popClick = document.querySelectorAll(".pop-drop");
const popDrop = document.querySelectorAll("#pop-dropped-menu");

dropClick.forEach((drop) => {
  const closest = drop.closest("div");

  drop.addEventListener("click", () => {
    closest.querySelector("#arrow-down").classList.toggle("hidden");
    closest.querySelector("#arrow-up").classList.toggle("hidden");
    closest.querySelector("#dropped-menu").classList.toggle("hidden");
  });
});

function flow() {
  if (!popDiv.classList.contains("hidden")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

// POP DIV FUNCTIONALITY
function togglePop() {
  popDiv.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

slider.addEventListener("click", () => {
  togglePop();
  flow();
});

closeDiv.addEventListener("click", () => {
  togglePop();
  flow();
});
overlay.addEventListener("click", () => {
  togglePop();
  flow();
});

popClick.forEach((drop) => {
  const closest = drop.closest("div");

  drop.addEventListener("click", () => {
    closest.querySelector("#pop-dropped-menu").classList.toggle("hidden");
    closest.querySelector(".pop-up").classList.toggle("hidden");
    closest.querySelector(".pop-down").classList.toggle("hidden");
  });
});
