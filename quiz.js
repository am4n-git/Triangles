const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const rightAnswers = ["90", "right"]

function calculateScore(){
    let score = 0;
    let index= 0;
    const formResults = new FormData(quizForm);
    for(let entry of formResults.values()){
        if(entry === rightAnswers[index]){
            score+=1;
        }
        index+=1
    }
    output.innerText = "Your Score is " +score
}

submit.addEventListener("click",calculateScore);