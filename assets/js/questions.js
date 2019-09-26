let questionBank = [
    {
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
      question: "It's 2 in the morning and you're bored.  You decide to get dressed and go out.",
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
      question: "It's 2 in the morning and you're bored.  You decide to get dressed and go out.",
      answers: ["disagree", "agree"],
      correct: "agree",
      name: "q10"
    }, 
    {
      question: "You have lifetime season tickets to attend games for my favorite sports team.",
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
      question: "The party doesn't start until you arrive.",
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
  ]
  //create variable for initial questions
  let firstAnswer = 0;
  let firstQuestion = 0;
  
  //create variabble for category
  let homebody = 0;
  let adventurous = 0;
  let foodie = 0;
  
  //let results = $("#result");
  
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
      $("#results").show();
    }  
    else{
      firstQuestion++;
      firstAnswer++;
      questionLoad(); 
      
    }
  }  
  
  questionLoad();
  
  
  //create next button
  $("#next-button").on("click", function () {
    //alert("button working")
    let solution = questionBank[firstQuestion].correct;
    console.log("solution " + solution);
    let userChoice = $("input[name=" + questionBank[firstQuestion].name + "]:checked").val();
    console.log("user chose: " + userChoice);
    let solutionBank = [];
    solutionBank.push(userChoice);
    let count = {};
    solutionBank.forEach(function(el){
      count[el] = count[el] + 1 || 1
      
    });
    console.log(count)
  
    nextQuestion(); 
  }) 
  
  
  
  
  
  