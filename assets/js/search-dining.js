$(document).ready(function() {


    // WHEN "SEARCH" BUTTON IS CLICKED
    $("#restaurant-search-btn").on("click", function() {

        event.preventDefault();

        var restaurantLocation = "";
        var restaurantType = "";
        var restaurantQuery = "";
        var location = "";
        restaurantLocation = $("#location-restaurant-input").val();
        restaurantType = $("#restaurant-type-input").val();

        // Get city id based on selection
        if (restaurantLocation === "philadelphia" || restaurantLocation === null) {
            location = "287";
        }
        if (restaurantLocation === "newyork") {
            location = "280";
        }
        if (restaurantLocation === "losangeles") {
            location = "281";
        }

        //get restaurant search parameters based on couple type
        if (restaurantType === "athletic") {
            restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=" + location + "&entity_type=city&q=healthy&count=6";
        } else if (restaurantType === "foodie") {
            restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=" + location + "&entity_type=city&q=highend&count=6";
        } else if (restaurantType === "party") {
            restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=" + location + "&entity_type=city&q=nightlife&count=6";
        } else if (restaurantType === "quirky") {
            restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=" + location + "&entity_type=city&q=vegan&count=6";
        } else if (restaurantType === "homebody") {
            restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=" + location + "&entity_type=city&q=delivery&count=6";
        }

        //generate cards with query results
        $.ajax({
            url: restaurantQuery,
            method: "GET",
            "headers": {
                "user-key": "d710754ce67200fb6fb9b5e26139f50e",
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response) {

            console.log(response);

            //Empty the cards in html
            $("#restaurants-div").empty();

            for (var i = 0; i < 6; i++) {
                // create new card
                var cardWidth = $("<div>");
                cardWidth.addClass("col s12 m4");
                var card = $("<div>");
                card.addClass("card small");
                var cardImgDiv = $("<div>");
                cardImgDiv.addClass("card-image waves-effect waves-block waves-light");
                //create card image
                var cardImg = $("<img>");
                cardImg.addClass("activator");
                if (response.restaurants[i].restaurant.photo_count === 0) {
                    cardImg.attr("src", "assets/images/dining/restaurant-icon.png");
                } else {
                    cardImg.attr("src", response.restaurants[i].restaurant.photos[0].photo.url);
                };
                //card title
                var cardContent = $("<div>");
                cardContent.addClass("card-content");
                var cardTitle = $("<span>");
                cardTitle.addClass("card-title activator grey-text text-darken-4 truncate");
                cardTitle.text(response.restaurants[i].restaurant.name);
                var cardIcon = $("<i>");
                cardIcon.addClass("material-icons right");
                cardIcon.text("more_vert");
                //card link
                var cardLink = $("<p>");
                cardLink.html("<a href= '" + response.restaurants[i].restaurant.url + "' target='_blank'>" + "More Info" + "</a>");

                // append all front of card to div
                $("#restaurants-div").append(cardWidth);
                cardWidth.append(card);
                card.append(cardImgDiv);
                cardImgDiv.append(cardImg);
                card.append(cardContent);
                cardContent.append(cardTitle);
                cardTitle.append(cardIcon);
                cardContent.append(cardLink);

                //back of card
                var cardReveal = $("<div>");
                cardReveal.addClass("card-reveal");

                //back of card title
                var cardRevealTitle = $("<span>");
                cardRevealTitle.addClass("card-title grey-text text-darken-4");
                cardRevealTitle.text("Restaurant Info");

                //exit card reveal icon
                var closeIcon = $("<i>");
                closeIcon.addClass("material-icons right");
                closeIcon.text("close");

                //info on card reveal
                var cardRevealContent = $("<div>");
                cardRevealContent.addClass("card-content");
                var cardBudget = $("<h6>");
                cardBudget.text("Average Cost: $" + response.restaurants[0].restaurant.average_cost_for_two + " for two");
                var cardCuisine = $("<h6>");
                cardCuisine.text("Cuisine: " + response.restaurants[0].restaurant.cuisines);

                card.append(cardReveal);
                cardReveal.append(cardRevealTitle);
                cardRevealTitle.append(closeIcon);
                cardReveal.append(cardRevealContent);
                cardRevealContent.append(cardBudget);
                cardRevealContent.append(cardCuisine);
            };
        });
    });


    $("#recipe-search-btn").on("click", function() {

        event.preventDefault();

        var user = $("#couple-recipe-input").val();
        var recipeQuery1 = "";
        var recipeQuery2 = "";


        if (user === "athletic") {
            recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Salad";
            recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Lentils";
        } else if (user === "foodie" || user === null) {
            recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=French";
            recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese";
        } else if (user === "party") {
            recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
            recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=American";
        } else if (user === "quirky") {
            recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
            recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan";
        } else if (user === "homebody") {
            recipeQuery1 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
            recipeQuery2 = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
        }

        $.ajax({
            url: recipeQuery1,
            method: "GET"
        }).then(function(response) {

            // Empty the cards in html

            $("#recipes-div-1").empty();

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
                cardLinkDiv.html("<a href= '" + response.meals[i].strSource + "' target='_blank'>" + "View Recipe" + "</a>")

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
                    cardLinkDiv.html("<a href= '" + response.meals[i].strSource + "' target='_blank'>" + "View Recipe" + "</a>")

                    // Puts everything on Page!
                    $("#recipes-div-2").append(newCard);
                    newCard.append(cardImgDiv);
                    cardImgDiv.append(cardImg);
                    newCard.append(cardStacked);
                    cardStacked.append(cardLinkDiv);

                };

            });

        });

    });

});