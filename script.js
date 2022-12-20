// declare variables for player's choice and computer's choice
let playerSelection = prompt('rock, paper, or scissors?');
let playerChoice = playerSelection.toLowerCase(); // account for case sensitive inputs
const gameChoices = ['rock', 'paper', 'scissors'];
let computerSelection = getComputerChoice();

// record a score for each round played
let playerScore = 0;
let computerScore = 0;

// randomly select a game choice for the computer
function getComputerChoice() {
    const computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerChoice;
}

// return a string that declares a winner
function playRound(playerChoice, computerSelection) {
    let roundResult = '';

    if ((playerChoice == 'rock' && computerSelection == 'scissors') ||
        (playerChoice == 'scissors' && computerSelection == 'paper') ||
        (playerChoice == 'paper' && computerSelection == 'rock')) {
        roundResult = 'You win';
        playerScore = playerScore + 1;
    }

    else if ((playerChoice == 'rock' && computerSelection == 'paper') ||
        (playerChoice == 'scissors' && computerSelection == 'rock') ||
        (playerChoice == 'paper' && computerSelection == 'scissors')) {
        roundResult = 'You lose';
        computerScore = computerScore + 1;
    }

    else
        roundResult = 'It was a draw'

    return roundResult, playerScore;
    return computerScore;
}

function game() {
    // loop playing game until 5 rounds ends
    for (let i = 1; i < 6; i++) {
        playRound(playerSelection, computerSelection);
    }

    // keep a score
    return 

}