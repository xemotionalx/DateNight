// The mealdb Ajax calls
 console.log('test');
 console.log($);

//  


// Ajax Calls for api
var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Salmon";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
     console.log("Object Data:",response);
     console.log("Recipes Array:",response.meals);
   console.log("Recipe Selected:",response.meals[0]);
   console.log("Recipe:",response.meals[0].strMeal);
   console.log("Recipe Instructions:",response.meals[0].strInstructions);
   console.log("Recipe Link:",response.meals[0].strSource);
   console.log("Recipe Picture:",response.meals[0].strMealThumb);
   console.log("Cuisine:",response.meals[0].strArea);
   console.log("Type:",response.meals[0].strCategory);
  console.log("Type:",response.meals[0].strYoutube);
  
  // Empty

  $("#view").empty();

  for( var i=0 ; i < 3 ; i++){

    // html divs
   var newCard= $(".card horizontal");
   var card = $(".card-image");
  //  new divs
  var newDiv = $("<div>");

   
// picture value
  var food = response.meals[0].strMealThumb;

  console.log("food is food:",food);

  var newMeal= $("<img>");
// test
console.log(newMeal)
    newMeal.addClass(".picture");
    newMeal.attr("src",food);

      newMeal.html(food);
  // test
  console.log(newMeal);
    $(food).append(".picture");
    // test
    console.log(picture);
    
  };

});




      // Append the button to the to do item
      // toDoItem = toDoItem.prepend(toDoClose);

      // Add the button and to do item to the to-dos div
      // $("").append(newMeal);

      // Clear the textbox when done
      // $("#to-do").val("");
