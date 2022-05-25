$(document).ready(function () {
    $('.video-button').click(function () {
        $('.modal-video').css('display', 'block')
    })
    $('.modal-video-close-btn').click(function () {
        $('.modal-video').css('display', 'none')
    })
    $('.modal-video').click(function () {
        $('.modal-video').css('display', 'none')
    })
})

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}


function onPlayerReady(event) {

    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function () {
        player.playVideo();
    });

    var stopButton = document.getElementById("stop-button");
    stopButton.addEventListener("click", function () {
        player.stopVideo();
    });

    var modalVideo = document.getElementsByClassName("modal-video");
    modalVideo.addEventListener("click", function () {
        player.stopVideo();
    });
}