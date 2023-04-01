var startbtn = document.querySelector("#startbtn")
var timer = document.querySelector("#timer")
var questionpage = document.querySelector(".question")
var resultpage = document.querySelector(".resultpage")
var conclupage = document.querySelector(".conclusionpage")

var scorepop = document.querySelector("#score-update")
var historybtn = document.querySelector("#history")
var info = document.querySelector("#infoupdate")


var questioncount;
var score = 0;
var count = 30;

// 1. Show a question
// 2. Show the answers
// 3. Add Event listener to answers
// 4. Check if the answer selected is correct
// a. If correct, show correct
// b. If wrong, show incorrect and deduct time
// 5. Check if there's a next question
// a. If no next question, endQuiz()
// b. Else, move to the next question, and repeat step 1.

//questions objects
var questionBank = [{
    prompt: "Which of the following function of Array object sorts the elements of an array?",
    correctAnswer: "sort()",
    answers: ["toSource()", "sort()", "toString()", "unshift()"]
}, {
    prompt: "Which of the following keywords is used to define a variable in Javascript?",
    correctAnswer: "Both A and B",
    answers: ["var", "let", "Both A and B", "None of the above"]
},
{
    prompt: "How can a datatype be declared to be a constant type?",
    correctAnswer: "const",
    answers: ["const", "var", "let", "constant"]
}]

function showQuestion() {
    console.log("Showing questions")
    // select html element we want to change
    var questionEl = document.querySelector("#questiontxt")
    // what to change it to? -- current question in question bank, change it to the prompt key
    questionEl.textContent = questionBank[questioncount].prompt


    //show our answer choices
    // select html element to put our answer choices to
    var answersEl = document.querySelector("#answer-choices")
    answersEl.innerHTML = ""
    // for loop
    for (let i = 0; i < questionBank[questioncount].answers.length; i++) {
        var answerBtn = document.createElement("button")
        answerBtn.classList.add("btn");
        answerBtn.setAttribute("style", "margin:auto");
        answerBtn.innerHTML = questionBank[questioncount].answers[i]
        answerBtn.addEventListener("click", checkAnswer)
        answersEl.appendChild(answerBtn)
    }
    // create a button add their text content, and make them listen to checkAnswer()

}

function checkAnswer(event) {
    event.preventDefault()
    console.log("checking answer")
    console.log(event.target)
    console.log(event.target.innerHTML)
    // check the button that was clicked on === event.target
    // somehow check the text of the button
    var result = document.querySelector("#result")
    if (event.target.innerHTML === questionBank[questioncount].correctAnswer) {
        result.textContent = "Correct"
        score +=5
    } else {
        result.textContent = "Incorrect"
        count -= 5
    }

    if(questioncount == questionBank.length -1){
        endQuiz()
        return
    }
    questioncount ++
    showQuestion()
}

//set up timer
function timerSetup() {
    startQuiz();
    var myinterval = setInterval(function () {
        count--;

        timer.textContent = `Timer: ${count}`
        if (count == 0) {
            timer.textContent = `Timer: Time out`
            jumpRespage();
            clearInterval(myinterval)
        }
    }, 1000);

}

function startQuiz() {
    var startpage = document.querySelector(".startpage")
    startpage.setAttribute("style", "display:none");
    questionpage.setAttribute("style", "display:block");
    questioncount = 0
    showQuestion()
}

function endQuiz() {
    questionpage.setAttribute("style", "display:none");
    resultpage.setAttribute("style", "display:block");
    scorepop.textContent = `Your final score is: ${score}`

}
historybtn.addEventListener("click", jumpHis)
function jumpHis() {
    var initial = document.getElementById("fname");
    var ini_value = initial.value;
    resultpage.setAttribute("style", "display:none");
    conclupage.setAttribute("style", "display:block");
    info.textContent = `${ini_value} : ${score}`;

    var go_back = document.querySelector("#go_back")
    go_back.addEventListener("click", jumpstart)
    var clear = document.querySelector("#clear")
    clear.addEventListener("click", function () {
        info.textContent = '';
    })
}

function jumpstart() {
    var startpage = document.querySelector(".startpage")
    conclupage.setAttribute("style", "display:none");
    startpage.setAttribute("style", "display:block");
}

startbtn.addEventListener("click", timerSetup)
