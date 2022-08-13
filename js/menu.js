// let newGame = document.getElementById('new-game')
// newGame.addEventListener("click", openMenuContainer)
let mapContainer = document.getElementById('mapContainer')
let closeMapButton = document.getElementById('close-map-window')
let options = document.getElementById('options')



console.log(mapContainer);
function openMenuContainer(){
    mapContainer.style = 'display:block'
}

function closeMapContainer(){
    mapContainer.style = 'display:none'
}