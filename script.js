//lets start by getting out ID's to set start, stop and reset buttons.
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

//start by initializing 00 to the time units.

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

//the click startbtn triggers the function and sets timer to True

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

//the click stoptbtn triggers the function and sets timer to False and pauses the timer

stopBtn.addEventListener('click', function () {
    timer = false;
});

//the click resetbtn triggers the function and sets the timing units to 00 again and updates the values
 
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

//the call of function stopwatch() above runs recursively to update the units accordingly
//If count reaches 100, it resets to 0, and second is incremented.
//If second reaches 60, it resets to 0, and minute is incremented.
//If minute reaches 60, it resets to 0, and hour is incremented.

function stopWatch() {
    if (timer) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrStr = hour;
        let minStr = minute;
        let secStr = second;
        let countStr = count;
 
        if (hour < 10) {
            hrStr = "0" + hrStr;
        }
 
        if (minute < 10) {
            minStr = "0" + minStr;
        }
 
        if (second < 10) {
            secStr = "0" + secStr;
        }
 
        if (count < 10) {
            countStr = "0" + countStr;
        }
 
        document.getElementById('hr').innerHTML = hrStr;
        document.getElementById('min').innerHTML = minStr;
        document.getElementById('sec').innerHTML = secStr;
        document.getElementById('count').innerHTML = countStr;
     //the setTimeout function is used to call the stopWatch function again 
     //after a 10ms delay if timer is still true, creating a continuous loop.
        setTimeout(stopWatch, 10);
    }
}
