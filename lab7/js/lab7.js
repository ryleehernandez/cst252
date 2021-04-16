/*
  * Author: Rylee Hernandez <rylhernandez@csumb.edu>
  * Created: 14 February 2021
  * License: Public Domain
*/



function sortUserName() {

  var userName = window.prompt("Hi, Please tell me your name so I can fix it!");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

// Output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "<br>");
