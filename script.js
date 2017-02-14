
//jquery that onclick invokes addBeer function
// the function will set var for getting values we need and finally invoke the func.

$("button").on("click", function(){
	
	 var name =  $(".beer-input").val(); //getting value and assiging it to var
     var category = $(".category-input").val(); 
     var rate = $(".rateBeer").val();

     addBeer(name, category, rate); //invoking func
     updateBeers();
});

//global array
var beers = []; //will store the new beers created!
beers.sort(function(a, b){return a-b});

//global function that creates new object and push it onto global array
var addBeer = function (name, category, rate) {

        beers.push({"name": name, "category": category, "rate":rate});
        beers.sort(function(a, b){return a-b});
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
      	$(".beers-list").append("<li>" + beers[i].name + " / "  + beers[i].category + " / "  +  beers[i].rate + "</li>");
      };
}


	
// Add another button to your page that will sort the beers
 //on the page by rating when clicked. 
 //If it gets clicked again, reverse the order (if they were sorted in ascending order,
 // sort in descending and vice-versa).

