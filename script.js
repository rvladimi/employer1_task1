"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  // во время прокрутки текст в шапке сереет
  if (header) {
    header.classList.toggle("white");
    document.addEventListener("scroll", (event) => {
      header.classList.remove("white");
      header.classList.add("grey");
    });
    // при остановке прокрутки текст шапки снова становится белым
    document.addEventListener("scrollend", (event) => {
      header.classList.remove("grey");
      header.classList.add("white");
    });
  }
});
