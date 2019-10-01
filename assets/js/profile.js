var user = localStorage.getItem("coupleType");

console.log(user);
if (user === "athletic") {
    $(".profile-box").css("background-image", "url('assets/images/profile/athletic-bg.jpg')");
    $(".profile__title").text("The Athletic Couple");
    $("#profile-text").text("You're the athletic couple! You like adventure and the outdoors and jogging. ");
} else if (user === "foodie") {
    console.log("na");
} else if (user === "party") {
    console.log("na");
} else if (user === "quirky") {
    $(".profile-box").css("background-image", "url('assets/images/profile/adventurous-bg.jpeg')");
    $(".profile__title").text("The Quirky Couple");
    $("#profile-text").text("You're the quirky couple! You're not afraid to try new things together or take a romantic stroll off the beaten path. Whether you're at a tiki bar or a comics convention, you and your partner love to create new one-of-a-kind experiences together.");
} else if (user === "homebody") {
    $(".profile-box").css("background-image", "url('assets/images/profile/homebody-bg.jpg')");
    $(".profile__title").text("The Homebody Couple");
    $("#profile-text").text("You're the homebody couple! You like low key nights out, but prefer quiet nights in. ");
} else if (user === null) {
    $(".profile__title").text("Please take the quiz");
    $("#profile-text").text("It's easy! Just click below. ");
}