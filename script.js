function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    console.log(choice);
    if (choice === 0) {return "Rock"}
    else if (choice === 1) {return "Paper"}
    else if (choice === 2) {return "Scissors"}
}

console.log(getComputerChoice());