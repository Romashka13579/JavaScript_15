var mainBlock1 = document.querySelector('.main-block-1');
var square = document.querySelector('.square');

var ispressed = false;

mainBlock1.addEventListener('mousedown', (e) => {
    ispressed = true;
    var squarecopy = square.cloneNode(true);
    mainBlock1.append(squarecopy);
    squarecopy.style.display = "block";
    var x1 = e.clientX;
    var y1 = e.clientY;
    console.log(x1, y1);
    squarecopy.style.top = "" + y1 + "px";
    squarecopy.style.left = "" + x1 + "px";
    mainBlock1.addEventListener('mousemove', (e) => {
        if (ispressed == true) {
            var x2 = e.clientX;
            var y2 = e.clientY;
            squarecopy.style.width = "" + x2 - x1 + "px";
            squarecopy.style.height = "" + y2 - y1 + "px";
            console.log(x2, y2);
        }
    });
});

mainBlock1.addEventListener('mouseup', (e) => {
    ispressed = false;
    console.log(false);
});