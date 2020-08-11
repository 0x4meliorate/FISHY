// Donate button
async function imise(type) {
    var x = document.getElementById("fakebrowser");
    var type;
    var body = document.getElementById("body");
    if (x.style.display === "none" && type == "close") {
        body.style.cursor = "progress";
        await sleep(1000);
        body.style.cursor = "default";
        x.style.display = "block";
    } else if(x.style.display !== "none" && type == "close") {
        body.style.cursor = "progress";
        await sleep(200);
        body.style.cursor = "default";
        x.style.display = "none";
    }
}
// Draggable
$(document).ready(function() {
    $(function() { $('#fakebrowser').draggable({ containment: "window" }) });
    document.getElementById("fakebrowser").style.display = "none";
});

// WINDOW ICONS (Minimise, Maximise, Close)
function mouseOverClose() {
    document.getElementById("close").style.backgroundColor = "#E71020";
  }
  
  function mouseOutClose() {
    document.getElementById("close").style.backgroundColor = "#D5D9DC";
}

// Stop breakline in the URL Bar
var el = document.getElementById('urltext');
el.onkeydown = function (e) {
    if (!e) {
        e = window.event;
    }
    var keyCode = e.which || e.keyCode,
        target = e.target || e.srcElement;

    if (keyCode === 13 && !e.shiftKey) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        target.innerHTML = '<font color="black">paypal.com</font><font color="#96999C">/signin</font>';
    }
}
// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
