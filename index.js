console.log("Hi")

var map = L.map('map').setView([33.797525, -118.164825], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([33.797525, -118.164825]).addTo(map);

var circle = L.circle([33.797525, -118.164825], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([33.797525, -118.164825])
    .setContent("I am a standalone popup.")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

async function getCoords() {
    try {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return [pos.coords.latitude, pos.coords.longitude];
    } catch (error) {
        console.error("Error getting coordinates:", error);
        return null;
    }
}

async function setupMap() {
    const userLocation = await getCoords();
    if (userLocation) {
        const myMap = L.map('map', {
            center: userLocation,
            zoom: 12
        });
        // Add map layers, markers, etc. here
    } else {
        console.error("User location not available.");
    }
}

setupMap();

// add an event listener

let locations = document.getElementById('locations');
locations.addEventListener('change', (event) => {
    let userSelection = event.target.value;
    console.log(userSelection);
});

// async function search() {
//     let userLocation = await getCoords();
//     let businessType = document.getElementById('business-finder');

//     businessType.addEventListener('change', async (event) => {
//         markers.forEach(marker => myMap.removeLayer(marker));
//         markers = [];

//         let userChoice = event.target.value;
//         try {
//             const options = {
//                 method: 'GET',
//                 headers: {
//                     accept: 'application/json',
//                     authorization: 
//                 }
//             };

//     let response = await fetch(//foursquare.com/api/business) 
//     let data = await response.json

//     let locations = data.results.map(results => ({


//     })
