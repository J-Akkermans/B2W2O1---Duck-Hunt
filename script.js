const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
const img = document.getElementById("img");

var step = 75;

var scorePrint = document.getElementById("scoreCount");
var missCount = document.getElementById("missCount");

function fly(direction) {
    direction = direction.toLowerCase();
    var top = document.getElementById('img').offsetTop;
    var left = document.getElementById('img').offsetLeft;

    switch (direction) { //Tussen de haakjes staat de expressie, en case de vergelijking die equal moet zijn.
        case 'n':
            if (top == 0) {
            } else {
                top = top - step;
                img.style.top = top + "px";
            }
            break;
        case 'ne':
            if (top == 0 || left == 1650) {
            } else {
                left = left + step;
                img.style.left = left + "px";
                top = top - step;
                img.style.top = top + "px";
            }
            break;
        case 'e':
            if (left == 1650) {
            } else {
                left = left + step;
                img.style.left = left + "px";
            }
            break;
        case 'se':
            if (top == 750 || left == 1650) {
            } else {
                left = left + step;
                img.style.left = left + "px";
                top = top + step;
                img.style.top = top + "px";
            }
            break;
        case 's':
            if (top == 750) {
            } else {
                top = top + step;
                img.style.top = top + "px";
            }
            break;
        case 'sw':
            if (top == 750 || left == 0) {
            } else {
                left = left - step;
                img.style.left = left + "px";
                top = top + step;
                img.style.top = top + "px";
            }
            break;
        case 'w':
            if (left == 0) {
            } else {
                left = left - step;
                img.style.left = left + "px";
            }
            break;
        case 'nw':
            if (top == 750 || left == 0) {
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



var miss = 0;
var score = 0;

function hitOrMiss(id) {
    console.log(miss)
    switch (id) {
        case 0:
            missCount.innerHTML = miss++;
            break;
        case 1:
            scorePrint.innerHTML = score++;
            break;
    }
    if (score == 21) {
        document.getElementById("win").classList.remove("d-none");
    } else if (miss == 21) {
        document.getElementById("lose").classList.remove("d-none");
    }
}

function restart() {
    window.location.reload()
}

function moveDuck() {
    setInterval(function () {
        //Code dat iedere 0,5 seconden uitgevoerd wordt.
        var random = directions[Math.floor(Math.random() * directions.length)];
        fly(random)
    }, 500); //Hoe lang de interval is tussen uitvoering van deze functie.
}



moveDuck()