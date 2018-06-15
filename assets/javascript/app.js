$(document).ready(function() {

var userGuess;

var images;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unanswered = 0;

var question = 0;

var counter = 60;

var wuTangClanQuestions = [{

        question: "What is the name of the first track in the Wu-Tang Clan's debut album, 'Enter the Wu-Tang(36 Chambers)'?",
        answers: [" a. CREAM " , " b. Bring Da Ruckus " , " c. Clan in Da Front " , " d. None of the Above "],
        correctAnswer: 1,
},{
        question: "Which one of the rappers listed below is not a member of the Wu?", 
        answers: [" a. CREAM " , " b. Bring Da Ruckus " , " c. Clan in Da Front " , " d. None of the Above "],
        correctAnswer: 2,
},{
        question: "How many members does the Wu-Tang Clan consist of?",
        answers: [" a. RZA " , " b. GZA " , " c. Nas " , " d. U-God "],
        correctAnswer: 3,
},{
        question: "What does CREAM stand for?",
        answers: [" a. CashRulesEverythingAroundMaryland " ,  " b. CrazyRealEldersAlwaysMean " , " c. CashRulesEverythingAroundMe " , " d. None of the Above "],
        correctAnswer: 2,
    },];


$("#timer-line").hide();

function theGame () {
$("#startBtn").remove();
$("#submit").append("<button type='button' id='submitBtn'>Submit</button>");
$("#timer-line").show();
$("#timer-line").html(counter + " Seconds ");
$("#submit").show();
}

function prompts () {
    $("#")
};




$("#startBtn").click(function() {
    theGame();
    prompts ();
    });

    })