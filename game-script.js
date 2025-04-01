function getComputerChoice (){
    let ranNum = Math.random();
    let choice;

    choice = (ranNum < 0.333)? 
    "Rock": (ranNum < 0.666)?
    "Paper": "Scissors";

    return choice;
}

function playRound(event){
    let outcome;

    let humanChoice = event.target.id;
    let computerChoice = getComputerChoice();
    
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

// function playGame (){
//     let humanScore = 0;
//     let computerScore = 0;
//     let roundResult;
    
//     for (let i = 0; i < 5; i++){
//         roundResult = playRound(getHumanChoice(), getComputerChoice());
//         if (roundResult === 2) {humanScore++}
//         else if (roundResult === 3) {computerScore++}
//     }
//     if (humanScore === computerScore){
//         console.log("This game ends in a tie!")
//     } else if (humanScore > computerScore){
//         console.log("Nice job, you won the game!")
//     } else {
//         console.log("You lost that game! Too bad!")
//     }
// }

let choices = document.querySelector("#choices");
let button = document.querySelector("#Rock");

choices.addEventListener("click", playRound);

