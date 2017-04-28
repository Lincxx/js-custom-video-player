//get our elements
const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

//Build out function
function togglePlay(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}


//hook up the event listeners
video.addEventListener('click', togglePlay);
