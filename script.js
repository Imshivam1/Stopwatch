let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let timer = null;
let startTime = 0;
let isRunning = false;

startBtn.addEventListener('click', function () {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - (hour * 3600000 + minute * 60000 + second * 1000 + count * 10);
        requestAnimationFrame(updateTime);
    }
});

stopBtn.addEventListener('click', function () {
    isRunning = false;
    cancelAnimationFrame(timer);
});

resetBtn.addEventListener('click', function () {
    isRunning = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function updateTime() {
    if (isRunning) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        hour = Math.floor(elapsedTime / 3600000);
        minute = Math.floor((elapsedTime % 3600000) / 60000);
        second = Math.floor((elapsedTime % 60000) / 1000);
        count = Math.floor((elapsedTime % 1000) / 10);

        document.getElementById('hr').innerHTML = hour.toString().padStart(2, '0');
        document.getElementById('min').innerHTML = minute.toString().padStart(2, '0');
        document.getElementById('sec').innerHTML = second.toString().padStart(2, '0');
        document.getElementById('count').innerHTML = count.toString().padStart(2, '0');

        timer = requestAnimationFrame(updateTime);
    }
}
