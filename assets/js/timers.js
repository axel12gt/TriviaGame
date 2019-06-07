$(document).ready()
var q = [], a1 = [], a2= [], a3 = [], a4 = [], correctAnswers = []
var iterator = 0

var gameObject = {

    questionsIterator:function(){
        // checks to see if we reached the end of the array
        //calls the object questions and iterates through trivia questions
        $(".questions").html("<b>"+ q[0] + "</b><br>")
        //calls the answers
        //TODO: randomize answer choices
        $(".answers1").html("<b>"+ a1[iterator] +"</b><br>")
        $(".answers2").html("<b>"+ a2[iterator] +"</b><br>")
        $(".answers3").html("<b>"+ a3[iterator] +"</b><br>")
        $(".answers4").html("<b>"+ a4[iterator] +"</b><br>")
        
        
    },

    jax: function(questions){
        // calls api
        $.ajax({
            url: "https://opentdb.com/api.php?amount=10",
            method: "GET"
        }).then(function(response){
            console.log(response)
            // creates a for loop for the 10 things I want to pull from the api
            for(var i =0; i<10;i++){
            // creates variables for the questions and all the answers and calls them from the api
             q.push(response.results[i].question)
             a1.push(response.results[i].correct_answer)
             correctAnswers.push(response.results[i].correct_answer)
             a2.push(response.results[i].incorrect_answers[0])
             a3.push(response.results[i].incorrect_answers[1])
             a4.push(response.results[i].incorrect_answers[2])
            }

             console.log(q[0],a1,a2,a3,a4)
             gameObject.questionsIterator()
        })
    },
    

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
//     iterator++
    
//     }
// })
