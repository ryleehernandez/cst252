/*
  * Author: Rylee Hernandez <rylhernandez@csumb.edu>
  * Created: 14 February 2021
  * License: Public Domain
*/

function numbas (x){
    return (x % 2 == 0);
}


// test function
console.log("Is 1 even? ", numbas(1));
console.log("Is 2 even? ", numbas(2));

array = [71, 81, 67, 98, 99, 201, 2, 33, 2981]
console.log("My array", array);

var result = array.map (numbas);
// should return [false, false, false, true, false, false, true, false, false]

var result = array.map(function(x){
    return x ** 0.5;
})
// should return [8.426149773176359, 9, 8.18535277187245, 9.899494936611665, 9.9498743710662, 14.177446878757825, 1.4142135623730951, 5.744562646538029, 54.59853477887479]
console.log("Squareroot of array:", result);
