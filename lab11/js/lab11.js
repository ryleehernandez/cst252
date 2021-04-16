/*
  * Author: Rylee Hernandez <rylhernandez@csumb.edu>
  * Created: 3 March 2021
  * License: Public Domain
*/


function sortingHatLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click",function() {
  var name = document.getElementById("input").value;
  var houseObj = sortingHat(name);
  newText = "<h3>The Sorting Hat has sorted you into " + "house" + "</p>";
  document.getElementById("output").innerHTML = newText;
})
