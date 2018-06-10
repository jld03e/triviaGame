$(document).ready(function() {

//establishing a function for the start button.

   var startBtn = "<h2>Testing...</h2>";

   //adding append/remove functionality to onclick event.

   function initialize () {
    $("#game").append(startBtn);
    $("#startBtn").remove();
}

//executed updated startBtn functionality here.

    $("#startBtn").click(function() {
        initialize();
    });


var userGuess;

var images;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unanswered = 0;

var question = 0;

var counter = 45;

var wuTangClanQuestions = [{

    question: "What is the name of the first track in the Wu-Tang Clan's debut album, 'Enter the Wu-Tang(36 Chambers)'?",
    choices: ["CREAM", "Bring Da Ruckus", "Clan in Da Front","None of the Above"],
    validAnswer: 1

} , {

    question: "Which one of these rappers is not a member of the Wu?",
    choices: ["RZA", "GZA", "Nas", "U-God"],
    validAnswer: 2

} , {

    question: "How many members does the Wu-Tang Clan consist of?",
    choices: ["8", "7","5","9"],
    validAnswer: 3

} , {

    question: "What does CREAM stand for?",
    choices: ["CashRulesEverythingAround Maryland","CrazyRealEldersAlwaysMean","CashRulesEverythingAroundMe","None of the Above"],
    validAnswer: 2

}

];


   
})