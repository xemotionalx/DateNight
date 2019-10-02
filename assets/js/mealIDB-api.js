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

