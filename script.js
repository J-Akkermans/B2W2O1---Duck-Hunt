var directions = ["N", "NE","E","SE","S","SW","W","NW"]
var img = document.getElementById("img");



function fly(direction){
    direction = direction.toLowerCase();
    switch(direction) {
        case 'n':
            img.style.top=+ 75 + "px"
            
          break;
        case 'n':
            alert("north-east")
            break;
        case 'n':
          alert("east")
            break;
        case 'se':
            alert("south-east")
            break;
        case 's':
            alert("south")
            break;
        case 'sw':
            alert("south-west")
            break;
        case 'w':
            alert("west")
            break;
        case 'nw':
            alert("north-west")
            break;
        default:
          // code block
      }
}

fly('n')