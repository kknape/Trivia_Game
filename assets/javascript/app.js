//The Trivia Game - My javascript file //
$(document).ready(function(){

//Assign the correct answer to each answer choice
//Timer countsdown from 30 seconds to zero
//when timer is at zero, stop the timer and evaluate if answers are correct
//when all questions have been answered evaluate if answers are correct or incorrect 
//evaluate & display how many incorrect answers were input

$("#start").on("click", function(){
    game.start();
})

$(document).on('click', '#end', function(){
    game.done();
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
       
    var game = {
        correct: 0,
        incorrect: 0,
        unasnwered: 0,
        counter: 240,
        countdown: function(){
            game.counter--;
            $("#counter").html(game.counter);
            if (game.counter <=0){
                console.log("Time is up!");
                game.done();
                }
            },
        start: function() {         
            timer = setInterval(game.countdown,1000);
                $("#qWrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');

                $("#start").remove(); //removes Start button after clicked
           //     $(document).on("click", "#end", function() {
           //         count();
                    for (var i=0; i<questions.length; i++){
                        $("#qWrapper").append('<div class="triviaQuestion">' + questions[i].triviaQuestion + '</div>')
                
                     for (var j=0; j<questions[i].answerOptions.length; j++) {  
                        $("#qWrapper").append("<div class='form-check'></<div><input class='form-check-input answerInput' type='radio' name='triviaQuestion-"+i+"' value='"+questions[i].answerOptions[j]+"'>"+
                        "<label class='form-check-label answerItems' for='triviaQuestion-"+i+"'> "+ questions[i].answerOptions[j] +" </label>")

                       }
                     }
               $("#qWrapper").append('<br><button id="end">Done</button>')     
            },
        done: function(){
            $.each($("input[name='triviaQuestion-0']:checked"),function(){
                if($(this).val()==questions[0].correcAns){
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
             clearInterval(timer);
             $("#qWrapper h2").remove();
             $("#qWrapper").html("<h2>All done!</h2>");
             $("#qWrapper").append("<h3>Correct Answers:" +this.correct+"</h3>");
             $("#qWrapper").append("<h3>Inorrect Answers:" +this.incorrect+"</h3>");
             $("#qWrapper").append("<h3>Unanswered Questions:" +(questions.length-(this.incorrect+this.correct))+"</h3>");
         }
    } //end of game object
//doc-ready closing tag
});
