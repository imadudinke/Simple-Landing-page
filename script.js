"use strict";

// VARIABLES
const openingBtns = document.querySelectorAll(".btn--open");
const sections = document.querySelectorAll("section");
const modal = document.querySelector(".open--modale");
const overflow = document.querySelector(".overflow");
const x = document.querySelector(".close-modal");
const operationList = document.querySelector(".operation--btns--ist");
const btnOP = document.querySelectorAll(".op-btn");
const nav = document.querySelector("nav");
const display = document.querySelectorAll(".displayed");
const header = document.querySelector("header");
const section1 = document.querySelector("#section--one");
const slide = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left--arrow");
const rightBtn = document.querySelector(".right--arrow");
const slides = document.querySelectorAll(".slide");
const slideLength = slides.length;
// Open Modale

const closeModal = function () {
  modal.classList.add("hidden");
  overflow.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");

  overflow.classList.remove("hidden");
};

openingBtns.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    openModal();
  });
});
overflow.addEventListener("click", function () {
  closeModal();
});
x.addEventListener("click", function () {
  closeModal();
});

//
operationList.addEventListener("click", function (el) {
  if (el.target.classList.contains("op-btn")) {
    btnOP.forEach((el) => el.classList.remove("btn-active"));
    el.target.classList.add("btn-active");
    const data = el.target.dataset.src;

    display.forEach((el) => {
      el.classList.remove("active");
      if (el.dataset.src === data) {
        el.classList.add("active");
      }
    });
  }
});

// Stiky Nav
const navHeight = nav.getBoundingClientRect().height;
const stikyNav = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.add("nav--sticky");
  }
};
const observer = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      nav.classList.add("nav--sticky");
    } else {
      nav.classList.remove("nav--sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: -`${navHeight}` + "px",
  }
);
observer.observe(header);
// console.log(nav.);
// links

nav.addEventListener("click", function (el) {
  if (el.target.classList.contains("links")) {
    el.preventDefault();
    const move = el.target.getAttribute("href");
    document.querySelector(`.${move}`).scrollIntoView();
  }
});

sections.forEach((el) => {
  el.classList.add("section--anima");
  const sectionAnin = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      el.classList.remove("section--anima");
    }
  };
  const sectionsObserver = new IntersectionObserver(sectionAnin, {
    root: null,
    threshold: 0.2,
  });
  sectionsObserver.observe(el);
});
