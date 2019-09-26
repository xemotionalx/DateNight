// Testing Js link & Jquery 
 console.log('test');
 console.log($);

//  


// Ajax Calls for api mealbd
var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Salmon";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Testing/Debug Ajax
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
  
  // Empty the card in html

  $("#view").empty();

  for( var i=0 ; i < 5 ; i++){

    // html divs
   var newCard= $("<div>");
     newCard.addClass("col m4 s12");
  //  new divs
  var newDiv = $("<div>");
      newDiv.addClass("card");

   
// card image div
var cardImgDiv = $("<div>");
cardImgDiv.addClass("card-image");

var cardImg = $("<img>");
    cardImg.addClass("activator");
    cardImg.attr("src",response.meals[i].strMealThumb);

    // Content div for recipe name
  var cardContent = $("<div>");
  cardContent.addClass("card-content");
  cardContent.text(response.meals[i].strMeal);

  // Tag for Recipe link
  var cardLink = $('<p>');
  cardLink.html("<a href="+ response.meals[i].strSource +"target=_blank>"+"Recipe")
    
// Puts everything on Page!
  $("#view").append(newCard);
  newCard.append(newDiv);
  newDiv.append(cardImgDiv);
  cardImgDiv.append(cardImg);
  newDiv.append(cardContent);
  cardContent.append(cardLink);


 
    
  };

});




     