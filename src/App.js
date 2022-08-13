import './App.css';
import mapMansion from "./assets/img/map-icon/cs_mansion.webp"
import mapItaly from './assets/img/map-icon/cs_italy.webp'
import mapAssault from './assets/img/map-icon/cs_assault.webp'
import mapMilitial from './assets/img/map-icon/cs_militia.webp'
import mapOffice from './assets/img/map-icon/cs_office.webp'
import mapDust2 from './assets/img/map-icon/de_dust2.jpg'

function App() {
let mapContainer = document.getElementById('mapContainer')
// let closeMapButton = document.getElementById('close-map-window')
// let options = document.getElementById('options')





const openMenuContainer = () => {
    mapContainer.style = 'display:block'
  }


  const closeMapContainer = () => {
    mapContainer.style = 'display:none'
}

// let tabs = document.querySelectorAll('.tabs a')
// let tabsContent = document.querySelectorAll('.tabs-content__block')
// for (let tab of tabs) {
// 	tab.onclick = function (e) {
// 		e.preventDefault()
// 		let setTab = document.getElementById(this.dataset.tabs)
// 		for (let content of tabsContent) {
// 			content.style.display = 'none'
// 		}
// 		setTab.style.display = 'block'
// 	}
// }

  return (
    <div className="App">
     <div className="background-map">
            <div className="container">
                <div id="mapContainer" className="map-window">
                    <div className="map">
                        <span  id="close-map-window"  className="close-map-window" onclick={closeMapContainer}>X</span>
                        <h2 className="title-map">Choose Map</h2>
                    <div className="map-list">
                            <img className="map-item" src={mapMansion} alt="" />
                            <img className="map-item" src={mapItaly} alt="" />
                            <img className="map-item" src={mapAssault} alt="" />
                            <img className="map-item" src={mapMilitial} alt="" />
                            <img className="map-item" src={mapOffice} alt="" />
                            <img className="map-item" src={mapDust2} alt="" />
                    </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="menu-item">
                        <p id="new-game" onclick={openMenuContainer}>New Game</p>
                        <p id="options">Options</p>
                        <p id="quit">Quit</p>
                    </div>
                </div>
            </div>
    </div>

    </div>
  );
}

export default App;
