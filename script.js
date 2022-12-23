// make random choice for computer
function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    const computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerChoice;
}

// play a single round
function playRound(playerChoice, computerSelection) {
    // store round result and player-computer scores
    let roundResult = '';
    let playerScore = 0;
    let computerScore = 0;

    // player wins
    if ((playerChoice == 'rock' && computerSelection == 'scissors') ||
        (playerChoice == 'scissors' && computerSelection == 'paper') ||
        (playerChoice == 'paper' && computerSelection == 'rock')) {
        roundResult = 'You win';
        playerScore = playerScore + 1;
    }
    // computer wins
    else if ((playerChoice == 'rock' && computerSelection == 'paper') ||
        (playerChoice == 'scissors' && computerSelection == 'rock') ||
        (playerChoice == 'paper' && computerSelection == 'scissors')) {
        roundResult = 'You lose';
        computerScore = computerScore + 1;
    }
    // draw
    else
        roundResult = 'It was a draw'
    // return result of the round
    return { roundResult, playerScore, computerScore }
}

// function to play 5 rounds
function game() {
    // loop the round 5 times
    for (let i = 1; i < 6; i++) {
        // get input from player each round
        let playerChoice = prompt('rock, paper, or scissors?').toLowerCase();
        // get new computer input each round
        let computerSelection = getComputerChoice();
        // play the round
        playRound(playerChoice, computerSelection);
        // display result of each round
    }
    // return outcome of the whole game

}