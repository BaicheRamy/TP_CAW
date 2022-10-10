// First boundary has the ID "boundary1", selecting it will allow us to differentiate it from other divs
var boundary1 = document.getElementById('boundary1');

boundary1.onmouseover = over;

function over() {
        // youlose is a class that turns the color into red.
        // it can be done using boundary1.setAttribute("style", "color:red"); if it was the only div holding the "boundary" class.
        boundary1.classList.add("youlose");
        
        console.log('works.');
}