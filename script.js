'use strict';

let guessNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

const showMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
    guessNumber = Number(Math.trunc(Math.random() * 20) + 1);
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    showMessage("Start guessing...");

});
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        showMessage("No number!");
    } else if (guess === guessNumber) {
        showMessage("Correct number!");
        document.querySelector('.number').textContent = guessNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            console.log(score);
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (score > 1) {
        if (guess !== guessNumber) {
            guess > guessNumber ? showMessage("Too high..") : showMessage("Too low..");
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.score').textContent = 0;
        showMessage("You lost the game =(");
    }
});