$(document).ready(function() {

var userGuess;

var images;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unanswered = 0;

var question = 0;

var counter = 45;

var wuTangClanQuestions = {

        query1: "What is the name of the first track in the Wu-Tang Clan's debut album, 'Enter the Wu-Tang(36 Chambers)'?",
        query2: "Which one of the rappers listed below is not a member of the Wu?", 
        query3: "How many members does the Wu-Tang Clan consist of?",
        query4: "What does CREAM stand for?",
    choicesAnswers: {
        choices1: [" a. CREAM " , " b. Bring Da Ruckus " , " c. Clan in Da Front " , " d. None of the Above "],
        choices2: [" a. RZA " , " b. GZA " , " c. Nas " , " d. U-God "],
        choices3: [" a. 8 " , " b. 7 " , " c. 5 " , " d. 9 "],
        choices4: [" a. CashRulesEverythingAroundMaryland " ,  " b. CrazyRealEldersAlwaysMean " , " c. CashRulesEverythingAroundMe " , " d. None of the Above "],
    },
    correctAnswers:[{
        answer1: 1,
        answer2: 2,
        answer3: 3,
        answer4: 2,
    }]
};



function theGame () {
$("#startBtn").remove();
}

function btnPrompts () {
 $("#submit").append("<button type='button' id='submitBtn'>Submit</button>");
 for (var i = 0; i <wuTangClanQuestions.choicesAnswers.choices1; i++) {
     var a = $("<button>");
     a.addClass("choices1");
     a.attr("data-name", wuTangClanQuestions.choicesAnswers.choices1[i]);
     a.text(wuTangClanQuestions.choicesAnswers.choices1[i]);
     $("#choices1").append(a);
     console.log(btnPrompts);
 }
};


$("#startBtn").click(function() {
    theGame();
    btnPrompts ();
        $("#question1").html("#1: " + wuTangClanQuestions.query1);
        $("#question2").html("#2: " + wuTangClanQuestions.query2);
        $("#question3").html("#3: " + wuTangClanQuestions.query3);
        $("#question4").html("#4: " + wuTangClanQuestions.query4);
        
        $("#choices2").html(wuTangClanQuestions.choicesAnswers.choices2);
        $("#choices3").html(wuTangClanQuestions.choicesAnswers.choices3);
        $("#choices4").html(wuTangClanQuestions.choicesAnswers.choices4);
    });

    })