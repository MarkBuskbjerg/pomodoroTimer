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
    timer = count;
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // displays time in span
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
    // first we'll pause the counting
    api.pause();
    // then reset the count to original pomodoro value
    count = pomoSeconds;
    // and display the new count value as minutes and seconds
    display();
  };

  // Spit out the APIs
  return api;
})();

document.addEventListener('click', function(e) {
  if (e.target.id === 'startTimer') {
    // this check makes sure we can't fire the button with Enter key after disabling it
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
});
