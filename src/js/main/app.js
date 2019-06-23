var app = document.getElementById('app');
console.log(app);
var timerTemplate =
  "<button id='startTimer'>Start Timer</button><button id='pauseTimer'>Pause Timer</button><button ='resetTimer'>Reset Timer</button>";
saferInnerHTML(app, timerTemplate);
