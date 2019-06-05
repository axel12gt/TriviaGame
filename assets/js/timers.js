var iterator;
var questions = {
    q: ["In the 1953 biopic about the famous Houdini who played the starring role?",
    "Jane Seymour appeared in which Bond film?",
    "O'Hare International airport is in which city?",
    "Rap originated In what country?",
    "After the bombing of Pearl Harbor, the U.S. declared war on which country?",
    "What was the movie 'Twister' about?",
    "Author Samuel Langhorne Clemens wrote under what name?", 
    "What is the name of the prehistoric town in which The Flintstones live?"],
    a: ["Tony Curtis","Live and Let Die","Chicago","USA","Japan","Tornados",
        "Mark Twain", "Bedrock"]
};

function questionsIterator (){
    $(".questions").html("<b>"+ questions.q[iterator] +"</b>")
}
$(".questions").html("<b>hello</b>");