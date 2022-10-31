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
            square.style.color = color.style.background;
        }
    });
});

var headerSizes = document.querySelector('.header-sizes');
var sizes = document.querySelectorAll('.size');
var size = 2;
for (let k = 0; k < sizes.length; k++) {
    sizes[k].addEventListener('click', () =>{
        size = (k+1)*2;
        console.log(size);
        square.style.borderWidth = ""+size+"px";
        square.style.fontSize = ""+(size*3)+"px";
    });
}



var blocksArray = new Array;
var mainBlock1 = document.querySelector('.main-block-1');
var square = document.querySelector('.square');

var ispressed = false;
var iftext = false;
var x1;
var y1;

mainBlock1.addEventListener('mousedown', (e) => {
    if(iftext == false){
        ispressed = true;
        x1 = e.clientX;
        y1 = e.clientY;
        square.style.top = "" + (y1) + "px";
        square.style.left = "" + (x1) + "px";
    }
});

mainBlock1.addEventListener('mousemove', (e) => {
    if (ispressed == true && iftext == false) {
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

        if(y2>=y1){
            square.style.height = "" + (y2 - y1) + "px";
        }
        else if(y2<y1){
            square.style.top = "" + ((y1) - (y1 - y2)) + "px";
            square.style.height = "" + (y1 - y2) + "px";
        }
        
        if(square.className == "line"){
            if((x2>=x1 && y2>=y1) || (y2<y1 && x2<x1)){
                square.style.clipPath = "polygon(0 "+size+"px, "+size+"px 0, 100% calc(100% - "+size+"px), calc(100% - "+size+"px) 100%)";
            }
            else if((x2>=x1 && y2<y1) || (y2>=y1 && x2<x1)){
                square.style.clipPath = "polygon(calc(100% - "+size+"px) 0, 100% "+size+"px, "+size+"px 100%, 0 calc(100% - "+size+"px))";
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
    if(iftext == false){
        var mainBlock1 = document.querySelector('.main-block-1');
        square.style.zIndex = "1";
        var squarecopy = square.cloneNode(true);
        mainBlock1.append(squarecopy);
        blocksArray.push(squarecopy);
        console.log(blocksArray);
        ispressed = false;
        square.style.display = "none";
        square.style.top = "0px";
        square.style.left = "0px";
        square.style.width = "0px";
        square.style.height = "0px";
        square.style.zIndex = "2";
        square.innerHTML = "";
    }
});

var squared = document.querySelector('.squared');
var circled = document.querySelector('.circled');
var texted = document.querySelector('.texted');
var lined = document.querySelector('.lined');

var textblock = false;

squared.addEventListener('click', () => {
    square.className = "square";
    square.style.background = "none";
    iftext = false;
    square.innerHTML = " ";
});
circled.addEventListener('click', () => {
    square.className = "circle";
    square.style.background = "none";
    iftext = false;
    square.innerHTML = " ";
});
lined.addEventListener('click', () => {
    square.className = "line";
    square.style.background = "black";
    iftext = false;
    square.innerHTML = " ";
});
texted.addEventListener('click', () => {
    square.className = "square";
    square.style.background = "none";
    iftext = true;
    textblock = false;
    square.innerHTML = " ";
});

document.addEventListener('keypress', (e) => {
    if(e.key === 'z' && iftext == false){
        var theRemovedElement = blocksArray.pop();
        mainBlock1.removeChild(theRemovedElement);
    }
});

document.addEventListener('keypress', (e) => {
    if(iftext == true && e.key === 'Enter' && textblock == false){
        var mainBlock1 = document.querySelector('.main-block-1');
        square.style.zIndex = "1";
        var squarecopy = square.cloneNode(true);
        squarecopy.style.border = "none";
        mainBlock1.append(squarecopy);
        blocksArray.push(squarecopy);
        console.log(blocksArray);
        ispressed = false;
        textblock = true;
        square.style.display = "none";
        square.style.top = "0px";
        square.style.left = "0px";
        square.style.width = "0px";
        square.style.height = "0px";
        square.style.zIndex = "2";
        square.innerHTML = " ";
    }
});

mainBlock1.addEventListener('click', (e) => {
    if(iftext == true){
        square.style.display = "block";
        x1 = e.clientX;
        y1 = e.clientY;
        textblock = false;
        square.style.top = "" + (y1) + "px";
        square.style.left = "" + (x1) + "px";
    }
});

document.addEventListener('keypress', (e) => {
    if(textblock == false){
        square.innerHTML += e.key;
    }
});