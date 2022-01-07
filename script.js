let time = 0

let countedown = setInterval(function() {
    ++time;
    document.getElementById("counter").innerHTML = time;
}, 600)