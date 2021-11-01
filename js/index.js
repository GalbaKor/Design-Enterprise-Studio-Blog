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

function toggleNav(navName) {
  if (document.getElementById(navName).style.display === "none") {
    document.getElementById(navName).style.display = "flex";
  } else {
    document.getElementById(navName).style.display = "none";
  }
}
