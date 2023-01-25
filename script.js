function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice === 0) {return "Rock"}
    else if (choice === 1) {return "Paper"}
    else if (choice === 2) {return "Scissors"}
}

let computerSelection;
let playerWinCount = 0;
let computerWinCount = 0;
let mistakeSwitch = false;

function playRound() {
    let playerInput = prompt();
    playerInput = playerInput.toLowerCase();
    let firstLetter = playerInput.charAt(0);
    let playerSelection = firstLetter.toUpperCase() + playerInput.substring(1);
    console.log("Player chose " + playerSelection + ".");
    computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection + ".");
    if (playerSelection === computerSelection) return `It's a draw! You both chose ${computerSelection}.`
    else if (playerSelection === "Rock" && computerSelection === "Paper") {computerWinCount++; return `You Lose! Paper beats Rock.`}
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {playerWinCount++; return `You Win! Rock beats Scissors.`}
    else if (playerSelection === "Paper" && computerSelection === "Rock") {playerWinCount++; return `You Win! Paper beats Rock.`}
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {computerWinCount++; return `You Lose! Scissors beat Paper.`}
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {computerWinCount++; return `You Lose! Rocks beats Scissors.`}
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {playerWinCount++; return `You Win! Scissors beat Paper.`}
    else {mistakeSwitch = true; return "Incorrect input!"};
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound())
        if (mistakeSwitch === true) return `Disqualified! Reload the page and try again.`
        console.log(`Player won ` + playerWinCount + ` times.`)
        console.log(`Computer won ` + computerWinCount + ` times.`)
    }
    if (playerWinCount > computerWinCount) return `Player is victorious! Final score: ${playerWinCount}:${computerWinCount}.`
    else if (playerWinCount < computerWinCount) return `Computer is victorious! Final score: ${playerWinCount}:${computerWinCount}.`
    else return `The game ends in a draw! Final score: ${playerWinCount}:${computerWinCount}.`;
}

console.log(playGame());