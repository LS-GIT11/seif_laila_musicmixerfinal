let dropArea = document.querySelector('#drop-zones'),
    dropZones = document.querySelectorAll('.dz'),
    daBirds = document.querySelectorAll('#birds li');



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
}



daBirds.forEach(bird => bird.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
});




//.................




//audio js
