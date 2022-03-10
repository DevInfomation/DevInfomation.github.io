const computerChoice = ['rock', 'paper', 'scissors'];

let computerScore = 0;
let playerScore = 0;
let tieGame = 0;

const playerScoreJs = document.getElementById('playerScoreSpan');
const computerScoreJs = document.getElementById('computerScoreSpan');
const tieGameJs = document.getElementById('tieGame');

const rockP = document.getElementById('rock-p');
const paperP = document.getElementById('paper-p');
const scissorsP = document.getElementById('scissors-p');

document.getElementById('rock-btn').addEventListener('click', () => {
    rockFunction();
});

document.getElementById('paper-btn').addEventListener('click', () => {
    paperFunction();
});

document.getElementById('scissors-btn').addEventListener('click', () => {
    scissorsFunction();
});

function rockFunction() {
    const random = Math.floor(Math.random() * computerChoice.length);

    const rockContainer = document.createElement('div');
    rockContainer.classList.add('container');
    rockP.innerHTML = computerChoice[random];

    if (computerChoice[random] === 'scissors') {

        playerScore++;
        playerScoreJs.textContent = playerScore;


        if (playerScore > 0) {
           playerScoreJs.style.color = 'green'; 
        }
    } 
    else if (computerChoice[random] === 'rock') {
        tieGame++;
        tieGameJs.textContent = tieGame;
    }
    else {
        console.log('you lose');
        computerScore++;
        computerScoreJs.textContent = computerScore;
        if (computerScore > 0) {
            computerScoreJs.style.color = 'red';
        }
    }

    document.querySelector('.computer-container').appendChild(rockContainer);
}

function paperFunction() {
    const random = Math.floor(Math.random() * computerChoice.length);
    const paperP = document.getElementById('paper-p');


    paperP.innerHTML = computerChoice[random];

    if (computerChoice[random] === 'rock') {
        playerScore++;
        playerScoreJs.textContent = playerScore;
        
        if (playerScore > 0) {
            playerScoreJs.style.color = 'green';
        }
    }
    else if (computerChoice[random] === 'paper') {
        tieGame++;
        tieGameJs.textContent = tieGame;
    }
    else {
        computerScore++;
        computerScoreJs.textContent = computerScore;
        if (computerScore > 0){
            computerScoreJs.style.color = 'red';
        }
    }
}

function scissorsFunction() {
    const random = Math.floor(Math.random() * computerChoice.length);
    const scissorsP = document.getElementById('scissors-p');

    scissorsP.innerHTML = computerChoice[random];

    if (computerChoice[random] === 'paper') {
        playerScore++;
        playerScoreJs.textContent = playerScore;

        if (playerScore > 0) {
            playerScoreJs.style.color = 'green';
        }
    }
    else if (computerChoice[random] === 'scissors') {
        tieGame++;
        tieGameJs.textContent = tieGame;
    }
    else {
        computerScore++;
        computerScoreJs.textContent = computerScore;
        if (computerScore > 0) {
            computerScoreJs.style.color = 'red';
        }
    }
}