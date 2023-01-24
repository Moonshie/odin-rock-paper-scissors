function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice === 0) {return "Rock"}
    else if (choice === 1) {return "Paper"}
    else if (choice === 2) {return "Scissors"}
}

let computerSelection = getComputerChoice();

function playRound() {
    let playerInput = prompt();
    playerInput = playerInput.toLowerCase();
    let firstLetter = playerInput.charAt(0);
    let playerSelection = firstLetter.toUpperCase() + playerInput.substring(1);
    console.log("Player chose " + playerSelection + ".");
    console.log("Computer chose " + computerSelection + ".");
    if (playerSelection === computerSelection) return `It's a draw! You both chose ${computerSelection}.`
    else if (playerSelection === "Rock" && computerSelection === "Paper") return `You Lose! Paper beats Rock.`
    else if (playerSelection === "Rock" && computerSelection === "Scissors") return `You Win! Rock beats Scissors.`
    else if (playerSelection === "Paper" && computerSelection === "Rock") return `You Win! Paper beats Rock.`
    else if (playerSelection === "Paper" && computerSelection === "Scissors") return `You Lose! Scissors beat Paper.`
    else if (playerSelection === "Scissors" && computerSelection === "Rock") return `You Lose! Rocks beats Scissors.`
    else if (playerSelection === "Scissors" && computerSelection === "Paper") return `You Win! Scissors beat Paper.`
    else return "Incorrect input!";
}

console.log(playRound());