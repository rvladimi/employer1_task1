"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("white");
    document.addEventListener("scroll", (event) => {
      header.classList.remove("white");
      header.classList.add("grey");
    });

    document.addEventListener("scrollend", (event) => {
      header.classList.remove("grey");
      header.classList.add("white");
    });
  }
});
