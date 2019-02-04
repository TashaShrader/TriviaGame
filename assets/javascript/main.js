var options = [
    {
        question1: "1. How do crickets hear?",
        choices: ["belly", "tongue", "knees", "feet"],
        answer: 3

    },
    {
        question2: "Which animal sleeps for only five minutes a day?",
        choices: ["giraffes", "koala", "beaver", "camel"],
        answer: 1

    },
    {
        question3: "Which European city is home to the Fairy Investigation Society?",
        choices: ["Bratislava", "Poznan", "Dublin", "France"],
        answer: 3

    },

    {
        question4: "What’s a frog’s favorite color?",
        choices: ["blue", "orange", "yellow", "brown"],
        answer: 4

    }
]




var correct;
var incorrect;
var answered;
var time;
var playerGuess;
var currentQ = 0;
var countShow;


$(document).ready(function () {
$(".game").hide();
    $("#start").on("click", function () {
		$("#start").hide();
        newGame();
    })

function newGame() {
    $("#question").show();
    $("#answer").show();
    correct = 0;
    incorrect = 0;
    currentQ = 0;
    questions();
}



function questions() {
    $("#question").html(options[currentQ].question);
    for (var i = 0; i<=4; i++);
    var list = $("<div>");
    list.text(options[currentQ].choices[i]);
    list.attr({"data-index" : i});
    list.addClass("thisChoice");
    $(".choices").append(list);
}
countdown();

$("#answer").on("click", function() {
userChoice = $(this).data("index");
clearInterval(time);
})

function countdown() {
    seconds = 20;
    $("#time").html("00:" + seconds);
    answered = true;
    time = setInterval(countShow, 1000);
}
function countShow() {
    time --;
    ("#timeleft").html("time left: " + countdown);
       
    }
    if (time < 1) {
        clearInterval(time);
        answered = false;
    }


function answers() {      
    var playerGuess = options[currentQ].choices[options[currentQ].correct]
    var correct = options[currentQ].correct;
    console.log(playerGuess);
    console.log(correct);

}

if ((playerGuess === correct) && (answered === true)) {
    correct++;
    console.log(correct);

}

else if ((playerGuess !== correct) && (answered === true)){
    incorrect--;
    console.log(incorrect);
}




})



