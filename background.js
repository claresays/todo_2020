const body = document.querySelector("body");
const imgNum = 9;

function showImage(imgNum) {
    const image = new Image();
    image.src = `images/${imgNum + 1}.jpg`;
    body.prepend(image);
    image.classList.add("background-img");
}
function getRandom() {
    const num = Math.floor(Math.random() * 10);
    return num;
}
function start() {
    const rand = getRandom();
    showImage(rand);
}

start();