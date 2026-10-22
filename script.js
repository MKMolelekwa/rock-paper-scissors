//const Options= ["Rock", "Paper", "Scissors"];   //Options is an array that holds the options
//const randomIndex= Math.floor(Math.random() * Options.length);  //
//const randomOptions= Options[randomIndex];

//console.log(randomOptions);

function getComputerChoice() {
    const computerChoice =Math.floor(Math.random()*3);

switch (computerChoice) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
}
}

console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
    return humanChoice;
}



console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if  (humanChoice === computerChoice) {
        console.log("It's a draw.");
    }
            else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat paper!");
        computerScore++;
    }       else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }       else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }       else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beat paper!");
        humanScore++;
    }       else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        humanScore++;
    }       else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++;
    }        
    
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection,humanSelection);

console.log("Score-> Human: " + humanScore + " " + "Computer: " + computerScore);