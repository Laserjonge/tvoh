// JavaScript Document
var menuButton = document.querySelector("header > nav:first-of-type > button");
var crossButton = document.querySelector("header > nav:last-of-type > button");

menuButton.addEventListener("click", toggleMenu);
crossButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = document.querySelector("header > nav:last-of-type");
  deBody = document.querySelector("body");
  deNav.classList.toggle("toonMenu");
  deBody.classList.toggle("bodyHidden");
  console.log("test");
}