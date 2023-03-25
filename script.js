var startbtn = document.querySelector("#startbtn")
var timer = document.querySelector("#timer")
var count = 5;


//set up timer
function timerSetup() {
    var myinterval = setInterval(function() {
        count--;
        timer.textContent = `Timer: ${count}`
        if (count == 0) {
            timer.textContent = `Timer: Time out`
            clearInterval(myinterval)
        }
    },1000);
    
}



startbtn.addEventListener("click", timerSetup)