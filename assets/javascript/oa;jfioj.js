var options = [
    {
        question: "1. How do crickets hear?",
        choices: ["belly", "tongue", "knees", "feet"],
        answer: 3

    },
    {
        question: "Which animal sleeps for only five minutes a day?",
        choices: ["giraffes", "koala", "beaver", "camel"],
        answer: 1

    },
    {
        question: "Which European city is home to the Fairy Investigation Society?",
        choices: ["Bratislava", "Poznan", "Dublin", "France"],
        answer: 3

    },

    {
        question: "What’s a frog’s favorite color?",
        choices: ["blue", "orange", "yellow", "brown"],
        answer: 4

    }
]




var correct = 0;
var incorrect = 0;
var unanswerC = 0;
var timer = 30;
var intervalId;
var playerGuess = "";
var running = false;
var qCount = options.length;
var pick;
var index;
var newArray = [];
var holder = [];


$(document).ready(function () {



    $("#reset").hide();
    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        runTimer();
        for (var i = 0; i < options.length; i++) {
            holder.push(options[i]);
        }
    })

    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    function decrement() {
        $("#timeleft").html("<h2>Time remaining: " + timer + "</h2>");
        timer--;

        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answer").html("<p>Time's up - The correct answer is: " + pick.choice[pick.answer] + "</p>");
        }
    }

    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function displayQuestion() {
        index = Math.floor(Math.random() * options.length);
        pick = options[index];

        if (pick.shown) {
            displayQuestion();
        } 
        else {
            console.log(pick.question);
            $("#question").html("<h2>" + pick.question + "</h2>");
            for (var i = 0; i < pick.choices.length; i++) {
                var playerChoice = $("<div>");
                playerChoice.addClass("answerchoice");
                playerChoice.html(pick.choices[i]);
                playerChoice.attr("data-guessvalue", i);
                $("#answers").append(playerChoice);
            }
        }
    }
    
        $(".answerchoice").on("click", function () {
            userGuess = parseInt($(this).attr("data-guessvalue"));

            if (playerChoice === pick.answer) {
                stop();
                correctCount++;
                playerChoice = "";
                $("#answers").html("<p>Correct!</p>");

            } else {
                stop();
                wrongCount++;
                userGuess = "";
                $("#answers").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");

            }
        })

        $("#reset").on("click", function () {
            $("#reset").hide();
            $("#answer").empty();
            $("#question").empty();
            for (var i = 0; i < holder.length; i++) {
                options.push(holder[i]);
            }
            runTimer();
            displayQuestion();
        })
}) 
