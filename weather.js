const weather = document.querySelector(".js-weather");

const API_KEY = "680cb6634afe94e5cc9fc1fd2c072303";
const coords = 'coords'

function getWeather(lat,lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const location = json.name;
        weather.innerText = `Currently ${temperature}°C at ${location}`;
    });
}

function saveCoords(coordsObject) {
    localStorage.setItem(coords, JSON.stringify(coordsObject))
}

function handleCurrentPosition(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const coordsObject = {
        latitude,
        longitude
    }
    saveCoords(coordsObject);
}

function handleGeoError() {
    console.log('Cant get geo location')
}

function getCoordinates() {
    navigator.geolocation.getCurrentPosition(handleCurrentPosition,handleGeoError);
}

function loadCoordinates() {
    const loadedCoords = localStorage.getItem(coords);
    if(loadedCoords === null) {
        getCoordinates();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function start() {
    loadCoordinates();
}

start();