// Initial Values
// TBA

var user = "homebody";
var restaurantQuery1;
var restaurantQuery2;

if (user === "athletic") {
var restaurantQuery1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Salad";
var restaurantQuery2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Lentils";
} else if (user === "foodie") {
  var restaurantQuery1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=French";
  var restaurantQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese";
} else if (user === "party") {
  var restaurantQuery1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
  var restaurantQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=American";
} else if (user === "quirky") {
  var restaurantQuery1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
  var restaurantQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan";
} else if (user === "homebody") {
  var restaurantQuery1 = "https://developers.zomato.com/api/v2.1/search?entity_id=delivery&entity_type=cityphiladelphia&count=3";
  var restaurantQuery2 = "https://developers.zomato.com/api/v2.1/search?entity_id=takeout&entity_type=cityphiladelphia&count=3";
}

//ba1e1bdc5ea795af460a2abe393173a4

$.ajax({
  url: restaurantQuery1,
  method: "GET",
  "headers": {
    "user-key": "d710754ce67200fb6fb9b5e26139f50e",
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then(function (response) {


  console.log("url: " + response.restaurants[0].restaurant.url);
  console.log("photo: " + response.restaurants[0].restaurant.photos_url);
  console.log("cuisine: " + response.restaurants[0].restaurant.cuisines)
  console.log("average cost: $" + response.restaurants[0].restaurant.average_cost_for_two)
  console.log(response.restaurants[0]);

    console.log(response.restaurants[0]);


  //Empty the cards in html

  $("#restaurants-div-1").empty();

  for (var i = 0; i < 3; i++) {
    // new  horizontal card
    var newCard = $("<div>");
    newCard.addClass("card horizontal");

    //  new card image
    var cardImgDiv = $("<div>");
    cardImgDiv.addClass("card-image");
    var cardImg = $("<img>");
    cardImg.attr("src", response.restaurants[i].restaurant.photos_url);
    cardImg.addClass("activator");

    //card content
    var cardStacked = $("<div>");
    cardStacked.addClass("card-stacked");
    //recipe title
    var cardContent = $("<div>");
    cardContent.addClass("card-content");
    var cardTitle = $("<p>");
    cardTitle.text(response.restaurants[i].restaurant.name);
    cardContent.append(cardTitle);
    cardStacked.append(cardContent);
    //link
    var cardLinkDiv = $("<div>");
    cardLinkDiv.addClass("card-action");
    cardLinkDiv.html("<a href= '" + response.restaurants[i].restaurant.url + "' target='_blank'>" + "Learn More" + "</a>")

    // Puts everything on Page!
    $("#restaurants-div-1").append(newCard);
    newCard.append(cardImgDiv);
    cardImgDiv.append(cardImg);
    newCard.append(cardStacked);
    cardStacked.append(cardLinkDiv);
  };

//   $.ajax({
//     url: recipeQuery2,
//     method: "GET"
//   }).then(function (response) {

//     // Empty the cards in html

//     $("#recipes-div-2").empty();

//     for (var i = 0; i < 3; i++) {

//       console.log(response);

//       // new  horizontal card
//       var newCard = $("<div>");
//       newCard.addClass("card horizontal");

//       //  new card image
//       var cardImgDiv = $("<div>");
//       cardImgDiv.addClass("card-image");
//       var cardImg = $("<img>");
//       cardImg.attr("src", response.meals[i].strMealThumb);
//       cardImg.addClass("activator");

//       //card content
//       var cardStacked = $("<div>");
//       cardStacked.addClass("card-stacked");
//       //recipe title
//       var cardContent = $("<div>");
//       cardContent.addClass("card-content");
//       var cardTitle = $("<p>");
//       cardTitle.text(response.meals[i].strMeal);
//       cardContent.append(cardTitle);
//       cardStacked.append(cardContent);
//       //link
//       var cardLinkDiv = $("<div>");
//       cardLinkDiv.addClass("card-action");
//       cardLinkDiv.html("<a href= '" + response.meals[i].strSource + "' target='_blank'>" + "View Recipe" + "</a>")

//       // Puts everything on Page!
//       $("#recipes-div-2").append(newCard);
//       newCard.append(cardImgDiv);
//       cardImgDiv.append(cardImg);
//       newCard.append(cardStacked);
//       cardStacked.append(cardLinkDiv);

//     };

//   });

 });