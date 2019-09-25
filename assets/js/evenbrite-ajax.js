
var queryURL = "https://www.eventbriteapi.com/v3/events/search/?categories=103";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
        console.log(subcategories);

  
     
    });