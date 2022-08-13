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

let tabs = document.querySelectorAll('.tabs a')
let tabsContent = document.querySelectorAll('.tabs-content__block')
for (let tab of tabs) {
	tab.onclick = function (e) {
		e.preventDefault()
		let setTab = document.getElementById(this.dataset.tabs)
		for (let content of tabsContent) {
			content.style.display = 'none'
		}
		setTab.style.display = 'block'
	}
}
