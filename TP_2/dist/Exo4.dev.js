"use strict";

var loser = false;
var start = document.getElementById('start');
var end = document.getElementById('end');

window.onload = function () {
  start.onclick = startgame;
  end.onclick = overEnd;
  var boundaries = document.querySelectorAll('div.maze, div.boundary');

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].onmouseover = over;
  }

  console.log(boundaries);
};

function startgame() {
  loser = false;
  console.log('Started');
  var boundaries = document.querySelectorAll('div.maze, div.boundary');

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.remove("youlose");
  }
}

function over() {
  loser = true;
  var boundaries = document.querySelectorAll('div.maze, div.boundary');

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.add("youlose");
  }

  console.log('Lost.');
}

function overEnd() {
  if (!loser) {
    alert("You win! :]");
  }
}