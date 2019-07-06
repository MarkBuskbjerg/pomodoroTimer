/*!
 * pomodoro-timer v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

var app = document.getElementById('app');
console.log(app);
var timerTemplate =
  "<div id='pomodoroTimer'>25:00</div><button id='startTimer'>Start Timer</button><button id='pauseTimer'>Pause Timer</button><button id='resetTimer'>Reset Timer</button>";
saferInnerHTML(app, timerTemplate);

var pomodoroTimer = (function() {
  var api = {};

  var pomoSeconds = 60 * 25;
  var count = pomoSeconds;
  var t;

  var display = function() {
    // displays time in span
    timer = count;
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('pomodoroTimer').innerHTML = minutes + ':' + seconds;
  };

  /* Public APIs */

  api.pause = function() {
    // pauses countdown
    clearTimeout(t);
  };

  api.start = function() {
    // this is kind of a hacky way to prevent setting timeout again
    clearTimeout(t);
    // starts counting down
    if (count == 0) {
      console.log('Time is up');
    } else {
      count--;
      // the setTimout fires api.start after the timeOut creating the actual countdown
      // dunno why but apparently the function is globally scoped here?
      t = window.setTimeout('pomodoroTimer.start()', 1000);
    }
    // display the new count value as minutes and seconds
    display();
  };

  api.reset = function() {
    // resets countdown
    api.pause();
    count = pomoSeconds;
    display();
  };

  // Spit out the APIs
  return api;
})();

document.addEventListener('click', (function(e) {
  if (e.target.id === 'startTimer') {
    if (e.target.classList.contains('disabled')) {
      return;
    }
    pomodoroTimer.start();
    e.target.classList.add('disabled');
  }
  if (e.target.id === 'resetTimer') {
    pomodoroTimer.reset();
    document.getElementById('startTimer').classList.remove('disabled');
  }
  if (e.target.id === 'pauseTimer') {
    pomodoroTimer.pause();
    document.getElementById('startTimer').classList.remove('disabled');
  }
}));
