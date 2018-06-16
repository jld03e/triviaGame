//Please Note: New comments have been identified with '***'.

$(document).ready(function() {

var userGuess;

var images;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unanswered = 0;

var question = 0;

var counter = 60;

var intervalId;

var questions = [{
    question: "What is the name of the Wu-Tang Clan's debut album?",
    answers: [" CREAM " , " Enter The Wu-Tang" , " Clan in Da Front " , " None of the Above "],
    correctAnswer: 1,
} , {
    question: "Which one of the rappers listed below is not a member of the Wu?", 
    answers: [" CREAM " , " Bring Da Ruckus " , " Clan in Da Front " , " None of the Above "],
    correctAnswer: 2,
},{
    question: "How many members does the Wu-Tang Clan consist of?",
    answers: [" RZA " , " GZA " , " Nas " , " U-God "],
    correctAnswer: 3,
},{
    question: "What does CREAM stand for?",
    answers: [" CashRulesEverythingAroundMaryland " ,  " CrazyRealEldersAlwaysMean " , " CashRulesEverythingAroundMe " , " None of the Above "],
    correctAnswer: 2,
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
function stop() {
    clearInterval(intervalId);
}


// defines theGame function to be when we remove the start button, append the submit button, and show it.
function theGame () {
$("#startBtn").remove();
$("#submit").append("<button type='button' id='submitBtn'>Submit</button>");
run();
$("#submit").show();
}


// attempting to display question and answer choices in the html.
// questions and answers never displayed properly. was stuck on this portion of***
//the assignment for the better part of at least two study days if not more.***
//when this assignment gets resubmitted, it'll be because this portion of the***
//assignment has been resolved.***
function prompts () {
    for (var i=0; i< questions.length; i++) {
    $("#questions_div").append(questions[i].question);
    }
    for (var j=0; j<questions[i].answers.length; j++) {
    $("#choices_div").append(questions[i].answers[j]);
    };

};

// portion of code where the on click function for start, runs the previously created functions.
    $("#startBtn").click(function() {
    theGame();
    prompts();
    });

    })
//i honestly don't know what else to write or include in the comments. i'll accept***
//this grade as the code is beyond broken, and i acknowledge that. i'll revisit***
//this assignment and slack you once it's been updated and functioning***
//properly. i didnt bother to do any CSS, as i was trying to make the***
//actual game work.***