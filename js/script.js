var header = document.querySelector('.header');
var color = document.querySelector('.color');
var colorArray = ['blue', 'yellow', 'green', 'lightblue', 'orange', 'purple', 'pink', 'red', 'white'];
for (let k = 0; k < colorArray.length; k++) {
    var colorclone = color.cloneNode(true);
    colorclone.style.background = colorArray[k];
    header.append(colorclone);
}

var colors = document.querySelectorAll('.color');
colors.forEach(color => {
    color.addEventListener('click', () => {
        square.style.borderColor = color.style.background;
    });
});

var mainBlock1 = document.querySelector('.main-block-1');
var square = document.querySelector('.square');

var ispressed = false;
var x1;
var y1;

mainBlock1.addEventListener('mousedown', (e) => {
    ispressed = true;
    x1 = e.clientX;
    y1 = e.clientY;
    square.style.top = "" + (y1) + "px";
    square.style.left = "" + (x1) + "px";
});

mainBlock1.addEventListener('mousemove', (e) => {
    if (ispressed == true) {
        var x2 = e.clientX;
        var y2 = e.clientY;
        square.style.display = "block";
        if(x2>=x1){
            square.style.width = "" + (x2 - x1) + "px";
        }
        else if(x2<x1){
            square.style.left = "" + ((x1) - (x1 - x2)) + "px";
            square.style.width = "" + (x1 - x2) + "px";
        }

        if(y2>=y1){square.style.height = "" + (y2 - y1) + "px";}
        else if(y2<y1){
            square.style.top = "" + ((y1) - (y1 - y2)) + "px";
            square.style.height = "" + (y1 - y2) + "px";
        }
    }
});

mainBlock1.addEventListener('mouseup', (e) => {
    var mainBlock1 = document.querySelector('.main-block-1');
    var squarecopy = square.cloneNode(true);
    mainBlock1.append(squarecopy);
    ispressed = false;
    square.style.display = "none";
    square.style.top = "0px";
    square.style.left = "0px";
    square.style.width = "0px";
    square.style.height = "0px";
});