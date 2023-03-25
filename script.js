var startbtn = document.querySelector("#startbtn")
var timer = document.querySelector("#timer")
var count = 5;
var startpage = document.querySelector(".startpage")
var questionpage = document.querySelector(".question")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var result = document.querySelector("#result")
var question = document.querySelector("#questiontxt")

var ans1Index = answer1.dataset.index;
var ans2Index = answer2.dataset.index;
var ans3Index = answer3.dataset.index;
var ans4Index = answer4.dataset.index;

var compareAns = '';
//set up timer
function timerSetup() {
    jumppage();
    var myinterval = setInterval(function() {
        count--;
        timer.textContent = `Timer: ${count}`
        if (count == 0) {
            timer.textContent = `Timer: Time out`
            clearInterval(myinterval)
        }
    },1000);
    
}

function jumppage() {
    startpage.setAttribute("style","display:none");
    questionpage.setAttribute("style","display:block");
}
startbtn.addEventListener("click", timerSetup)

function populateNextQuestion2() {
    
    question.textContent = "question22222";
    answer1.textContent = "ANSWER222222222";
    answer2.textContent = "ANSWER222222222";
    answer3.textContent = "ANSWER222222222";
    answer4.textContent = "ANSWER2222222222";

}
function populateNextQuestion3() {
    
    question.textContent = "question333333";
    answer1.textContent = "ANSWER33333333333";
    answer2.textContent = "ANSWER3333333333";
    answer3.textContent = "ANSWER33333333333";
    answer4.textContent = "ANSWER333333333333";
}
function populateNextQuestion4() {
    
    question.textContent = "question4444444444";
    answer1.textContent = "ANSWER44444444444";
    answer2.textContent = "ANSWER4444444444";
    answer3.textContent = "ANSWER444444444444";
    answer4.textContent = "ANSWER4444444444444";
}

function setAns1st() {
    
    localStorage.setItem("selected", ans1Index);
    compareAns = localStorage.getItem("selected");
    checkAns();
}
function setAns2nd() {
    
    localStorage.setItem("selected", ans2Index);
    compareAns = localStorage.getItem("selected");
    checkAns();
}
function setAns3rd() {
    
    localStorage.setItem("selected", ans3Index);
    compareAns = localStorage.getItem("selected");
    checkAns();
}
function setAns4th() {
    
    localStorage.setItem("selected", ans4Index);
    compareAns = localStorage.getItem("selected");
    checkAns();
}
function checkAns() {
    if (compareAns == "1") {
        result.textContent = "Correct!";
        populateNextQuestion2();
    }else {
        result.textContent = "Wrong!";
        populateNextQuestion2();
    }
}
answer1.addEventListener("click",setAns1st)
answer2.addEventListener("click",setAns2nd)
answer3.addEventListener("click",setAns3rd)
answer4.addEventListener("click",setAns4th)

