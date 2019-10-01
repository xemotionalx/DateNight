var user = localStorage.getItem("coupleType");
var recipeQuery1;
var recipeQuery2;

if (user === "athletic") {
    var recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Salad";
    var recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Lentils";
} else if (user === "foodie") {
    var recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=French";
    var recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese";
} else if (user === "party") {
    var recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
    var recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=American";
} else if (user === "quirky") {
    var recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
    var recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan";
} else if (user === "homebody") {
    var recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
    var recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
} else if (user === null) {
    var recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=French";
    var recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Lentils";
}


$.ajax({
    url: recipeQuery1,
    method: "GET"
}).then(function(response) {

    // Empty the cards in html

    $("#recipes-div-1").empty();

    for (var i = 0; i < 3; i++) {

        console.log(response);

        // new  horizontal card
        var newCard = $("<div>");
        newCard.addClass("card horizontal");

        //  new card image
        var cardImgDiv = $("<div>");
        cardImgDiv.addClass("card-image");
        var cardImg = $("<img>");
        cardImg.attr("src", response.meals[i].strMealThumb);
        cardImg.addClass("activator");

        //card content
        var cardStacked = $("<div>");
        cardStacked.addClass("card-stacked");
        //recipe title
        var cardContent = $("<div>");
        cardContent.addClass("card-content");
        var cardTitle = $("<p>");
        cardTitle.text(response.meals[i].strMeal);
        cardContent.append(cardTitle);
        cardStacked.append(cardContent);
        //link
        var cardLinkDiv = $("<div>");
        cardLinkDiv.addClass("card-action");
        cardLinkDiv.html("<a href= 'https://www.themealdb.com/browse.php?s=" + response.meals[i].idMeal + "' target='_blank'>" + "View Recipe" + "</a>")

        // Puts everything on Page!
        $("#recipes-div-1").append(newCard);
        newCard.append(cardImgDiv);
        cardImgDiv.append(cardImg);
        newCard.append(cardStacked);
        cardStacked.append(cardLinkDiv);
    };

    $.ajax({
        url: recipeQuery2,
        method: "GET"
    }).then(function(response) {

        // Empty the cards in html

        $("#recipes-div-2").empty();

        for (var i = 0; i < 3; i++) {

            // new  horizontal card
            var newCard = $("<div>");
            newCard.addClass("card horizontal");

            //  new card image
            var cardImgDiv = $("<div>");
            cardImgDiv.addClass("card-image");
            var cardImg = $("<img>");
            cardImg.attr("src", response.meals[i].strMealThumb);
            cardImg.addClass("activator");

            //card content
            var cardStacked = $("<div>");
            cardStacked.addClass("card-stacked");
            //recipe title
            var cardContent = $("<div>");
            cardContent.addClass("card-content");
            var cardTitle = $("<p>");
            cardTitle.text(response.meals[i].strMeal);
            cardContent.append(cardTitle);
            cardStacked.append(cardContent);
            //link
            var cardLinkDiv = $("<div>");
            cardLinkDiv.addClass("card-action");
            cardLinkDiv.html("<a href= 'https://www.themealdb.com/browse.php?s=" + response.meals[i].idMeal + "' target='_blank'>" + "View Recipe" + "</a>")

            // Puts everything on Page!
            $("#recipes-div-2").append(newCard);
            newCard.append(cardImgDiv);
            cardImgDiv.append(cardImg);
            newCard.append(cardStacked);
            cardStacked.append(cardLinkDiv);

        };

    });

});

// FireBase Config
// var firebaseConfig = {
//   apiKey: "AIzaSyDi7sAhzFxcoGeoae7z8VI1jbT-UB_kAJA",
//   authDomain: "project-1-3f974.firebaseapp.com",
//   databaseURL: "https://project-1-3f974.firebaseio.com",
//   projectId: "project-1-3f974",
//   storageBucket: "project-1-3f974.appspot.com",
//   messagingSenderId: "1058372464183",
//   appId: "1:1058372464183:web:c9c2c7d3da3e564fc019b2",
//   measurementId: "G-H56C11S1CB"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();


//      // Create a variable to reference
//      var database = firebase.database();
// // Add click event/event listener 
// $("#add").on("click", function (event) {

//   // Refresh
//   event.preventDefault();
//   // Grab values fromm text-boxes
//   train = $("").val().trim();
//   destination = $("#").val().trim();
//   frequency = $("#").val().trim();
//   nextArrive = $("#").val().trim();

//   // Test/Debug
//   // console.log(train);
//   // console.log(destination);
//   // console.log(frequency);
//   // console.log(nextArrive);

//   console.log(' jQuery value: ', $('#').val().trim());
//   console.log(' jQuery value: ', $('#').val().trim());
//   console.log(' jQuery value: ', $('#').val().trim());





//   // Code for "Setting values in the database"
//   database.ref().set({
//     train: train,
//     destination: destination,
//     frequency: frequency,
//     nextArrive: nextArrive
//   });
// // Add empty Event!!!




// });

// // Firebase watcher + initial loader HINT: .on("value")
// database.ref().on("value", function (snapshot) {

//   // Log everything that's coming out of snapshot
//   console.log(snapshot.val());
//   console.log(snapshot.val().train);
//   console.log(snapshot.val().destination);
//   console.log(snapshot.val().frequency);
//   console.log(snapshot.val().nextArrive);

//   // Change the HTML to reflect

//   // Handle the errors
// }, function (errorObject) {
//   console.log("Errors handled: " + errorObject.code);
// });