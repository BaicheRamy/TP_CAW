var loser = false;
var start = document.getElementById('start');
var end = document.getElementById('end');

window.onload = function() {
    start.onclick = startgame;
    end.onclick = overEnd;
    var boundaries = document.querySelectorAll('div.maze, div.boundary');
    for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].onmouseover = over;
}
console.log(boundaries);

}

function startgame() {
    loser = false; 
    console.log('Started');
    var boundaries = document.querySelectorAll('div.maze, div.boundary');
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
    document.getElementById('status').innerHTML = "Move your mouse over the 'S' to begin.";
}

function over() {
    loser = true;
    var boundaries = document.querySelectorAll('div.maze, div.boundary');
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
    document.getElementById('status').innerHTML = "You lost!";
    console.log('Lost.');
}

function overEnd() {
    if(!loser) {
        document.getElementById('status').innerHTML = "You won!";
    } 
}