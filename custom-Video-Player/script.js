// scripts.js
const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPause');
const seekBar = document.getElementById('seekBar');
const muteUnmuteButton = document.getElementById('muteUnmute');
const volumeBar = document.getElementById('volumeBar');
const fullscreenButton = document.getElementById('fullscreen');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Update seek bar as video plays
video.addEventListener('timeupdate', () => {
    if (video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        seekBar.value = progress;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
        durationDisplay.textContent = formatTime(video.duration);
    }
});

// Seek functionality
seekBar.addEventListener('input', () => {
    if (video.duration) {
        const seekTime = (seekBar.value / 100) * video.duration;
        video.currentTime = seekTime;
    }
});

// Mute/Unmute functionality
muteUnmuteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteUnmuteButton.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
});

// Volume control
volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value;
});

// Sync volume bar with video's initial volume setting
volumeBar.value = video.volume;

// Fullscreen functionality
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
        fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        document.exitFullscreen();
        fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
    }
});

// Format time in minutes and seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Initialize duration display
video.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(video.duration);
});
