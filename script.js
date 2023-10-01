let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
 
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
 
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
 
stopBtn.addEventListener('click', function () {
    timer = false;
});
 
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
        setTimeout(stopWatch, 10);
    }
}
