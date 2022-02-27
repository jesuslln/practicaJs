console.log("https://opentdb.com/api.php?amount=1&type=multiple");
let url = "https://opentdb.com/api.php?amount=1&type=multiple";
var element = document.getElementById("question");
let first_opt = document.getElementById("lbl1");
let second_opt = document.getElementById("lbl2");
let third_opt = document.getElementById("lbl3");
let fourth_opt = document.getElementById("lbl4");


async function getQuestion(){
    //api request GET
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);


    // Displaying question
    let question = document.createTextNode(data.results[0].question);
    element.innerHTML= "";
    element.appendChild(question);

    //Displaying Anwers - Answers positions should be randomized
    let incorrect_answers = data.results[0].incorrect_answers;
    let correct_answer = data.results[0].correct_answer;

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
    console.log(document.getElementsById("option1"));
    if(document.getElementsById("option").checked){
        alert("Eh correcto!");
    } else{
        alert("No eh correcto");
    }
}
 

