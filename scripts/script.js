// JavaScript Document
// Variables
var menuButton = document.querySelector("header > nav:first-of-type > button");
var crossButton = document.querySelector("header > nav:last-of-type > button");

var coachButtons = document.querySelectorAll(".buttons");
var coachUl = document.querySelector("main ul");

// Functions
function toggleMenu(event) {
  deNav = document.querySelector("header > nav:last-of-type");
  deBody = document.querySelector("body");
  deNav.classList.toggle("toonMenu");
  // deBody.classList.toggle("bodyHidden");
  console.log("test");
}

coachButtons.forEach(function(toggleHoverFunction){
  toggleHoverFunction.addEventListener("mouseover", function(e){
      coachUl.classList.add("coach-hover");
  });
  toggleHoverFunction.addEventListener("mouseout", function(e){
    coachUl.classList.remove("coach-hover");
  });
});

var topNav = document.querySelector("header nav:first-of-type");
var rtlLogo = document.querySelector("main section section");
var tvohLogoSmall = document.querySelector("header > nav:first-of-type a img");
var tvohLogoBig = document.querySelector("header > nav:first-of-type a img");

// Bron: https://www.youtube.com/watch?v=V9CY0F4Wc7M
window.addEventListener("scroll", () => {
  var scrollable = document.documentElement.scrollHeight - window.innerHeight;
  var scrolled = window.scrollY;

  console.log(scrolled);
  if (scrolled > 50) {
    console.log("testje");
    topNav.classList.add("nav-gradient");
    rtlLogo.classList.add("nav-gradient");
    tvohLogoSmall.classList.add("nav-gradient");
    tvohLogoBig.classList.add("nav-gradient");
  } else {
    topNav.classList.remove("nav-gradient");
    rtlLogo.classList.remove("nav-gradient");
    tvohLogoSmall.classList.remove("nav-gradient");
    tvohLogoBig.classList.remove("nav-gradient");
  }
});

// EventListeners
menuButton.addEventListener("click", toggleMenu);
crossButton.addEventListener("click", toggleMenu);