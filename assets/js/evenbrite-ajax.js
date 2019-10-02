$(document).ready(function() {
    //Initialize Materialize search form - location
    $('select').formSelect();

    //Get User Profile from Local Storage

    //Determine query url based on user profile
    var user = localStorage.getItem("coupleType");

    console.log(user);

    var eventsQuery1 = "";
    var eventsQuery2 = "";
    var eventsQuery3 = "";

    if (user === "athletic") {
        eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3008&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?categories=109&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?categories=108&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
    } else if (user === "foodie") {
        eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?categories=110&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?categories=113&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?categories=105&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
    } else if (user === "party") {
        eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3006&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=5010&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3008&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
    } else if (user === "quirky") {
        eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3009&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?categories=105&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?categories=104&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
    } else if (user === "homebody") {
        eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3003&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=7004&location.address=philadelphia&location.within=10km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=4001&location.address=philadelphia&location.within=10km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
    } else if (user === null) {
        eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?categories=110&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?categories=103&location.address=philadelphia&location.within=10km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?categories=105&location.address=philadelphia&location.within=10km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
    }


    //sample queryURL = "https://www.eventbriteapi.com/v3/events/search//?categories=103&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";

    //FIRST ROW OF RESULTS

    $.ajax({
        url: eventsQuery1,
        method: "GET"
    }).then(function(response) {

        for (i = 0; i < 6; i++) {
            // var cardWidth = $("<div>");
            // cardWidth.addClass("col s12 m4");

            var card = $("<div>");
            card.addClass("card small");

            var cardImgDiv = $("<div>");
            cardImgDiv.addClass("card-image waves-effect waves-block waves-light");

            var cardImg = $("<img>");
            cardImg.addClass("activator");
            cardImg.attr("src", response.events[i].logo.original.url);

            var cardContent = $("<div>");
            cardContent.addClass("card-content");

            var cardTitle = $("<span>");
            cardTitle.addClass("card-title activator grey-text text-darken-4 truncate");
            cardTitle.text(response.events[i].name.text);

            var cardIcon = $("<i>");
            cardIcon.addClass("material-icons right");
            cardIcon.text("more_vert");

            var cardLink = $("<p>");
            cardLink.html("<a href= '" + response.events[i].url + "' target='_blank'>" + "See Event Details" + "</a>");

            var cardReveal = $("<div>");
            cardReveal.addClass("card-reveal");

            var cardRevealTitle = $("<span>");
            cardRevealTitle.addClass("card-title grey-text text-darken-4");
            cardRevealTitle.text("Event Info");

            var closeIcon = $("<i>");
            closeIcon.addClass("material-icons right");
            closeIcon.text("close");

            var eventInfo = $("<p>");
            eventInfo.html(response.events[i].description.html);

            if (i === 0) {
                $("#1-1").append(card);
            } else if (i === 1) {
                $("#1-2").append(card);
            } else if (i === 2) {
                $("#1-3").append(card);
            } else if (i === 3) {
                $("#1-4").append(card);
            } else if (i === 4) {
                $("#1-5").append(card);
            } else if (i === 5) {
                $("#1-6").append(card);
            }
            // cardWidth.append(card);
            card.append(cardImgDiv);
            cardImgDiv.append(cardImg);
            card.append(cardContent);
            cardContent.append(cardTitle);
            cardTitle.append(cardIcon);
            cardContent.append(cardLink);

            card.append(cardReveal);
            cardReveal.append(cardRevealTitle);
            cardRevealTitle.append(closeIcon);
            cardReveal.append(eventInfo);
        };
    });


    $.ajax({
        url: eventsQuery2,
        method: "GET"
    }).then(function(response) {

        for (i = 0; i < 6; i++) {
            var card = $("<div>");
            card.addClass("card small");

            var cardImgDiv = $("<div>");
            cardImgDiv.addClass("card-image waves-effect waves-block waves-light");

            var cardImg = $("<img>");
            cardImg.addClass("activator");
            cardImg.attr("src", response.events[i].logo.original.url);

            var cardContent = $("<div>");
            cardContent.addClass("card-content");

            var cardTitle = $("<span>");
            cardTitle.addClass("card-title activator grey-text text-darken-4 truncate");
            cardTitle.text(response.events[i].name.text);

            var cardIcon = $("<i>");
            cardIcon.addClass("material-icons right");
            cardIcon.text("more_vert");

            var cardLink = $("<p>");
            cardLink.html("<a href= '" + response.events[i].url + "' target='_blank'>" + "See Event Details" + "</a>");

            var cardReveal = $("<div>");
            cardReveal.addClass("card-reveal");

            var cardRevealTitle = $("<span>");
            cardRevealTitle.addClass("card-title grey-text text-darken-4");
            cardRevealTitle.text("Event Info");

            var closeIcon = $("<i>");
            closeIcon.addClass("material-icons right");
            closeIcon.text("close");

            var eventInfo = $("<p>");
            eventInfo.html(response.events[i].description.html);

            if (i === 0) {
                $("#2-1").append(card);
            } else if (i === 1) {
                $("#2-2").append(card);
            } else if (i === 2) {
                $("#2-3").append(card);
            } else if (i === 3) {
                $("#2-4").append(card);
            } else if (i === 4) {
                $("#2-5").append(card);
            } else if (i === 5) {
                $("#2-6").append(card);
            }

            card.append(cardImgDiv);
            cardImgDiv.append(cardImg);
            card.append(cardContent);
            cardContent.append(cardTitle);
            cardTitle.append(cardIcon);
            cardContent.append(cardLink);

            card.append(cardReveal);
            cardReveal.append(cardRevealTitle);
            cardRevealTitle.append(closeIcon);
            cardReveal.append(eventInfo);
        };
    });

    $.ajax({
        url: eventsQuery3,
        method: "GET"
    }).then(function(response) {

        for (i = 0; i < 6; i++) {
            var cardWidth = $("<div>");
            cardWidth.addClass("col s12 m4");

            var card = $("<div>");
            card.addClass("card small");

            var cardImgDiv = $("<div>");
            cardImgDiv.addClass("card-image waves-effect waves-block waves-light");

            var cardImg = $("<img>");
            cardImg.addClass("activator");
            cardImg.attr("src", response.events[i].logo.original.url);

            var cardContent = $("<div>");
            cardContent.addClass("card-content");

            var cardTitle = $("<span>");
            cardTitle.addClass("card-title activator grey-text text-darken-4 truncate");
            cardTitle.text(response.events[i].name.text);

            var cardIcon = $("<i>");
            cardIcon.addClass("material-icons right");
            cardIcon.text("more_vert");

            var cardLink = $("<p>");
            cardLink.html("<a href= '" + response.events[i].url + "' target='_blank'>" + "See Event Details" + "</a>");

            var cardReveal = $("<div>");
            cardReveal.addClass("card-reveal");

            var cardRevealTitle = $("<span>");
            cardRevealTitle.addClass("card-title grey-text text-darken-4");
            cardRevealTitle.text("Event Info");

            var closeIcon = $("<i>");
            closeIcon.addClass("material-icons right");
            closeIcon.text("close");

            var eventInfo = $("<p>");
            eventInfo.html(response.events[i].description.html);

            if (i === 0) {
                $("#3-1").append(card);
            } else if (i === 1) {
                $("#3-2").append(card);
            } else if (i === 2) {
                $("#3-3").append(card);
            } else if (i === 3) {
                $("#3-4").append(card);
            } else if (i === 4) {
                $("#3-5").append(card);
            } else if (i === 5) {
                $("#3-6").append(card);
            }

            card.append(cardImgDiv);
            cardImgDiv.append(cardImg);
            card.append(cardContent);
            cardContent.append(cardTitle);
            cardTitle.append(cardIcon);
            cardContent.append(cardLink);

            card.append(cardReveal);
            cardReveal.append(cardRevealTitle);
            cardRevealTitle.append(closeIcon);
            cardReveal.append(eventInfo);
        };
    });

});