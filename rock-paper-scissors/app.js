const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let computerChoice;
let playerChoice;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else if (randomNumber === 2) {
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}