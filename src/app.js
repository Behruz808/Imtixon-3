"use strict";

let menu = document.querySelector(".menu"),
  icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  console.log(menu.getAttribute("id"));

  if (menu.getAttribute("id").length == 0) {
    menu.setAttribute("id", "show");
  } else {
    menu.setAttribute("id", "");
  }
});

let list = document.querySelector(".carousel__list"),
  img = document.querySelector(".carousel__list--img"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next");

let index = 0;

function slider() {
  list.style.transform = `translateX(${-index * 1230}px)`;
}

next.addEventListener("click", () => {
  index++;
  slider();
});

prev.addEventListener("click", () => {
  index--;
  slider();
});

let miniSlider = document.querySelector(".mini__carousel--list"),
  listImg = document.querySelector(".list__img"),
  secondPrev = document.querySelector("#second__prev"),
  secondNext = document.querySelector("#second__next");

function carousel() {
  miniSlider.style.transform = `translateX(${-index * 1230}px)`;
}

secondPrev.addEventListener("click", () => {
  index--;
  carousel();
});

secondNext.addEventListener("click", () => {
  index++;
  carousel();
});
