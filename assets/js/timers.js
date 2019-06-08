$(document).ready()
//creates empty arrays for questions and answers to push to
var q = [], a1 = [], a2= [], a3 = [], a4 = []
// for question and answer array traversal
var iterator = 0
// interval variable for timer function
var intervalID
//sets timer to 30 secons
var number =30
//boolean for timer control initialized to false
var running =  false, check = false
//correct and incorrect answer count
var correct = 0, incorrect = 0, noAnswer = 0


var gameObject = {
    //all the function calls for the answers array
    calls:function(){
        gameObject.stop()
        gameObject.timerReset()


        iterator++
        gameObject.questionsIterator()
        console.log("count me!")
        gameObject.timer()
            },

    questionsIterator:function(){
        // checks to see if we reached the end of the array
        if(iterator < 10){
        //calls the object questions and iterates through trivia questions

        $(".questions").html("<b>"+ q[iterator] +"</b>")
        //calls the answers
        //TODO: randomize answer choices
        $(".answers1").on("click",function(){
            gameObject.calls()
            correct
            
            
        })
        $(".answers2").on("click",function(){
            gameObject.calls()
            incorrect
            
         })
         $(".answers3").on("click",function(){
            gameObject.calls()
            incorrect
            
         })
         $(".answers4").on("click",function(){
            gameObject.calls()
            incorrect
            
         })
        $(".answers1").html("<b>"+ a1[iterator] +"</b>")
        $(".answers1").html("<b>"+ a1[iterator] +"</b>")
        $(".answers2").html("<b>"+ a2[iterator] +"</b>")
        $(".answers3").html("<b>"+ a3[iterator] +"</b>")
        $(".answers4").html("<b>"+ a4[iterator] +"</b>")
        }
        
        
    },
//calls the apis function
    jax: function(questions){
        // calls api
        $.ajax({
            //url for the api
            url: "https://opentdb.com/api.php?amount=10",
            //ajax method for recieving information for the api
            method: "GET"
        }).then(function(response){
            // creates a for loop for the 10 things I want to pull from the api
            for(var i =0; i<10;i++){
            // creates variables for the questions and all the answers and calls them from the api
             q.push(response.results[i].question)
             a1.push(response.results[i].correct_answer)
             a2.push(response.results[i].incorrect_answers[0])
             a3.push(response.results[i].incorrect_answers[1])
             a4.push(response.results[i].incorrect_answers[2])
            }

             console.log(q,a1,a2,a3,a4)
             gameObject.questionsIterator()
        })
    },
    //sets up timer function
    /* 
    =================================
    NEED THIS TO START THE GAME!!!!!!
    MAIN METHODS CALLER!!!!!!!!!!!!!!
    =================================
    */
    timer:function(){
        //checks if timeris running if not  sets interval for timer and sets running to true
        if(!running){
            // sets timer for 1 second intervals activating function decremeant each time
            intervalID = setInterval(this.decrement,1000)
            //sets running to true so we don't accidently mess with intervals
            running = true
        }
    },
    //Timer functions partner for decreasing the timer
    decrement:function(){
        // decreases variable by 1
        number--
        // displays the seconds to the screen 
        $(".seconds").html("<h2>"+ number + "<h2>")
        //checks if number = 0 and gives commands after that
        if(number == 0){
            console.log("Is this counting")
            // calls stop function to stop the tiemr
            gameObject.stop()
            //iterator for questions and answers increases by 1
            //chooses next question
            
            //increases noAnswer by 1
            noAnswer++
            //calls question iterator to display next question
            gameObject.timerReset()
            gameObject.questionsIterator()
            gameObject.timer()
        }
    },
    //Timer reset
    timerReset:function(){
        //resets timer to 30 seconds
        number = 30
    },
    //Timer stop
    stop:function(){
        // stops timer
        clearInterval(intervalID)
        //sets running to false
        running = false
    }

}
gameObject.jax()









// function questionsIterator (){

//     // checks to see if we reached the end of the array
    
//     //calls the object questions and iterates through trivia questions
//     $(".questions").html("<b>"+ questions.q[iterator] +"</b><br>")
//     //calls the answers
//     $(".answers1").html("<b>"+ questions.a1[iterator] +"</b><br>")
//     $(".answers2").html("<b>"+ questions.a2[iterator] +"</b><br>")
//     $(".answers3").html("<b>"+ questions.a3[iterator] +"</b><br>")
//     $(".answers4").html("<b>"+ questions.a4[iterator] +"</b><br>")
    
// }
// //$(".questions").html("<b>"+ questions.q[0] +"</b><br>")

// //temp function
// $("body").keyup(function(){
//     console.log(iterator)
//     questionsIterator()
    
//     if(iterator < (questions.q.length-1) ){
//     
    
//     }
// })