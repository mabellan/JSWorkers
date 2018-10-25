var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",100);
}

onmessage = function(e) {
    this.console.log("Soy el Worker y me ha llegado esto: " + e.data);
}

timedCount();