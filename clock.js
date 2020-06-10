const clockContainer = document.querySelector(".js-clock");
const clockContent = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockContent.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
}

function start() {
    getTime();
    setInterval(getTime, 1000);
}

start();