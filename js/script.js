var mainBlock1 = document.querySelector('.main-block-1');
var square = document.querySelector('.square');

var ispressed = false;

mainBlock1.addEventListener('mousedown', (e) => {
    ispressed = true;
    var x1 = e.clientX;
    var y1 = e.clientY;
    square.style.top = "" + (y1) + "px";
    square.style.left = "" + (x1) + "px";
    mainBlock1.addEventListener('mousemove', (e) => {
        if (ispressed == true) {
            var x2 = e.clientX;
            var y2 = e.clientY;
            square.style.display = "block";
            square.style.width = "" + (x2 - x1) + "px";
            square.style.height = "" + (y2 - y1) + "px";
        }
    });
    square.className = "square1";
});

mainBlock1.addEventListener('mouseup', (e) => {
    var mainBlock1 = document.querySelector('.main-block-1');
    var squarecopy = square.cloneNode(true);
    mainBlock1.append(squarecopy);
    ispressed = false;
    square.style.display = "none";
});