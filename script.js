
var beers = []; //will store the new beers created!

var arraySort = "normal"; //true flag
  
var sortedBeer =[]; //will store the sortes beers

function sortBeers(){
  if (arraySort === "normal") { //true
          arraySort = "reverse"; //change flag to false
          
          sortedBeer = beers.sort(function(a, b){ //function for sorting object.properties
          return a.rate - b.rate; 
          });

    } else {

          arraySort = "normal"; //change flag to true 

          sortedBeer = beers.sort(function(a, b){
          return b.rate - a.rate; //reverse
          }); //end function

    } //end else
};//end major func


$("#post").on("click", function(){
	   var name =  $(".beer-input").val(); //getting value and assiging it to var
     var category = $(".category-input").val(); 
     var rate = $("#rateBeer").val();
     addBeer(name, category, rate); //invoking func
     updateBeers();
});

$("#rated").on("click", function(){
     $(".beers-list").empty();
     sortBeers();

     // if ($("#rated").clicked === true) {
//http://stackoverflow.com/questions/36584844/setting-a-boolean-flag-with-jquery-click
       for (var i = 0; i < sortedBeer.length; i++) {
          $(".beers-list").append("<li>" + "<b>" + sortedBeer[i].name + "</b>" + " / "  + sortedBeer[i].category + " / "  +  sortedBeer[i].rate + "</li>");
        };

     // }else {
     //  sortedBeer.reverse();}   
});

// //$('#submit1, #submit2').click(function () {
//     if (this.id == 'submit1') {
//         alert('Submit 1 clicked');
//     }
//     else if (this.id == 'submit1') {
//         alert('Submit 2 clicked');
//     }
// });

//global function that creates new object and push it onto global array
var addBeer = function (name, category, rate) {

        beers.push({"name": name, "category": category, "rate":rate});
        //console.log(beers);
};


/*
Create another function called updateBeers
 takes no arguments.
  Inside this function, empty the '.beers-list' ul first, 
  then loop through the beers array
   and append the beers to the '.beers-list' ul. 
*/

var updateBeers = function () {
      $(".beers-list").empty(); //not sure it's emptying

      for (var i = 0; i < beers.length; i++) {
      	$(".beers-list").append("<li>" + "<b>" + beers[i].name + "</b>" + " / "  + beers[i].category + " / "  +  beers[i].rate + "</li>");
      };
}


	
// Add another button to your page that will sort the beers
 //on the page by rating when clicked. 
 //If it gets clicked again, reverse the order (if they were sorted in ascending order,
 // sort in descending and vice-versa).

