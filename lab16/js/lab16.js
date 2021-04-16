/*
  * Author: Rylee Hernandez <rylhernandez@csumb.edu>
  * Created: 6 April 2021
  * License: Public Domain
*/

$("#output").append("<button id=my-button> Do Not Press Me!");

// Add a click event to it that will bring up an alert
$("#my-button").click(function(){
  alert("What Did I Just Say???")
})
// Restyle the button with jQuery so it is a pleasant green.
$("#my-button").css("backgroud-color","#C3DA8C")
