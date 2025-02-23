function getComputerChoice (){
    let ranNum = Math.random();
    let choice;

    if (ranNum < 0.333){
        choice = "Rock";
    } else if (ranNum < 0.666) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

function getHumanChoice(){
    let humanChoice;
    let verified;
    while (true) {
        humanChoice = prompt("Rock, Paper, or Scissors?");

        humanChoice =
        humanChoice.charAt(0).toUpperCase() +
        humanChoice.slice(1).toLowerCase();
        
        verified = 
        humanChoice === "Rock" ||
        humanChoice === "Paper" ||
        humanChoice === "Scissors";

        if (verified){
            break;
        }
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    let outcome;
    
    if (humanChoice === computerChoice) {
        outcome = 1;
    } else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        outcome = 2;
    } else {
        outcome = 3;
    }

    switch (outcome) {
        case 1:
            console.log ("It was a tie!");
            break;
        case 2:
            console.log (`You win! ${humanChoice} beats ${computerChoice}!`);
            break;
        case 3:
            console.log (`You lose! ${computerChoice} beats ${humanChoice}!`);
    }

    return outcome;

}

function playGame (){
    let humanScore = 0;
    let computerScore = 0;
    let roundResult;
    
    for (let i = 0; i < 5; i++){
        roundResult = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult === 2) {humanScore++}
        else if (roundResult === 3) {computerScore++}
    }
    if (humanScore === computerScore){
        console.log("This game ends in a tie!")
    } else if (humanScore > computerScore){
        console.log("Nice job, you won the game!")
    } else {
        console.log("You lost that game! Too bad!")
    }
}

playGame();
