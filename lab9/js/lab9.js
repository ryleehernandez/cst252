/*
  * Author: Rylee Hernandez <rylhernandez@csumb.edu>
  * Created: 3 March 2021
  * License: Public Domain
*/


   // Use getElementById() to find your output <div> and assign it to a variable outputEl (step 1)
   var outputEl = document.getElementById("lab");
   console.log("outputEl: ", outputEl);

   // Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
   var new1El = document.createElement("h3");

   // Change the html attribute of new1El to say "something new.""
   new1El.innerHTML = "I am new";
   new1El.id = "new-one";

   // Create a new element with document.createElement("p") and assign it to a variable new1El
   var new2El = document.createElement("p");
   new1El.id = "new-two";

   // Change the html attribute of new1El to say "something else.""
   new2El.innerHTML = "I am also new";

   // Append both new elements one at a time using appendChild() (step 3)
   outputEl.appendChild(new1El);
   outputEl.appendChild(new2El);

   // Change the css attributes of at least two elements of your page
   newEl.style.fontsize = ("50px")
   new2El.style.color = ("#006b09")
