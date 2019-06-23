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
  "<button id='startTimer'>Start Timer</button><button id='pauseTimer'>Pause Timer</button><button ='resetTimer'>Reset Timer</button>";
saferInnerHTML(app, timerTemplate);

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}