console.log("https://opentdb.com/api.php?amount=1&type=multiple");
let url = "https://opentdb.com/api.php?amount=1&type=multiple";
var element = document.getElementById("question");
let first_opt = document.getElementById("lbl1");
let second_opt = document.getElementById("lbl2");
let third_opt = document.getElementById("lbl3");
let fourth_opt = document.getElementById("lbl4");
let topic = document.getElementById("topic");
console.log(topic);
let api_return;
let question;


async function getQuestion(){
    //api request GET
    const response = await fetch(getApiUrl());
    const data = await response.json();


    // Displaying question
    question = document.createTextNode(data.results[0].question);
    question = cleanQuestion(question);
    element.innerHTML= "";
    element.innerHTML += question.nodeValue;    //nodeValue is required to pass a string to the function


    //Displaying Anwers - Answers positions should be randomized
    let incorrect_answers = data.results[0].incorrect_answers;
    let correct_answer = data.results[0].correct_answer;
    console.log(correct_answer);
    console.log(typeof correct_answer);

    first_opt.innerHTML = "";
    first_opt.innerHTML += correct_answer;
    second_opt.innerHTML = "";
    second_opt.innerHTML += incorrect_answers[0];
    third_opt.innerHTML = "";
    third_opt.innerHTML +=  "  " + incorrect_answers[1];
    fourth_opt.innerHTML = "";
    fourth_opt.innerHTML +=  "  " + incorrect_answers[2];
    
}

function checkAnswer(){
    console.log(document.getElementsByName("option"));
    console.log(document.getElementById("option1"));
    if(document.getElementById("option1").checked){
        alert("Eh correcto!");
    } else{
        alert("No eh correcto");
    }
}
 

function getApiUrl(){
   if(topic.selectedIndex != 0){
       api_return = url + "&category=" + (topic.selectedIndex+8);
   } else{
       api_return = url;
   }
   console.log(api_return + "-" + topic.selectedIndex);
    return api_return;
}

function cleanQuestion(question){
    if(question.toString().search("&quote;")==-1){
        question.toString().replace("&quote;", "'");
    }
    return question;
}

function randomizeAnswers(){}