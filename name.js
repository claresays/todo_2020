const form = document.querySelector(".js-name");
const input = form.querySelector("input");
const locStorage = "currentUser"; 
const greeting = document.querySelector(".js-greetings");
const showingClass = "showing";

function handleSubmit(e) {
    e.preventDefault();
    const userValue = input.value;
    showName(userValue);
    saveName(userValue);
}
function saveName(text) {
    localStorage.setItem(locStorage, text);
}
function askName() {
    form.classList.add(showingClass);
    form.addEventListener("submit",handleSubmit);
}

function showName(txt) {
    form.classList.remove(showingClass);
    greeting.classList.add(showingClass);
    greeting.innerText = `Hello ${txt}`;
}

function getName() {
    const user = localStorage.getItem(locStorage);
    if(user === null) {
        askName();
    } else {
        showName(user);
    }
}

function start() {
    getName();
}

start();