var startbtn = document.querySelector("#startbtn")
var timer = document.querySelector("#timer")
var count = 30;
var startpage = document.querySelector(".startpage")
var questionpage = document.querySelector(".question")
var resultpage = document.querySelector(".resultpage")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var result = document.querySelector("#result")
var question = document.querySelector("#questiontxt")
var scorepop = document.querySelector("#score-update")

var ans1Index = answer1.dataset.index;
var ans2Index = answer2.dataset.index;
var ans3Index = answer3.dataset.index;
var ans4Index = answer4.dataset.index;

var compareAns = '';
var compareArr = [];
var questioncount = 0;
var score = 0;



//set up timer
function timerSetup() {
    jumpQespage();
    var myinterval = setInterval(function() {
        count--;

        timer.textContent = `Timer: ${count}`
        if (count == 0) {
            timer.textContent = `Timer: Time out`
            jumpRespage();
            clearInterval(myinterval)
        }
    },1000);
    
}

function jumpQespage() {
    startpage.setAttribute("style","display:none");
    questionpage.setAttribute("style","display:block");
}

function jumpRespage() {
    questionpage.setAttribute("style","display:none");
    resultpage.setAttribute("style","display:block");
    scorepop.textContent = `Your final score is: ${score}`
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
function checkAns() {
    if (questioncount == 1) {
        if (compareArr[0] == 1) {
            result.textContent = "Correct!";
            score +=5;
            populateNextQuestion2();
        }else {
            result.textContent = "Wrong!";
            count = count-5;
            populateNextQuestion2();
        }
    }
    else if (questioncount == 2) {
        if (compareArr[1] == 2) {
            result.textContent = "Correct!";
            score +=5;
            populateNextQuestion3();
        }else {
            result.textContent = "Wrong!";
            count = count-5;
            populateNextQuestion3();
        }
    }
    else if (questioncount == 3) {
        if (compareArr[2] == 3) {
            result.textContent = "Correct!";
            score +=5;
            populateNextQuestion4();
        }else {
            result.textContent = "Wrong!";
            count = count-5;
            populateNextQuestion4();
        }
    } 
    else {
        if (compareArr[3] == 4) {
            result.textContent = "Correct!";
            score +=5
            jumpRespage();
        }else {
            result.textContent = "Wrong!";
            count = count-5;
            jumpRespage();
        }
    }
    
}


function setAns1st() {
    
    localStorage.setItem("selected", ans1Index);
    compareAns = localStorage.getItem("selected");
    compareArr.push(compareAns);
    questioncount++;
    checkAns()
}
function setAns2nd() {
    
    localStorage.setItem("selected", ans2Index);
    compareAns = localStorage.getItem("selected");
    compareArr.push(compareAns);
    questioncount++;
    checkAns()
}
function setAns3rd() {
    
    localStorage.setItem("selected", ans3Index);
    compareAns = localStorage.getItem("selected");
    compareArr.push(compareAns);
    questioncount++;
    checkAns()
}
function setAns4th() {
    
    localStorage.setItem("selected", ans4Index);
    compareAns = localStorage.getItem("selected");
    compareArr.push(compareAns);
    questioncount++;
    checkAns()
}

answer1.addEventListener("click",setAns1st)
answer2.addEventListener("click",setAns2nd)
answer3.addEventListener("click",setAns3rd)
answer4.addEventListener("click",setAns4th)

