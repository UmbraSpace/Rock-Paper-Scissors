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
            results.textContent = "It was a tie!";
            break;
        case 2:
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
            break;
        case 3:
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }

    return outcome;

}

let results = document.querySelector("#results");
let choices = document.querySelector("#choices");
choices.addEventListener("click", playRound);

while (true){
    
}

