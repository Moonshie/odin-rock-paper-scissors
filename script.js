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

document.querySelector("#rock").addEventListener("click", playRoundRock);
document.querySelector("#paper").addEventListener("click", playRoundPaper);
document.querySelector("#scissors").addEventListener("click", playRoundScissors);

function playRoundRock() {
    playRound("Rock");
}
function playRoundPaper() {
    playRound("Paper");
}
function playRoundScissors() {
    playRound("Scissors");
}

function displayChoice() {
    document.querySelector(".player").innerHTML = playerSelection;
    document.querySelector(".computer").innerHTML = computerSelection;
}

function displayScore() {
    document.querySelector(".score").innerHTML = `${playerWinCount} : ${computerWinCount}`
}

function showResult(result) {
    document.querySelector(".result").innerHTML = result
}

function playRound(choice) {
    playerSelection = choice;
    computerSelection = getComputerChoice();
    displayChoice();
    if (playerSelection === computerSelection) showResult(`It's a draw!`);
    else if (playerSelection === "Rock" && computerSelection === "Paper") {computerWinCount++; showResult(`You Lose!`)}
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {playerWinCount++; showResult(`You Win!`)}
    else if (playerSelection === "Paper" && computerSelection === "Rock") {playerWinCount++; showResult(`You Win!`)}
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {computerWinCount++; showResult(`You Lose!`)}
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {computerWinCount++; showResult(`You Lose!`)}
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {playerWinCount++; showResult(`You Win!`)}
    displayScore();
    if (playerWinCount === 5) {
        showResult(`Player is victorious!`);
        document.querySelector("#rock").removeEventListener("click", playRoundRock);
        document.querySelector("#paper").removeEventListener("click", playRoundPaper);
        document.querySelector("#scissors").removeEventListener("click", playRoundScissors);
    }
    else if (computerWinCount === 5) {
        showResult(`Game over! You lost!`);
        document.querySelector("#rock").removeEventListener("click", playRoundRock);
        document.querySelector("#paper").removeEventListener("click", playRoundPaper);
        document.querySelector("#scissors").removeEventListener("click", playRoundScissors);

    }
}