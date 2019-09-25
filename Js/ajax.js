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
  

  

  response.data
});