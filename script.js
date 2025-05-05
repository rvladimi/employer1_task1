"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerWidth = header.offsetWidth;
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

  // при уменьшении ширины окна до определенного предела
  // верхняя и средняя правая картинки переносятся вниз
  const upper = document.querySelector(".upper");
  const upperLeft = document.querySelector(".upper-left");
  const upperPicture = document.querySelector(".upper-picture");
  const middle = document.querySelector(".middle");
  window.addEventListener("resize", () => {
    //console.log(document.documentElement.clientWidth - headerWidth);
    if (upper) {
      if (document.documentElement.clientWidth < headerWidth + 700) {
        upper.style.flexDirection = "column";
        upperLeft.style.width = "100%";
        header.style.width = "100%";
        upperPicture.style.marginLeft = "auto";
        upperPicture.style.marginRight = "auto";
        upperPicture.style.marginTop = "20px";
        middle.style.flexWrap = "wrap";
        middle.style.gap = "20px";
      } else {
        upper.style.flexDirection = "row";
        upperLeft.style.width = "63%";
        header.style.width = "50%";
        upperPicture.style.marginLeft = "0px";
        upperPicture.style.marginRight = "0px";
        upperPicture.style.marginTop = "0px";
        middle.style.flexWrap = "nowrap";
        middle.style.gap = "0px";
      }
    }
  });
});
