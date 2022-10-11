var loser = false;
var start = document.getElementById('start');
var end = document.getElementById('end');
//var maze = document.querySelector('#maze');
var mouseon = false;
// document.querySelector('#maze').onmouseleave=outofdiv();

window.onload = function() {
    start.onclick = startgame;
    end.onclick = overEnd;
    document.querySelector("#maze").parentNode.addEventListener("mouseleave", (e) => {outofdiv(); console.log('works');});
    var boundaries = document.querySelectorAll('div.boundary');
    for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].onmouseover = over;
    }
    console.log(maze);
}


function startgame() {
    loser = false;
    mouseon = true;
    console.log('Started');
    var boundaries = document.querySelectorAll('div.boundary');
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
    document.getElementById('status').innerHTML = "Game started!";
    
}

function over() {
    loser = true;
    var boundaries = document.querySelectorAll('div.boundary');
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

function outofdiv () {
    over();
    console.log ('outtt');
}