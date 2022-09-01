const theTimer = document.querySelector('#timer');
const startBtn = document.getElementById('StartBtn');
const stopBtn = document.getElementById('StopBtn');
const resetBtn = document.getElementById('ResetBtn');


var timer = [0,0,0,0];
var interval;
var timerRunnig = true;

function leadingZero(time) {

    if (time <= 9) {
        time = "0" + time;
    }

    return time;
}


function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

    theTimer.innerHTML = currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));



}
//start timer


function StartTime() {

   if (timerRunnig ) {
    
    interval = setInterval(runTimer, 10);

    timerRunnig = false;
    
   }
    
}

startBtn.addEventListener('click' , StartTime);



//stop timer

function StopTimer() {

    clearInterval(interval);
    timerRunnig = true;

    
}

stopBtn.addEventListener('click' , StopTimer);



//reset timer


function ResetTimer() {

    timer = [0,0,0,0];
    theTimer.innerHTML =' 00:00:00'
    timerRunnig = true;
    clearInterval(interval);


    
}

resetBtn.addEventListener('click', ResetTimer);