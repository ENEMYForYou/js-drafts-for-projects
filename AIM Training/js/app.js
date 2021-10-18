'use strict';

const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#bdee34', '#ffa577'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', function (event) {
    event.preventDefault();
    screens[0].classList.add('up');
});
timeList.addEventListener('click', function (event) {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    };
});
function startGame() {
    setInterval(decreaseTime, 1000)
    setTime(time);
    createRandomCircle();
};
board.addEventListener('click', function (event) {
    if (event.target.classList.contains('circle')) {
        score += 1;
        event.target.remove();
        createRandomCircle();
    }
})
function setTime (value) {
    timeEl.innerHTML = `00:${value}`;
}
function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
    let current = time -= 1;
    if (current < 10) {
        current = `0${current}`;
    };
    setTime(current);
    };
};
function finishGame() {
    board.innerHTML = `<h1>Your score: <span class="primary">${score}</span>!</h1>`;
    timeEl.parentNode.classList.add('hide');
};
function createRandomCircle () {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 50);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const color = getRandomColor();
    circle.addEventListener('click', setColor);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = color;
    board.append(circle);
}
function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}