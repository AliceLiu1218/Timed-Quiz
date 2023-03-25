var startbtn = document.querySelector("#startbtn")
var timer = document.querySelector("#timer")
var count = 5;
var startpage = document.querySelector(".startpage")
var questionpage = document.querySelector(".question")

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