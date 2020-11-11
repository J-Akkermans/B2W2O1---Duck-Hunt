var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
var img = document.getElementById("img");

var step = 75;


function fly(direction) {
    direction = direction.toLowerCase();
    var top = document.getElementById('img').offsetTop;
    var left = document.getElementById('img').offsetLeft;

    switch (direction) { //Tussen de haakjes staat de expressie, en case de vergelijking die equal moet zijn.
        case 'n':
            if (top == 0) {
                alert("test");
            } else {
                top = top - step;
                img.style.top = top + "px";
            }
            break;
        case 'ne':
            if (top == 0 || left == 1650) {
                alert('test')
            } else {
                left = left + step;
                img.style.left = left + "px";
                top = top - step;
                img.style.top = top + "px";
            }
            break;
        case 'e':
            if (left == 1650) {
                alert('test');
            } else {
                left = left + step;
                img.style.left = left + "px";
            }
            break;
        case 'se':
            if (top == 750 || left == 1650) {
                alert('test')
            } else {
                left = left + step;
                img.style.left = left + "px";

                top = top + step;
                img.style.top = top + "px";
            }
            break;
        case 's':
            if (top == 750) {
                alert('test')
            } else {
                top = top + step;
                img.style.top = top + "px";
            }
            break;
        case 'sw':
            if (top == 750 || left == 0) {
                alert('test')
            } else {
                left = left - step;
                img.style.left = left + "px";

                top = top + step;
                img.style.top = top + "px";
            }
            break;
        case 'w':
            if (left == 0) {
                alert('test')
            } else {
                left = left - step;
                img.style.left = left + "px";
            }
            break;
        case 'nw':
            if (top == 750 || left == 0) {
                alert('test')
            } else {
                left = left - step;
                img.style.left = left + "px";
                top = top - step;
                img.style.top = top + "px";
            }
            break;
        default:
            break;
    }
}

function moveDuck() {
    setInterval(function () {
        //Code dat iedere 0,5 seconden uitgevoerd wordt.


    }, 500); //Hoe lang de interval is tussen uitvoering van deze functie.
}

fly('n');