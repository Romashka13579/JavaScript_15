var headerColors = document.querySelector('.header-colors');
var header = document.querySelector('.header');
var color = document.querySelector('.color');
var colorArray = ['blue', 'yellow', 'green', 'lightblue', 'orange', 'purple', 'pink', 'red', 'white'];
for (let k = 0; k < colorArray.length; k++) {
    var colorclone = color.cloneNode(true);
    colorclone.style.background = colorArray[k];
    headerColors.append(colorclone);
}

var line = document.querySelector('.line');
var colors = document.querySelectorAll('.color');
colors.forEach(color => {
    color.addEventListener('click', () => {
        if (square.className == "line") {
            square.style.background = color.style.background;
        }
        else{
            square.style.borderColor = color.style.background;
        }
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
            if(square.className == "line"){
                square.style.clipPath = "polygon(0 1px, 1px 0, 100% calc(100% - 1px), calc(100% - 1px) 100%)";
            }
            square.style.width = "" + (x2 - x1) + "px";
        }
        else if(x2<x1){
            if(square.className == "line"){
                square.style.clipPath = "polygon(calc(100% - 1px) 0, 100% 1px, 1px 100%, 0 calc(100% - 1px))";
            }
            square.style.left = "" + ((x1) - (x1 - x2)) + "px";
            square.style.width = "" + (x1 - x2) + "px";
        }

        if(y2>=y1){
            if(square.className == "line"){
                square.style.clipPath = "polygon(0 1px, 1px 0, 100% calc(100% - 1px), calc(100% - 1px) 100%)";
            }
            square.style.height = "" + (y2 - y1) + "px";
        }
        else if(y2<y1){
            if(square.className == "line"){
                square.style.clipPath = "polygon(calc(100% - 1px) 0, 100% 1px, 1px 100%, 0 calc(100% - 1px))";
            }
            square.style.top = "" + ((y1) - (y1 - y2)) + "px";
            square.style.height = "" + (y1 - y2) + "px";
        }
        
        if(square.className == "line"){
            if((x2>=x1 && y2>=y1) || (y2<y1 && x2<x1)){
                square.style.clipPath = "polygon(0 1px, 1px 0, 100% calc(100% - 1px), calc(100% - 1px) 100%)";
            }
            else if((x2>=x1 && y2<y1) || (y2>=y1 && x2<x1)){
                square.style.clipPath = "polygon(calc(100% - 1px) 0, 100% 1px, 1px 100%, 0 calc(100% - 1px))";
            }
            else if(y2<y1 && x2<x1){
                square.style.clipPath = "polygon(0 1px, 1px 0, 100% calc(100% - 1px), calc(100% - 1px) 100%)";
            }
        }
        else{
            square.style.clipPath = "none";
        }
    }
});

mainBlock1.addEventListener('mouseup', (e) => {
    var mainBlock1 = document.querySelector('.main-block-1');
    square.style.zIndex = "1";
    var squarecopy = square.cloneNode(true);
    mainBlock1.append(squarecopy);
    ispressed = false;
    square.style.display = "none";
    square.style.top = "0px";
    square.style.left = "0px";
    square.style.width = "0px";
    square.style.height = "0px";
    square.style.zIndex = "2";
});

var squared = document.querySelector('.squared');
var circled = document.querySelector('.circled');
var lined = document.querySelector('.lined');
console.log(circled);

squared.addEventListener('click', () => {
    square.className = "square";
    square.style.background = "none";
});
circled.addEventListener('click', () => {
    square.className = "circle";
    square.style.background = "none";
});
lined.addEventListener('click', () => {
    square.className = "line";
    square.style.background = "black";
});