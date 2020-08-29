// SWITCH

function brew1() {
    var brewout;
    var brews = document.getElementById("brewin").value;
    var brewstr = " is a great brewery!";
    switch (brews) {
        case "Great Notion":
            brewout = "Great Notion" + brewstr;
            break;
        case "Hair of the Dog":
            brewout = "Hair of the Dog" + brewstr;
            break;
        case "Ex Novo":
            brewout = "Ex Novo" + brewstr;
            break;
        case "Breakside":
            brewout = "Breakside" + brewstr;
            break;
        case "Sasquatch":
            brewout = "Sasquatch" + brewstr;
            break;
        case "Little Beast":
            brewout = "Little Beast" + brewstr;
            break;
        default:
            brewout = "Please enter a brewery exactly as it is written above.";
    }
    document.getElementById("output").innerHTML = brewout;
}

// GET BY CLASS NAME

function howdy() {
    var h = document.getElementsByClassName("click");
    h[0].innerHTML = "I saaaaid... howdy.";
}

// IMAGE ON THE CANVAS

var c = document.getElementById("canvas");
var ctxt = c.getContext("2d");
var g = ctxt.createLinearGradient(0, 0, 350, 0);
g.addColorStop(0, "purple");
g.addColorStop(1, "black");
ctxt.fillStyle = g;
ctxt.fillRect(0, 0, 350, 200);