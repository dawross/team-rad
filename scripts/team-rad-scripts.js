
/*
============================================
; Title: JavaScript Quiz Group project
; Author: Dan Ross, Arlix Sorto, Rhiannon Kimberlin
; Date: 04 October 2020
; Modified By: Dan Ross, Arlix Sorto, Rhiannon Kimberlin
; Description: JavaScript file for group project
;===========================================
*/
var teamQuestions = [
  {
    id: 1,
    question:
      "What's the output?<br /> <br />var c = { greeting: 'Hey!' }; <br /> var  d;<br /> d = c;<br /> c.greeting = 'Hello';<br /> console.log(d.greeting);",
    answers: [
      {
        a: "Hello",
        b: "Hey!",
        c: "Undefined",
        d: "ReferenceError",
      },
    ],
    correctAnswer: "Hello",
    questionAnswered: false,
  },
  {
    id: 2,
    question:
      "What’s the output?<br /> <br />var num = 8; <br /> var num = 10; <br /> console.log(num);",
    answers: [
      {
        a: "8",
        b: "10",
        c: "SyntaxError",
        d: "ReferenceError",
      },
    ],
    correctAnswer: "10",
    questionAnswered: false,
  },
  {
    id: 3,
    question:
      "What’s the output?<br /> <br />var set = new Set([1, 1, 2, 3, 4]); <br /> console.log(set);",
    answers: [
      {
        a: "[1, 1, 2, 3, 4]",
        b: "[1, 2, 3, 4]",
        c: "{1, 1, 2, 3, 4}",
        d: "{1, 2, 3, 4}",
      },
    ],
    correctAnswer: "{1, 2, 3, 4}",
    questionAnswered: false,
  },
  {
    id: 4,
    question: "How do you create a function in JavaScript?",
    answers: [
      {
        a: "function myFunction()",
        b: "Function == myFunction",
        c: "function.create(myFunction)",
        d: "function:myFunction()",
      },
    ],
    correctAnswer: "function myFunction()",
    questionAnswered: false,
  },
  {
    id: 5,
    question: "How do you write an IF statement in JavaScript?",
    answers: [
      {
        a: "if x=5",
        b: "if (x=5)",
        c: "if x=5 then",
        d: "if x==5 then",
      },
    ],
    correctAnswer: "if (x=5)",
    questionAnswered: false,
  },
  {
    id: 6,
    question: "How does a FOR loop start?<br />",
    answers: [
      {
        a: "for (i=0; i<= 5; i++)",
        b: "for i=1 to 5",
        c: "for (i=0; i<=5)",
        d: "for (i<=5; i++)",
      },
    ],
    correctAnswer: "for (i=0; i<= 5; i++)",
    questionAnswered: false,
  },
  {
    id: 7,
    question:
      "What are the keys in this object? <br /> <br />let library = {<br />librarian: ‘Evan’,<br />security: ‘Camille’,<br />books: 1632<br />}",
    answers: [
      {
        a: "Librarian, Security, Books",
        b: "Evan, Camille, 1632",
        c: "librarian: 'Evan', security: 'Camille', books: 1632",
        d: "There are no keys",
      },
    ],
    correctAnswer: "Librarian, Security, Books",
    questionAnswered: false,
  },
  {
    id: 8,
    question:
      "Which of the following is the correct way to call a function?<br /><br />const divide = (number) => {<br />console.log(number/9)}",
    answers: [
      {
        a: "divide 300",
        b: "divide [300]",
        c: "divide {300}",
        d: "divide (300)",
      },
    ],
    correctAnswer: "divide (300)",
    questionAnswered: false,
  },
  {
    id: 9,
    question:
      "How would one access the third item ‘String Cheese’ in the following array?<br /><br />Const snackArray = [‘Wasabi Peas’, ‘Fruit’, ‘String Cheese’, ‘Sushi’]",
    answers: [
      {
        a: "snackArray{3}",
        b: "snackArray[3]",
        c: "snackArray[2]",
        d: "snackArray['String Cheese']",
      },
    ],
    correctAnswer: "snackArray[2]",
    questionAnswered: false,
  },
  {
    id: 10,
    question:
      "What will the following code result in?<br /><br />Let favoriteCandy = [‘Sour Skittles’, ‘Starbursts’, ‘Gummy Bears’];<br />For (let favoriteCandyIndex = 0; favoriteCandyIndex < favoriteCandy.length; favoriteCandyIndex++) {<br />console.log(favoriteCandy[favoriteCandyIndex])}",
    answers: [
      {
        a: "0: Sour Skittles, 1: Starbursts, 2: Gummy Bears",
        b: "Gummy Bears, Starbursts, Sour Skittles",
        c: "Sour Skittles, Starbursts, Gummy Bears",
        d: "Sour Skittles[0], Starbursts[1], Gummy Bears[2]",
      },
    ],
    correctAnswer: "Sour Skittles, Starbursts, Gummy Bears",
    questionAnswered: false,
  },
];

function QuizViewModel() {
  var self = this;
  self.questionsAnswered = ko.observableArray([]);
  self.selectedAnswer = ko.observable();
  self.currentPosition = ko.observable(0);
  self.questions = ko.observableArray(teamQuestions);

   //Go to next question
  self.nextQuestion = function () {
    var current = self.currentPosition();

    if (current >= self.questions().length - 1) {
      self.showResults();

      return;
    }
    current += 1;
    self.currentPosition(current);
  };

  //Go to previous question
  self.previousQuestion = function () {
    var current = self.currentPosition();

    if (current <= 0) {
      return;
    }
    current -= 1;
    self.currentPosition(current);
  };

  //Get current question.
  self.currentQuestion = function () {
    var current = self.currentPosition();

    return self.questions()[current];
  };

  //Get the user answer.
  self.getAnswer = function () {
    self.selectedAnswer(value);
  };

  //Store user answers.
  self.storeAnswer = function () {

    if (self.selectedAnswer() === undefined) {
      self.selectedAnswer("No Answer");
    }

    var current = self.currentPosition();

    //Should disable the submit button after each question is answered.
    teamQuestions[current].questionAnswered = true;
    self.questions(teamQuestions);

    self.questionsAnswered.push(self.selectedAnswer());
    self.selectedAnswer(undefined);
  };

  //Show the user results.
  self.showResults = function () {
    var questionsAnswered = self.questionsAnswered();

    var numOfCorrectAnswer = 0;
    var numOfIncorrectAnswer = 0;
    var percentage = 0;
    var rank = "Beginner";
    var questionsString = "<ol>";
    var userAnswersString = "<ol>"; 
    var correctAnswersString = "<ol>";


    $(".quiz").hide();
    $(".summary").show();

    //Create a list of the questions
    teamQuestions.forEach(function (question) {
      questionsString += "<li>" + question.question + "</li><br />";
    });

    questionsString += "</ol>";

    //Create a list of the answered questions
    questionsAnswered.forEach(function (question) {
      userAnswersString += "<li>" + question + "</li><br />";
    });
    userAnswersString += "</ol>";

    //Create a list of the correct answers.
    teamQuestions.forEach(function (question) {
      correctAnswersString += "<li>" + question.correctAnswer + "</li><br />";
    });
    correctAnswersString += "</ol>";

    //Checks the user's answers.
    for (var i = 0; i < teamQuestions.length; i++) {
      if (teamQuestions[i].correctAnswer === questionsAnswered[i]) {
        numOfCorrectAnswer += 1;
      } else {
        numOfIncorrectAnswer += 1;
      }
    }

    //Set user's rank.
    if (numOfCorrectAnswer > 6 && numOfCorrectAnswer < 8) {
      rank = "Novice";
    } else if (numOfCorrectAnswer > 8) {
      rank = "Expert";
    }

    //Get the percentage of correct answers.
    percentage = numOfCorrectAnswer / 10;

   //Append the results to the elements.
    $(".result").append(
      "<p>Rank: " +rank +" </p>" +
        "<p>Score: " + Math.round(percentage * 100) + "%" +" </p>" +
        "<p>Number of correct answers: " + numOfCorrectAnswer + " </p>"
    );

    $(".questions").append(questionsString);
    $(".userAnswers").append(userAnswersString);
    $(".correctAnswers").append(correctAnswersString);
  };

  //Restart the quiz.
  self.restartQuiz = function () {
    self.currentPosition(0);
    self.questionsAnswered([]);
    $(".start").show();
    $(".summary").hide();
 
    $(".questions").empty();
    $(".userAnswers").empty();
    $(".correctAnswers").empty();
    $(".result").empty();
    teamQuestions.forEach(function (question) {
      question.questionAnswered = false;
    });

    self.questions(teamQuestions);
  };
}
// Activates knockout.js
ko.applyBindings(new QuizViewModel());
