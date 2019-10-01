var coupleType = "";

let questionBank = [{
            question: "It's Friday night and you plan to netflix and chill.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q01",
        },
        {
            question: "Gordon Ramsey opens a new tai-fusion restaraunt in your city.  Your immediate response is 'I'm there!'",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q02",
        },
        {
            question: "Someday you want to climb Mt. Everest and BASE jump from the peak.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q03",
        },
        {
            question: "You will camp out on the sidewalk to get tickets to Comic Con.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q04",
        },
        {
            question: "It's two in the morning, and you're leaving for the next party while everyone else is going home.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q05"
        },
        {
            question: "You like to have everything planned and stay on schedule.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q06"
        },
        {
            question: "You get excited when your friends cancel plans for the evening.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q07"
        },
        {
            question: "You have a food bucket list.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q08"
        },
        {
            question: "Your experience of an event is based on whether the food was good.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q09"
        },
        {
            question: "The party doesn't start until you arrive.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q10"
        },
        {
            question: "You have lifetime season tickets to attend games for your favorite sports team.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q11"
        },
        {
            question: "You enter a room and make everyone your best friend.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q12"
        },
        {
            question: "You have unique hobbies that most people know very little about.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q13"
        },
        {
            question: "Your friends come to you to find out where the parties are for the weekend.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q14"
        },
        {
            question: "You tend to ignore trends and go my own way.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q15"
        },
        {
            question: "Home is your safe haven.",
            answers: ["disagree", "agree"],
            correct: "agree",
            name: "q16"
        },
    ]
    //create variable for initial questions
let firstAnswer = 0;
let firstQuestion = 0;


//create variables for tracking agree and disagree
let correctA = 0;
let correctD = 0;

function questionLoad() {
    $("#question").html("<h6 class= questions>" + questionBank[firstQuestion].question + "</h6>");
    for (var i = 0; i < questionBank[firstQuestion].answers.length; i++) {
        $("#question").append("<br>" + "<input type='radio' value='" + questionBank[firstAnswer].answers[i] + "' class='answers' name='" + questionBank[firstQuestion].name + "'>" + questionBank[firstAnswer].answers[i]);
    }
}

function nextQuestion() {
    let remainingQuestions = questionBank.length - 1;
    if (remainingQuestions === firstQuestion) {
        $("#next-button").hide();
        $("#question").hide();
        quizEnd();
        $("#category").show();

    } else {
        firstQuestion++;
        firstAnswer++;
        questionLoad();

    }
}

$("#next-button").hide();
$("#reset-button").hide();
$("#continue-button").hide();

//create an array variable to hold all of user's choices
let solutionBank = [];

//create next button
$("#next-button").on("click", function() {
    //alert("button working")
    let solution = questionBank[firstQuestion].correct;
    console.log("solution " + solution);

    let userChoice = $("input[name=" + questionBank[firstQuestion].name + "]:checked").val();
    console.log("user chose: " + userChoice);

    solutionBank.push(userChoice);
    console.log("solution " + solutionBank);

    nextQuestion();
})

//create function to loop over array of user's choice
//create swith cases to accumlate number of agrees vs disagrees
//create if statements use the accumulators to drive to a specific category
//create general copy of each category to display

$("#category").show();

function quizEnd() {
    solutionBank.forEach(function(answer) {
        switch (answer) {
            case "agree":
                correctA++;
                break;
            case "disagree":
                correctD++;
                break;
        }
    });
    console.log("a " + correctA)
    console.log("d " + correctD)
    if (correctA > 10) {
        console.log("you're adventurous");
        $("#category").html("<h4>" + "'Life begins at the end of your comfort zone.'" + "</h4>" + "<h6>" + "~Neale Donald Walsch~" + "</h6>" + "<p>" + "Congratulations...you are an adventurer." + "</p>" + "<p>" + "You have a passion for exploration into all areas of life.  You thrive on taking risks and you make fear the fuel for your mental toughness. You're willing to stretch yourself to try new and interesting foods, ceremonies and situations." + "For additional information on being an adventurer, reference the following article: '<a target = '_blank' href = 'https://www.lifehack.org/287511/8-surprising-signs-you-might-natural-born-adventurer'>'8 Surprising Signs You Might be a Natural Born Adventurer'</a>'.");
        $("#category").prepend("<img src='./assets/images/questions/adcouple.jpg'>" + "</img>");
        $("#reset-button").hide();
        $("#continue-button").hide();
        $("#reset-button").show();
        $("#continue-button").show();
        coupleType = "party";
    } else if (correctD > 10) {
        console.log("you're homebody");
        $("#category").html("<h4>" + "'I don't want to be alone. I want to be left alone.'" + "</h4>" + "<h6>" + "~Audrey Hepburn~" + "</h6>" + "<p>" + "Congratulations...you're a homebody." + "You are all about hearth and home.  You look forward to weekends because it means that you don't have to leave your home. Even though you're no party animal, you are willing to play host/hostess on occasion to your closest friends." + "</p>" + "<p>" + "For additional information on being a homebody, reference the following article:'<a target = '_blank' href = 'https://www.fromroses.co.uk/blog/lessons-learnt-from-being-a-introvert-a-homebody'>'Lessons Learnt from Being an Introvert & a Homebody'</a>");
        $("#category").prepend("<img src='./assets/images/questions/bcwatching tv h.jpg'>" + "</img>");
        $("#reset-button").hide();
        $("#continue-button").hide();
        $("#reset-button").show();
        $("#continue-button").show();
        coupleType = "homebody";

    } else if (correctA == 0 && correctD == 0) {
        $("#category").html("<p>" + "You didn't answer any of the questions. Please click on the below and return to the questions." + "</p>");
        $("#category").prepend("<img src='./assets/images/questions/sorry2.jpg'>" + "</img>");
        $("#reset-button").hide();
        $("#reset-button").show();
    } else {
        console.log("you're a non-conformist");
        $("#category").html("<h4>" + "'Imitation is suicide.'" + "</h4>" + "<h6>" + "~ Ralph Waldo Emerson ~" + "</h6>" + "<p>" + "Congratulations...you are a nonconformist." + "</p" + "<p>" + "You believe in bucking trends and going your own way. In general, you refuse to follow prevailing rules or practices.  This tendency means that you're willing to try something outside normal." + "</p>" + "<p>" + "For additional information on being a nonconformist, reference the following article: '<a target = '_blank' href = 'https://sloanreview.mit.edu/article/the-surprising-benefits-of-nonconformity/'>'The surprising Benefits of Nonconformity'</a>'");
        $("#category").prepend("<img src='./assets/images/questions/nc1.jpg'>" + "</img>")
        $("#reset-button").hide();
        $("#continue-button").hide();
        $("#reset-button").show();
        $("#continue-button").show();
        coupleType = "quirky";
    }

    //Clear Local Storage
    localStorage.clear();

    // Store the information into localStorage using "localStorage.setItem"
    localStorage.setItem("coupleType", coupleType);
}

//create click event to start quiz.
let start = $("#start-button");
$("#start-button").on("click", function() {
    $("#question").show();
    $("#instructions").hide();
    $("#start-button").hide();
    $("#next-button").show();
    questionLoad();

})

$("#reset-button").on("click", function() {
    $("#reset-button").show();
    $("#reset-button").hide();
    $("#continue-button").hide();
    firstAnswer = 0;
    firstQuestion = 0;
    correctA = 0;
    correctD = 0;
    solutionBank = [];
    $("#start-button").show();
    $("#instructions").show();
    $("#category").hide();

})

//let continue = $("#continue-button");
//continue button to move to the next section where recommendations should be displaying