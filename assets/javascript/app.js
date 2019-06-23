//The Trivia Game - My javascript file //
$(document).ready(function(){

//Assign the correct answer to each answer choice
//Timer countsdown from 30 seconds to zero
//when timer is at zero, stop the timer and evaluate if answers are correct
//when all questions have been answered evaluate if answers are correct or incorrect 
//evaluate & display how many incorrect answers were input

//quiz variables


var numCorrect = 0;
var numIncorrect = 0;

//******Begin Timer*******
//timer variables
var intervalId;
var clockRunning = false; 
var time = 30;
//timer functions
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
    

//******/End Timer*******

var questions = [
    {   triviaQuestion: "What color is a blueberry?",
        answerOptions: ["blue", "green", "red"],
        correctAns: "blue"
         },

    {   triviaQuestion: "How many days in a week?",
        answerOptions: ["four", "seven", "five"],
        correctAns: "seven"
         },

    {   triviaQuestion: "Which way is up?",
        answerOptions: ["top", "left", "north"],
        correctAns: "seven"
         },

    {   triviaQuestion: "How many cards in a deck?",
         answerOptions: ["50", "52", "56"],
         correctAns: "52"
          },

     {   triviaQuestion: "What color is an apple?",
         answerOptions: ["purple", "green", "black"],
         correctAns: "green"
          },

     {   triviaQuestion: "What do you call a group of geese?",
         answerOptions: ["flock", "cluster", "gaggle"],
         correctAns: "seven"
          },

    {   triviaQuestion: "How many legs does a lizard have?",
          answerOptions: ["two", "four", "six"],
          correctAns: "four"
           },

    {   triviaQuestion: "How many items are in a dozen?",
          answerOptions: ["12", "14", "10"],
          correctAns: "12"
           }
      ];

    $("#start").on("click", function(){
            start();
            $("#start").remove();

            for (var i=0; i<questions.length; i++){
                $("#qWrapper").append('<h2>' + questions[i].triviaQuestion + '</h2>');
                
                for (var j=0; j<questions[i].answerOptions.length; j++) {
                    $("#qWrapper").append("<input type='radio' name='triviaQuestion-"+i+"'value='"+questions[i].answerOptions[j]+ "'>"+questions[i].answerOptions[j])
                        }
                 }   
            })
        
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
}

//doc-ready closing tag
    });

