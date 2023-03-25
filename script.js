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


function setAns1() {
    
    localStorage.setItem("selected", ans1Index);
    compareAns = localStorage.getItem("selected");
    checkAns();
}
function setAns2() {
    
    localStorage.setItem("selected", ans2Index);
    compareAns = localStorage.getItem("selected");
    checkAns();
}
function setAns3() {
    
    localStorage.setItem("selected", ans3Index);
    compareAns = localStorage.getItem("selected");
    checkAns();
}
function setAns4() {
    
    localStorage.setItem("selected", ans4Index);
    compareAns = localStorage.getItem("selected");
    checkAns();
}
function checkAns() {
    if (compareAns == "1") {
        result.textContent = "Correct!";
        populateNextQuestion();
    }else {
        result.textContent = "Wrong!";
        populateNextQuestion();
    }
}
answer1.addEventListener("click",setAns1)
answer2.addEventListener("click",setAns2)
answer3.addEventListener("click",setAns3)
answer4.addEventListener("click",setAns4)
