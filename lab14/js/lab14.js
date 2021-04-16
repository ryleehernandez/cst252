/*
  * Author: Rylee Hernandez <rylhernandez@csumb.edu>
  * Created: 23 March 2021
  * License: Public Domain
*/



  function Vehicle(make, model, year, color, extras) {
    this.color = color;
    this.year = year;
    this.make = make;
    this.model = model;
    this.extras = extras;


    this.info = function() {
      return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras;
    }
  }


  var vehicles = [];

  vehicles.push(new Vehicle("white", 2016, "Volkswagen", "Jetta", "tinted windows"));
  vehicles.push(new Vehicle("white", 2021, "Tesla", "Model S", "red leather seats"));


  outputEl = document.getElementById("output");
  for (var i=0; i<vehicles.length; i++) {
    var newEl = document.createElement("p");
    newEl.innerText = vehicles[i].info();
    outputEl.appendChild(newEl);
  }
