// switch blog entry tabs
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("topic");
  if (document.getElementById(tabName).style.display === "block") {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    //change this to "none" instead of "block" to enable toggle
    document.getElementById(tabName).style.display = "block";
  } else {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
}

// set the active tag for nav button backgrounds
var header = document.getElementById("nav-menu");
var btns = header.getElementsByClassName("blog-list--button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // listen for a click on any of the buttons in the array
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    // current active class has its className replaced with nothing
    this.className += " active";
    // add the active tag to the clicked className
  });
}

// toggle navigation bar for mobile view
function toggleNav() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// function to constantly check the screen size. If it goes under 800, the nav bar is hidden. If it goes over, the nav bar returns. This prevents the user from closing the navbar and turning a mobile device onto its side - accidentally hiding the navbar
function myFunction(screen) {
  if (screen.matches) {
    // If media query matches
    document.getElementById("nav-menu").style.display = "flex";
  } else {
    document.getElementById("nav-menu").style.display = "none";
  }
}
var screen = window.matchMedia("(min-width: 800px)");
myFunction(screen); // Call listener function at run time
screen.addListener(myFunction); // Attach listener function on state changes
