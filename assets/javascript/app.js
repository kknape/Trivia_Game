//The Trivia Game - My javascript file //
$(document).ready(function(){

//User clicks "start" to begin the game. Timer starts, question sets are displayed.
$(document).on('click', '#start', function(){
    game.start();
})

$(document).on('click', '#end', function(){
    game.done();
})

$(document).on('click', '#replay', function(){
    game.reset();
})

//questions array
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
    
    var timer= undefined; //made global to facilitate the replay & reset the timer
      
    //game object includes game functions
    var game = {
        correct: 0,
        incorrect: 0,
        unasnwered: 0,
        counter: 30,
        countdown: function(){
            game.counter--;
            $("#counter").html(game.counter);
            if (game.counter < 0){
                alert("Time is up!");
                clearInterval(timer);
                game.done();
                }
            },
        start: function() {         
            timer = setInterval(game.countdown,1000);
                $("#qWrapper").prepend('<div id="timer">Time Remaining: <span id="counter">30</span> seconds</div>');
                $("#myInstructions").remove(); //remove instruction text
                $("#start").remove(); //removes Start button after clicked
                    for (var i=0; i<questions.length; i++){
                        $("#qWrapper").append('<div class="triviaQuestion">' + questions[i].triviaQuestion + '</div>')
                
                     for (var j=0; j<questions[i].answerOptions.length; j++) {  
                        $("#qWrapper").append("<div class='form-check'></<div><input class='form-check-input answerInput' type='radio' name='triviaQuestion-"+i+"' value='"+questions[i].answerOptions[j]+"'>"+
                        "<label class='form-check-label answerItems' for='triviaQuestion-"+i+"'> "+ questions[i].answerOptions[j] +" </label>")
                       }
                     }
                    
               $("#qWrapper").append('<div id="bWrapper"><br><button id="end" class="button2">Done</button></div>')    //adds Done button if user finishes answering before timer is up 
            },
        done: function(){
            $.each($("input[name='triviaQuestion-0']:checked"),function(){
                if($(this).val()==questions[0].correctAns){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='triviaQuestion-1']:checked"),function(){
                if($(this).val()==questions[1].correcAns){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='triviaQuestion-2']:checked"),function(){
                if($(this).val()==questions[2].correcAns){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='triviaQuestion-3']:checked"),function(){
                if($(this).val()==questions[3].correcAns){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='triviaQuestion-4']:checked"),function(){
                if($(this).val()==questions[4].correcAns){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='triviaQuestion-5']:checked"),function(){
                if($(this).val()==questions[5].correcAns){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='triviaQuestion-6']:checked"),function(){
                if($(this).val()==questions[6].correcAns){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='triviaQuestion-7']:checked"),function(){
                if($(this).val()==questions[7].correcAns){
                    game.correct++;
                }
                else {
                    game.incorrect++;
                }
            });
            this.result();
            },
        result: function(){
             $("#qWrapper h2").remove();
             $("#qWrapper").html('<div id="allDone">All done!</div>');
             $("#qWrapper").append('<div id="correctA">Correct Answers:  ' +this.correct+'</div>');
             $("#qWrapper").append('<div id="incorrectA">Incorrect Answers:  ' +this.incorrect+'</div>');
             $("#qWrapper").append('<div id="unanswered">Unanswered Questions:  ' +(questions.length-(this.incorrect+this.correct))+'</div>');
             $("#qWrapper").append('<div id="bWrapper"><br><button id="replay" class="button2">Replay</button></div>')
             game.counter=30;
             timer=undefined;
            },
        reset: function(){
            $("#insText").append('<p class="lead" id="myInstructions">You have 30 seconds to see how many questions you can answer correctly.</p>'); 
            $("#qWrapper").empty();
            $("#qWrapper").append('<div id="bWrapper"><button id="start" class="button2">Start</button></div>');
            }

        }
     //end of game object
//doc-ready closing tag
});
