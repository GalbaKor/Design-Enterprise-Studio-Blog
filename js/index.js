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

// function openTab(tabName) {
//   var i, x;
//   x = document.getElementsByClassName("topic");
//   if ((x.getElementById(tabName).style.display = "none")) {
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     document.getElementById(tabName).style.display = "block";
//   } else {
//     document.getElementById(tabName).style.display = "none";
//   }
// }
