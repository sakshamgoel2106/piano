var piano = document.querySelectorAll("ul.piano .key");
var audio = new Audio("tunes/a.wav");
var volumeControl = document.querySelector(".volumebutton input");

var playtune = function(key) {
    audio.src = `tunes/${key.dataset.note}.wav`;
    audio.play();

};



piano.forEach(function(key) {
    key.addEventListener("click", function() {
        playtune(key);
        key.classList.add("active");
        setTimeout(function() {
            key.classList.remove("active");
        }, 250);
    });
});

document.addEventListener("keydown", function(e) {
    var keyPressed = e.key.toLowerCase();
    piano.forEach(function(key) {
        if (key.dataset.note === keyPressed) {
            playtune(key);
            key.classList.add("active");
            setTimeout(function() {
                key.classList.remove("active");
            }, 250);
        }

    });


});





