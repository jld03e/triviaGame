//Please Note: New comments have been identified with '***'.

$(document).ready(function() {

var choices

var correctAnswerTally = 0;

var incorrectAnswer = 0;

var unanswered = 0;

var counter = 60;

var intervalId;

var questions = [{
    question: "What is the name of the Wu-Tang Clan's debut album?",
    answers: [" CREAM " , " Enter The Wu-Tang" , " Clan in Da Front " , " None of the Above "],
    correctAnswer: " Enter The Wu-Tang "
} , {
    question: "Which one of the rappers listed below is not a member of the Wu?", 
    answers: [" Nas " , " Raekwon " , " GhostFace Killah " , " None of the Above "],
    correctAnswer: " Nas "
},{
    question: "How many members does the Wu-Tang Clan consist of?",
    answers: [" 8 " , " 9 " , " 10 " , " 5 "],
    correctAnswer: " 9 "
},{
    question: "What does CREAM stand for?",
    answers: [" CashRulesEverythingAroundMaryland " ,  " CrazyRealEldersAlwaysMean " , " CashRulesEverythingAroundMe " , " None of the Above "],
    correctAnswer: " CashRulesEverythingAroundMe "
}
];

//Timer related functions, setting timer to hide and show in the  'theGame' function, when 'run.'***
//timer could will be updated once questions and answers have been made dynamic***
//through JS. i've postponed editing the timers any further till i can establish***
//right and wrong answers and count those results.***

$("#timer-line").hide();
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//runs down the timer to the final second.***
//equipped with an alert, in the interim, as i resolve the code for the questions***
//and answers.***
function decrement () {
    counter--;
    $("#timer-line").show();
    $("#timer-line").html(counter + " Seconds ");
    if (counter === 0) {
        stop ();
        alert("Time Up.");
    };
};

// defines theGame function to be when we remove the start button, append the submit button, and show it.
function theGame () {
$("#startBtn").remove();
$("#submit").append("<button type='button' id='submitBtn'>Submit</button>");
run();
}


// attempting to display question and answer choices in the html.
// questions and answers never displayed properly. was stuck on this portion of***
//the assignment for the better part of at least two study days if not more.***
//when this assignment gets resubmitted, it'll be because this portion of the***
//assignment has been resolved.***
function prompts () {
    for (var i=0; i< questions.length; i++) {
    $("#form").append("<div id = 'question" + i + "'>" + questions[i].question + "<br></div><br><br>");
        for (var j=0; j<questions[i].answers.length; j++) {
        $("#question" + i).append("<input name = 'question" + i + "answer' id ='answer" + j + "'type='radio' value='" + j + "'>" + questions[i].answers[j] + "</input><br>");
    }};
$("#submit").show();
};

// portion of code where the on click function for start, runs the previously created functions.
    $("#startBtn").click(function() {
    theGame();
    prompts();
    });
//need to create a function that tracks the answers the user is providing,
//and compares them against the correct answer in the variable.
    function done() {
        $.each($("input[name = 'question0answer']:checked"), function () {
            if($(this).val() === questions[0].correctAnswer) {
                console.log(this);
                correctAnswerTally++;
            } else {
                incorrectAnswer++;
            }
        });
        $.each($("input[name = 'question1answer']:checked"), function () {
            if($(this).val() === questions[1].correctAnswer) {
                console.log(this);
                correctAnswerTally++;
            } else {
                incorrectAnswer++;
            }
        });
        $.each($("input[name = 'question2answer']:checked"), function () {
            if($(this).val() === questions[2].correctAnswer) {
                console.log(this);
                correctAnswerTally++;
            } else {
                incorrectAnswer++;
            }
        });
        $.each($("input[name = 'question3answer']:checked"), function () {
            if($(this).val() === questions[3].correctAnswer) {
                console.log(this);
                correctAnswerTally++;
            } else {
                incorrectAnswer++;
            }
        });
    }
    function results() {
        clearInterval(intervalId);


        $("#form").remove();
        $("#question").remove();
        $(".correct").append("<h3> You got this many right: " + correctAnswerTally + "<h3>");
        $(".incorrect").append("<h3> You got this many wrong, dummy: " + incorrectAnswer + "<h3>");
        $(".unanswered").append("<h3> You got this many fucked up: " + unanswered + "<h3>");
    }

    $("#submit").click(function() {
        done();
        results();
        $("#submit").remove();

        });
    
    })
//i honestly don't know what else to write or include in the comments. i'll accept***