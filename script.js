var directions = ["N", "NE", "E", "SE", "S", "SW", "NW", "N"];
var duck = document.getElementById("duck");
var step = 75;
var topValue = duck.offsetTop;
var leftValue = duck.offsetLeft;
function fly(directions) {
    console.log(topValue + " " + leftValue);
    switch (directions) {
        case "N":
            if (topValue >= 0) {
                topValue = topValue - step;
                duck.style.top = topValue + "px";
                duck.style.transform = "rotate(-90deg)";
            }
            break;
        case "NE":
            if (topValue >= 0 && leftValue <= 2000) {
                topValue = topValue - step;
                leftValue = leftValue + step;
                duck.style.left = leftValue + "px";
                duck.style.top = topValue + "px";
                duck.style.transform = "rotate(-30deg)";
            }
            break;
        case "E":
            if (leftValue <= 2000) {
                leftValue = leftValue + step;
                duck.style.left = leftValue + "px";
                duck.style.transform = "scaleX(1)";
            }
            break;
        case "SE":
            if (topValue <= 1000 && leftValue <= 1700) {
                topValue = topValue + step;
                leftValue = leftValue + step;
                duck.style.left = leftValue + "px";
                duck.style.top = topValue + "px";
                duck.style.transform = "rotate(30deg)";
            }
            break;
        case "S":
            if (topValue <= 1000) {
                topValue = topValue + step;
                duck.style.top = topValue + "px";
                duck.style.transform = "rotate(90deg)";
            }
            break;
        case "SW":
            if (topValue <= 1000 || leftValue >= 10) {
                topValue = topValue + step;
                leftValue = leftValue - step;
                duck.style.left = leftValue + "px";
                duck.style.top = topValue + "px";
                duck.style.transform = "scaleX(-1)" + "rotate(30deg)";
            }
            break;
        case "W":
            if (leftValue >= 10) {
                leftValue = leftValue - step;
                duck.style.left = leftValue + "px";
                duck.style.transform = "scaleX(-1)";
            }
            break;
        case "NW":
            if (topValue >= 0 && leftValue >= 10) {
                topValue = topValue - step;
                leftValue = leftValue - step;
                duck.style.top = topValue + "px";
                duck.style.left = leftValue + "px";
                duck.style.transform = "scaleX(-1)" + "rotate(-30deg)";
            }
            break;
    }
}
function randomMoveMent() {
    setInterval(function () {
        fly(directions[Math.floor(Math.random() * directions.length)]);
    }, 1000);
}
var missCounterID = document.getElementById("miss");
var hitCounterID = document.getElementById("hit");
var miss = 0;
var hit = 0;
function HitOrMiss(id) {
    if (hit != 20 && miss != 20) {
        if (id == 0) {
            console.log("background hit");
            miss++;
            var missString = miss.toString();
            missCounterID.innerHTML = "Miss: " + missString;
        }
        else if (id == 1) {
            console.log("duck hit");
            hit++;
            var hitString = hit.toString();
            hitCounterID.innerHTML = "Hit: " + hitString;
        }
    }
    else if (hit == 20) {
        alert("U heeft gewonnen");
        location.reload();
    }
    else if (miss == 20) {
        alert("U heeft verloren");
        location.reload();
    }
}
randomMoveMent();
