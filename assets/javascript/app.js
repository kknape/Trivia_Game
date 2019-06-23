//The Trivia Game - My javascript file //
$(document).ready(function(){

//Assign the correct answer to each answer choice
//Timer countsdown from 30 seconds to zero
//when timer is at zero, stop the timer and evaluate if answers are correct
//when all questions have been answered evaluate if answers are correct or incorrect 
//evaluate & display how many incorrect answers were input

//quiz variables
var questions = [
        {   triviaQuestion: "What color is a blueberry?",
            answerOption1: "blue",
            answerOption2: "red",
            answerOption3: "green",
            correctAnswer: "blue",
            },

        {   triviaQuestion: "How many days in a week?",
            answerOption1: "one",
            answerOption2: "two",
            answerOption3: "five",
            correctAnswer: "seven",
        }
        ]
var numCorrect = 0;
var numIncorrect = 0;

//timer variables
var intervalId;
var clockRunning = false; 
var time = 30;

    function reset() {
        time = 30;
        $("#timeLeft").text("30");  // reset to 30
    }

    function start() {  // Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        }
    }
//Use clearInterval to stop the count here and set the clock to not be running.
    function stop() {
        clearInterval(intervalId);
        clockRunning = false;
      }
// Decrement time by 1
    function count() {       
           if (time == 0){
            alert("Sorry, time's up!");
            numCorrect =$("<div>");
            numCorrect.attr({
                "class": "correctScore"
            });
            numIncorrect =$("<div>");
            numIncorrect.attr({
                    "class": "incorrectScore"
                });

                stop();
           }
           else{
               time--; 
                $("#timeLeft").html(time);

                 }
              }   
    start();

    for (var i=0; i < questions.length; i++){
        var response = window.html(questions[i].triviaQuestion);
            if(response == questions[i].correctAnswer){
                    numCorrect++;
                }
                else {
                    numIncorrect--;
                }
    
    }



        });
