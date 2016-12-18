
//1. Создаем элемент таймер
var body = document.querySelector('body');

var timer = document.createElement('img');
timer.classList.add('initial_timer');
timer.src = 'img/timer.png';

var timer2 = document.createElement('img');
timer2.classList.add('prepare_timer');
timer2.src = 'img/timer_ready.png';

var insertTimer = document.querySelector('a');
insertTimer.appendChild(timer);

var start = document.createElement('input');
start.classList.add('start');
this.type = 'button';
var reset = document.createElement('input');
reset.classList.add('reset');
reset.type = 'button';
var pause = document.createElement('input');
pause.classList.add('pause');
this.type = 'button';

var element = document.querySelector('a');
var element2 = document.querySelector('.button1');
var element3 = document.querySelector('.button3');
var element4 = document.querySelector('.button2');

// 2. замена начального экрана на активный при наведении
function prepare(){
   element.replaceChild(timer2, timer);
   var insertStart = document.querySelector('.button1');
   insertStart.appendChild(start);
   var insertReset = document.querySelector('.button2');
   insertReset.appendChild(reset);
   var insertCounter = document.querySelector('a');
   /*
   insertCounter.appendChild(counter);
   body.style.backgroundColor = "#d4f9ed";
   */
};
element.addEventListener('click', prepare);


function pauseButton(event){
element2.removeChild(start);
var insertPause = document.querySelector('.button3');
    insertPause.appendChild(pause);
body.style.backgroundColor = "#f9d4b1";
     }
element2.addEventListener('click', pauseButton);

function startButton(event){
element3.removeChild(pause);
var insertStart = document.querySelector('.button1');
insertStart.appendChild(start);
body.style.backgroundColor = "#d4f9ed";
     }
element3.addEventListener('click', startButton);

// 3. Секундомер
var count = 0;
var go = false;
var timerFunc;

function startTimer() {
 	if (go == false) {
			timerFunc = setInterval ( function () {
			count++;
        var msec=count%100;
          if (msec<10) {
          msec = "0" + msec;
          }
          if ( (msec=>10)&&(msec<100)) {
          msec = "" + msec;
          }
        var sec = Math.floor(count/60)%60;
          if (sec<10) {
          sec = "0" + sec;
          }
        var min = Math.floor(count/3600)%60;
          if (min<10) {
          min = "0" + min;
          }
          var hrs = Math.floor(count/86400)%24;
          if (hrs<10) {
          hrs = "0" + hrs;
          }
	  indicator.innerHTML = hrs + ':' + min + ':' + sec + ':' + msec;
  }, 12);
		};
	  go = true;
};
element2.addEventListener("click", startTimer);

function pauseTimer() {
	clearInterval(timerFunc);
	go = false;
};
element3.addEventListener("click", pauseTimer);

function resetTimer() {
	clearInterval(timerFunc);
	go = false;
	indicator.innerHTML="00:00:00:00";
};
element4.addEventListener("click", resetTimer);
