/*!
 * pomodoro-timer v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

var app = document.getElementById('app');
var timerTemplate =
  "<div id='timer'><span id='minutes'>25</span>:<span id='seconds'>00</span></div><button id='startTimer'>Start</button><button id='pauseTimer'>Pause</button><button id='resetTimer'>Reset</button>";
saferInnerHTML(app, timerTemplate);

var pomo = (function() {
  var api = {};

  var pomoSeconds = 60 * 25;
  var count = pomoSeconds;
  var t;

  function cddisplay() {
    // displays time in span
    timer = count;
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').innerHTML = minutes + ':' + seconds;
  }

  api.pause = function() {
    // pauses countdown
    clearTimeout(t);
  };

  api.start = function() {
    // starts counting down
    if (count == 0) {
      console.log('Time is up');
    } else {
      count--;
      t = window.setTimeout('pomo.start()', 1000);
    }
    cddisplay();
  };

  api.reset = function() {
    // resets countdown
    api.pause();
    count = pomoSeconds;
    cddisplay();
  };

  // Spit out the API
  return api;
})();

document.addEventListener('click', function(e) {
  if (e.target.id === 'startTimer') {
    //startTimer(60 * 25, document.getElementById('timer'));
    pomo.start();
  }
  if (e.target.id === 'resetTimer') {
    // Find a way to clear the interval and reset the timer...
    pomo.reset();
  }
  if (e.target.id === 'pauseTimer') {
    pomo.pause();
  }
});
