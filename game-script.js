function getComputerChoice (){
    let ranNum = Math.random();
    let choice;

    choice = (ranNum < 0.333)? 
    "Rock": (ranNum < 0.666)?
    "Paper": "Scissors";

    return choice;
}

function addScore (winner){
    if (winner === 'player') playerScore++;
    else computerScore++;
    score.textContent = `playerScore: ${playerScore} computerScore: ${computerScore}`;

    if(playerScore >= 5 || computerScore >= 5){
        let winner = (playerScore>computerScore) ?
        "player" : "computer";
        score.textContent = `playerScore: ${playerScore} computerScore: ${computerScore}
                            The ${winner} wins!`;
        playerScore = 0;
        computerScore = 0;
        return;
    }

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
            addScore("player");

            break;
        case 3:
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
            addScore("computer");
    }

    return outcome;

}

let results = document.querySelector("#results");
let score = document.querySelector("#score");
let choices = document.querySelector("#choices");

let playerScore = 0;
let computerScore = 0;
score.textContent = `playerScore: ${playerScore} computerScore: ${computerScore}`

choices.addEventListener("click", playRound);






