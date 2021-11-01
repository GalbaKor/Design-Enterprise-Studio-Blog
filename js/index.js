function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("topic");
  if (document.getElementById(tabName).style.display === "block") {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "none";
  } else {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
}

function toggleNav() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
