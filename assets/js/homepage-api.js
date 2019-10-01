var user = localStorage.getItem("coupleType");
var restaurantQuery;

if (user === "athletic") {
    restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=287&entity_type=city&q=healthy&count=6";
    eventsQuery = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3008&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
} else if (user === "foodie") {
    restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=287&entity_type=city&q=highend&count=6";
    eventsQuery = "https://www.eventbriteapi.com/v3/events/search//?categories=110&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP"
} else if (user === "party") {
    restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=287&entity_type=city&q=nightlife&count=6";
    eventsQuery = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3006&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
} else if (user === "quirky") {
    restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=287&entity_type=city&q=vegan&count=6";
    eventsQuery = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3009&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP"
} else if (user === "homebody") {
    restaurantQuery = "https://developers.zomato.com/api/v2.1/search?entity_id=287&entity_type=city&q=delivery&count=6";
    eventsQuery = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3003&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
}

$.ajax({
    url: eventsQuery,
    method: "GET"
}).then(function(response) {

    console.log(response);

    //Empty the cards in html
    $("#events-div").empty();

    for (var i = 0; i < 4; i++) {
        // create new card
        var cardWidth = $("<div>");
        cardWidth.addClass("col s6 m3");
        var card = $("<div>");
        card.addClass("card small");
        var cardImgDiv = $("<div>");
        cardImgDiv.addClass("card-image");
        //create card image
        var cardImg = $("<img>");
        cardImg.attr("src", response.events[i].logo.original.url);

        //card title
        // var cardTitle = $("<span>");
        // cardTitle.addClass("card-title truncate");
        // cardTitle.text(response.events[i].name.text);

        //BROKEN
        // //favorite button
        // var favButton = $("<div>");
        // favButton.addClass("btn-floating halfway-fab waves-effect waves-light red");
        // favButton.html("<i class='fas fa-heart'></i>")

        var cardContent = $("<div>");
        cardContent.addClass("card-content");
        var cardInfo = $("<p>");
        cardInfo.text(response.events[i].name.text);
        cardContent.append(cardInfo);

        //card link
        var cardLink = $("<div>");
        cardLink.addClass("card-action");
        cardLink.html("<a href= '" + response.events[i].url + "' target='_blank'>" + "More Info" + "</a>");

        // append all front of card to div
        $("#events-div").append(cardWidth);
        cardWidth.append(card);
        card.append(cardImgDiv);
        cardImgDiv.append(cardImg);
        // cardImgDiv.append(cardTitle);
        // cardImgDiv.append(favButton);
        card.append(cardContent);
        card.append(cardLink);

    };
});


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

    for (var i = 0; i < 4; i++) {
        // create new card
        var cardWidth = $("<div>");
        cardWidth.addClass("col s6 m3");
        var card = $("<div>");
        card.addClass("card small");
        var cardImgDiv = $("<div>");
        cardImgDiv.addClass("card-image");
        //create card image
        var cardImg = $("<img>");
        if (response.restaurants[i].restaurant.photo_count === 0) {
            cardImg.attr("src", "assets/images/dining/restaurant-icon.png");
        } else {
            cardImg.attr("src", response.restaurants[i].restaurant.photos[0].photo.url);
        };

        //card title
        var cardTitle = $("<span>");
        cardTitle.addClass("card-title truncate");
        cardTitle.text(response.restaurants[i].restaurant.name);

        // //favorite button
        // var favButton = $("<a>");
        // favButton.addClass("btn-floating halfway-fab waves-effect waves-light red");
        // favButton.html("<i class='fas fa-heart'></i>")

        var cardContent = $("<div>");
        cardContent.addClass("card-content");
        var cardBudget = $("<p>");
        cardBudget.text("Average Cost: $" + response.restaurants[0].restaurant.average_cost_for_two + " for two");
        var cardCuisine = $("<p>");
        cardCuisine.text("Cuisine: " + response.restaurants[0].restaurant.cuisines);
        cardContent.append(cardBudget);
        cardContent.append(cardCuisine);

        //card link
        var cardLink = $("<div>");
        cardLink.addClass("card-action");
        cardLink.html("<a href= '" + response.restaurants[i].restaurant.url + "' target='_blank'>" + "More Info" + "</a>");

        // append all front of card to div
        $("#restaurants-div").append(cardWidth);
        cardWidth.append(card);
        card.append(cardImgDiv);
        cardImgDiv.append(cardImg);
        cardImgDiv.append(cardTitle);
        // cardImgDiv.append(favButton);
        card.append(cardContent);
        card.append(cardLink);

    };
});