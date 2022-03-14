const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let computerChoice;
let playerChoice;
let result;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
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

function getResult() {
    if (computerChoice === playerChoice) {
        result = "It's a draw!";
    } 

    if (computerChoice === "rock" && playerChoice === "paper") {
        result = "You win!"
    }
    if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "You lose!"
    }

    if (computerChoice === "paper" && playerChoice === "scissors") {
        result = "You win!"
    }
    if (computerChoice === "paper" && playerChoice === "rock") {
        result = "You lose!"
    }

    if (computerChoice === "scissors" && playerChoice === "rock") {
        result = "You win!"
    }
    if (computerChoice === "scissors" && playerChoice === "paper") {
        result = "You lose!"
    }

    resultDisplay.innerHTML = result;
}