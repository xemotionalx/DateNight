let questionBank = [
  {
    question: "Greeting your lover with a bottle of Merlot, Godiva Chocolates while 'Always Be My Maybe' plays on Netflix. Perfect Friday evening?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q01",
  },
  {
    question: "Gordon Ramsey opens a new tai-fusion restaraunt in your city.  Your immediate response is reservations for two?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q02",
  },
  {
    question: "You and your partner value an active, healthy, adventerous lifestyle. Hitting the trails with your bikes and then stoppping at a local juice bar sounds fun?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q03",
  },
  {
    question: "Your lover is in the shower bellowing out 'BEAUTIFUL PEOPLE'! you reminisce on your first date!  Do you purchase front row tix for Ed Sheeran Concert?.",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q04",
  },
  {
    question: "It's 2 AM, the moon is full while you and your bae stroll down a cobblestoned street after a cigar and congac pairing event. Should you call it a night?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q05"
  },
  {
    question: "You like to have everything planned and stay on schedule when at work, But in your Love Life you like to spice things up with some hanky panky deviousness, sounds inticing?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q06"
  },
  {
    question: "You get excited when your friends cancel plans for the evening?.",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q07"
  },
  {
    question: "Your palate is for something eccentric and exciting. Do you emulate a new recipe to suprise your sweety?.",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q08". 
  },
  {
    question: "Your experience of an event is based on whether it was memorable or not?.",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q09"
  },
  {
    question: "The party doesn't start until you arrive?. Do you make it rain?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q10"
  },
  {
    question: "Popcorn, beer, and the cracking of the bat hitting a baseball at the season opener. The Jumbotron hones in you both. Do you show the world your kissing skills?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q11"
  },
  {
    question: "Twitter, IG, Facebook, Snapchat! You love to make new and interesting friends. Are you the ultimate extrovert?.",
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
    question: "Your mate asks, How functional are you Data? you respond, I am programmed in multiple techniques in a monotone voice. You both are diehard Trekkies Should you beam them to the convention in town?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q14"
  },
  {
    question: "Chai Tea, Lavender Vanilla Candle fills the air while you engross yourself into your favorite Novel. Do you put your phone on Do Not Disturb mode?",
    answers: ["disagree", "agree"],
    correct: "agree",
    name: "q15"
  },
  {
    question: "Is home is your safe haven?.",
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

  }
  else {
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
$("#next-button").on("click", function () {
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
  solutionBank.forEach(function (answer) {
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
  }
  else if (correctD > 10) {
    console.log("you're homebody");
    $("#category").html("<h4>" + "'I don't want to be alone. I want to be left alone.'" + "</h4>" + "<h6>" + "~Audrey Hepburn~" + "</h6>" + "<p>" + "Congratulations...you're a homebody." + "You are all about hearth and home.  You look forward to weekends because it means that you don't have to leave your home. Even though you're no party animal, you are willing to play host/hostess on occasion to your closest friends." + "</p>" + "<p>" + "For additional information on being a homebody, reference the following article:'<a target = '_blank' href = 'https://www.fromroses.co.uk/blog/lessons-learnt-from-being-a-introvert-a-homebody'>'Lessons Learnt from Being an Introvert & a Homebody'</a>");
    $("#category").prepend("<img src='./assets/images/questions/bcwatching tv h.jpg'>" + "</img>");
    $("#reset-button").hide();
    $("#continue-button").hide();
    $("#reset-button").show();
    $("#continue-button").show();

  } else if (correctA == 0 && correctD == 0) {
    $("#category").html("<p>" + "You didn't answer any of the questions. Please click on the below and return to the questions." + "</p>");
    $("#category").prepend("<img src='./assets/images/questions/sorry2.jpg'>" + "</img>");
    $("#reset-button").hide();
    $("#reset-button").show();
  }
  else {
    console.log("you're a non-conformist");
    $("#category").html("<h4>" + "'Imitation is suicide.'" + "</h4>" + "<h6>" + "~ Ralph Waldo Emerson ~" + "</h6>" + "<p>" + "Congratulations...you are a nonconformist." + "</p" + "<p>" + "You believe in bucking trends and going your own way. In general, you refuse to follow prevailing rules or practices.  This tendency means that you're willing to try something outside normal." + "</p>" + "<p>" + "For additional information on being a nonconformist, reference the following article: '<a target = '_blank' href = 'https://sloanreview.mit.edu/article/the-surprising-benefits-of-nonconformity/'>'The surprising Benefits of Nonconformity'</a>'");
    $("#category").prepend("<img src='./assets/images/questions/nc1.jpg'>" + "</img>")
    $("#reset-button").hide();
    $("#continue-button").hide();
    $("#reset-button").show();
    $("#continue-button").show();
  }
}

//create click event to start quiz.
let start = $("#start-button");
$("#start-button").on("click", function () {
  $("#question").show();
  $("#instructions").hide();
  $("#start-button").hide();
  $("#next-button").show();
  questionLoad();

})

$("#reset-button").on("click", function () {
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

