let dropArea = document.querySelector('#drop-zones'),
    dropZones = document.querySelectorAll('.dz'),
    daBirds = document.querySelectorAll('#birds li');


//drag and drop 

function allowDrag(e) {
    console.log('dragging bird!')
    e.dataTransfer.setData('draggedEl', this.id);
}

function allowDragOver(e) {
    e.preventDefault();
    console.log('dragging over zone!');
}

function allowDrop(e) {
    e.preventDefault();
    const dropZone = e.currentTarget;
    if (dropZone.querySelector('svg')) {
        console.log("Get off my branch! Already taken");
        return;
    }
    let droppedElId = e.dataTransfer.getData('draggedEl'),
        droppedEl = document.querySelector(`#${droppedElId}`);
    this.appendChild(droppedEl);
    loadAudio(droppedEl);
}

daBirds.forEach(bird => bird.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
});




//audio js... looked at the jukebox, the drumkit built, and bonus d-and-d audio class builds

let audioEl = document.querySelector('audio'),
    playButton = document.querySelector('#playButton'),
    pauseButton = document.querySelector('#pauseButton'),
    rewindButton = document.querySelector('#rewindButton'),
    volSlider = document.querySelector('#volumeControl');


//functions - audio
function loadAudio(birdEl) { 
    let audio = document.createElement('audio');
    audio.src = `audio/${birdEl.dataset.trackref}.wav`;
    audio.load();
    audio.volume = volSlider.value / 100;
    document.getElementById('audio-container').appendChild(audio);
    audio.play();
}


//functions - buttons and slider
function playAudio() {
    document.querySelectorAll('#audio-container audio').forEach(audio => audio.play());
}
function pauseAudio() {
    document.querySelectorAll('#audio-container audio').forEach(audio => audio.pause());
}
function restartAudio() {
    document.querySelectorAll('#audio-container audio').forEach(audio => {
        audio.currentTime = 0;
        audio.play();
    });
}
function setVolume() {
    document.querySelectorAll('#audio-container audio').forEach(audio => {
        audio.volume = this.value / 100;
    });
}

//eventlisteners
playButton.addEventListener('click', playAudio);
rewindButton.addEventListener('click', restartAudio);
pauseButton.addEventListener('click', pauseAudio);
volSlider.addEventListener('change', setVolume);
