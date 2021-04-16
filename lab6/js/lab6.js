/*
  * Author: Rylee Hernandez <rylhernandez@csumb.edu>
  * Created: 14 February 2021
  * License: Public Domain
*/



      // Define Variables
      myTransport = ["Volkwagen Jetta", "rides from parents", "rides from uber" ];

      myMainRide = {
          make: "Volkswagen",
          model : "Jetta",
          color : "White",
          year : 2021,
          age : function() {
              return 2016 - this.year;
          }
      }

      // output
      document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
      document.writeln("My Main Ride: <pre>",
          JSON.stringify(myMainRide, null, '\t'), "</pre>");
      document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
