// METHOD TO PROTECT "=>" FROM WARNING (THANKS TO STUDENT ASSISTANT MARTIJN)
/*jshint esversion: 6 */

// GENERAL VARIABLES
var menuButton = document.querySelector("header > nav:first-of-type > button");
var crossButton = document.querySelector("header > nav:last-of-type > button");

var coachButtons = document.querySelectorAll(".buttons");
var coachUl = document.querySelector("main ul");

var topNav = document.querySelector("header nav:first-of-type");
var rtlLogo = document.querySelector("main section section");
var tvohLogoSmall = document.querySelector("header a img");
var tvohLogoBig = document.querySelector("header a img");
var headerDiv = document.querySelector("header > div");

// FUNCTION HAMBURGER-MENU
function toggleMenu() {
  var theNav = document.querySelector("header > nav:last-of-type");
  var theBody = document.querySelector("body");
  theNav.classList.toggle("toonMenu");
  theBody.classList.toggle("bodyHidden");
  console.log("test");
}

// FUNCTION COACH HOVER
coachButtons.forEach(function(toggleHoverFunction){
  toggleHoverFunction.addEventListener("mouseover", function(){
      coachUl.classList.add("coach-hover");
  });
  toggleHoverFunction.addEventListener("mouseout", function(){
    coachUl.classList.remove("coach-hover");
  });
});

// FUNCTION NAV GRADIENT (IT MAKES THE MAIN LOGO SMALLER, THE HEADER GRADIENT STRONGER AND THE RTL4 LOGO (THE CALL TO ACTION) DISAPPEARS)
// Bron: https://www.youtube.com/watch?v=V9CY0F4Wc7M
window.addEventListener("scroll", () => {
  var scrolled = window.scrollY;
  console.log(scrolled);
  if (scrolled > 90) {
    console.log("testje");
    topNav.classList.add("nav-gradient");
    rtlLogo.classList.add("nav-gradient");
    tvohLogoSmall.classList.add("nav-gradient");
    tvohLogoBig.classList.add("nav-gradient");
    headerDiv.classList.add("nav-gradient");
  } else {
    topNav.classList.remove("nav-gradient");
    rtlLogo.classList.remove("nav-gradient");
    tvohLogoSmall.classList.remove("nav-gradient");
    tvohLogoBig.classList.remove("nav-gradient");
    headerDiv.classList.remove("nav-gradient");
  }
});

// EVENTLISTENERS
menuButton.addEventListener("click", toggleMenu);
crossButton.addEventListener("click", toggleMenu);