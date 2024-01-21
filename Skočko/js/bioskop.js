var video = document.getElementById("video");
var playPauseDugme = document.getElementById("playPause");

video.addEventListener("play", function () {
    playPauseDugme.innerHTML = "Pause";
    playPauseDugme.style.backgroundColor = "red";
});

video.addEventListener("pause", function () {
    playPauseDugme.innerHTML = "Play";
    playPauseDugme.style.backgroundColor = "green";
});

function promenaFilma(imeFilma) {
    let video = document.getElementById("video");

    video.src = "images/" + imeFilma + ".mp4";
    dugme = document.getElementById("playPause");
    dugme.innerHTML = "Play";
    dugme.style.backgroundColor = "green";
}


function playPause(objekat) {

    let video = document.getElementById("video");


    if (objekat.innerHTML == "Play") {
        video.play();
        objekat.innerHTML = "Pause";
        objekat.style.backgroundColor = "red";
    } else {
        objekat.innerHTML = "Play";
        objekat.style.backgroundColor = "green";

        video.pause();
    }

}


function fullscreen(objekat) {

    document.getElementById("video").requestFullscreen();

}