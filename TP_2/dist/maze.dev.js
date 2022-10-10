"use strict";

var loser = false;
var start = document.getElementById('start');
var end = document.getElementById('end');
var status = document.getElementById('status');
var started = true;

window.onload = function () {
  start.onclick = startClick;
  end.onclick = overEnd;
  var boundaries = document.getElementsByClassName('boundary');

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].onmouseover = overBoundary;
  }
};

function overBoundary() {
  loser = true;
  status.textContent = "You lose!";
  var boundaries = document.getElementsByClassName('boundary');

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.add("youlose");
  }
}

function startClick() {
  loser = false;
  alert('hello');
  status.textContent = "Find the end!";
  var boundaries = document.getElementsByClassName('boundary');

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.remove("youlose");
  }
}

function overEnd() {
  if (!loser) {
    status.textContent = "You win! :]";
    console.log('+++');
  }
}