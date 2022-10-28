'use strict';

let guessNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;

document.querySelector('.again').addEventListener('click', function(){
    guessNumber = Number(Math.trunc(Math.random() * 20) + 1);
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";
    
});
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = "No number!"
    } else if (guess === guessNumber) {
        document.querySelector('.message').textContent = "Correct number!"
        document.querySelector('.number').textContent = guessNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (score > 1) {
        if (guess > guessNumber) {
            document.querySelector('.message').textContent = "Too high.."
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guess < guessNumber) {
            document.querySelector('.message').textContent = "Too low.."
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = "You lost the game =("
    }
});
