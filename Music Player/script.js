const audio = document.querySelector('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const backwardBtn = document.getElementById('backwardBtn');
const forwardBtn = document.getElementById('forwardBtn');
const progressBar = document.getElementById('progress');


function togglePlayPause() {
    if (audio.paused || audio.ended) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}


function skipBackward() {
    audio.currentTime -= 10; 
}


function skipForward() {
    audio.currentTime += 10; 
}


function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
}


function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


playPauseBtn.addEventListener('click', togglePlayPause);
backwardBtn.addEventListener('click', skipBackward);
forwardBtn.addEventListener('click', skipForward);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);


audio.addEventListener('ended', function() {
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
});



