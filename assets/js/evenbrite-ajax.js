
var queryURL = "https://www.eventbriteapi.com/v3/events/search//?categories=103&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";

// https://www.eventbriteapi.com/v3/users/me/events/?token=DNHTAISTPZBP2YMQRXIP

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        $("#events-div").empty();
        
        console.log(response.events[0].name);
        console.log(response.events[0].description);
        console.log("img: " + response.events[0].logo.original.url);
        console.log(response.events[0].url);
        console.log(response.events[0]);

        for (i = 0; i < 3; i++) {
            
            var cardWidth = $("<div>");
            cardWidth.addClass("col s12 m4");

            var card = $("<div>");
            card.addClass("card");

            var cardImgDiv = $("<div>");
            cardImgDiv.addClass("card-image waves-effect waves-block waves-light");

            var cardImg = $("<img>");
            cardImg.addClass("activator");
            cardImg.attr("src", response.events[i].logo.original.url);

            var cardContent = $("<div>");
            cardContent.addClass("card-content");

            var cardTitle = $("<span>");
            cardTitle.addClass("card-title activator grey-text text-darken-4");
            cardTitle.text(response.events[i].name.text);

            var cardIcon = $("<i>");
            cardIcon.addClass("material-icons right");
            cardIcon.text("more_vert");

            


            $("#events-div").append(cardWidth);
            cardWidth.append(card);
            card.append(cardImgDiv);
            cardImgDiv.append(cardImg);
            card.append(cardContent);
            cardContent.append(cardTitle);
            cardTitle.append(cardIcon);


        };

  
     
    });