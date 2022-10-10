

var boundaries = document.querySelectorAll('div.maze, div.boundary');

for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].onmouseover = over;
}
console.log(boundaries);

function over() {
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
        console.log('works.');
}