//const Options= ["Rock", "Paper", "Scissors"];   //Options is an array that holds the options
//const randomIndex= Math.floor(Math.random() * Options.length);  //
//const randomOptions= Options[randomIndex];

//console.log(randomOptions);

function getComputerChoice() {
    const computerChoice =Math.floor(Math.random()*3);

switch (computerChoice) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissors";
}
}

console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice;
}

console.log(getHumanChoice());

let humanScore = 0;

let computerScore = 0;

function playRound(computerChoice, humanChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

