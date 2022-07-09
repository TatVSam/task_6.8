const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('Red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);

const trafficLightMod = document.querySelector('#trafficLightMod');
const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

function makeGreenMod() {
    trafficLightGreen.style.background = ('green');
trafficLightYellow.style.background = ('black');
trafficLightRed.style.background = ('black');
   trafficLightMod.removeEventListener('click', makeGreenMod);
    trafficLightMod.addEventListener('click', makeYellowMod);
}

function makeYellowMod() {
    trafficLightYellow.style.background = ('yellow');
 trafficLightGreen.style.background = ('black');
trafficLightRed.style.background = ('black');
   trafficLightMod.removeEventListener('click', makeYellowMod);
    trafficLightMod.addEventListener('click', makeRedMod);
}

function makeRedMod() {
    trafficLightRed.style.background = ('red');
    trafficLightGreen.style.background = ('black');
trafficLightYellow.style.background = ('black');
   trafficLightMod.removeEventListener('click', makeRedMod);
    trafficLightMod.addEventListener('click', makeGreenMod);
}

trafficLightMod.addEventListener('click', makeGreenMod);