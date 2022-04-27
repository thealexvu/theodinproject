function computerPlay() {
    let randomNumber = Math.trunc(Math.random() * 100 % 3); // Returns either a 0, 1, 2

    switch(randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function singleRound (playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();
    let playerWin = null;

    if (playerSelection === computerSelection) {
        playerWin = null;
    }
    else {
        switch (playerSelection) {
            case "rock":
                switch (computerSelection) {
                    case "paper":
                        playerWin = false;
                        break;
                    case "scissors":
                        playerWin = true;
                        break;
                }
                break;
            case "paper":
                switch (computerSelection) {
                    case "rock":
                        playerWin = true;
                        break;
                    case "scissors":
                        playerWin = false;
                        break;
                }
                break;
            case "scissors":
                switch (computerSelection) {
                    case "rock":
                        playerWin = false;
                        break;
                    case "paper":
                        playerWin = true;
                        break;
                }
                break;
            default:
                return "Invalid value. Please try again.";
        }
    }

    function printWinner (playerWin, playerSelection, computerSelection) {
        playerSelection = capitalizeFirstLetter(playerSelection);
        computerSelection = capitalizeFirstLetter(computerSelection);
    
        if (playerWin === null) {
            return `Tie! You both picked ${playerSelection}`;
        }
        else if (playerWin === true) {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    return printWinner(playerWin, playerSelection, computerSelection)
}

function game(numOfRounds = 5) {
    let playerScore = 0;
    let computerScore = 0;
    let gameResult = null;

    for (let count = 0; count < numOfRounds; count++) {
        playerSelection = prompt("What's your hand?");
        gameResult = singleRound(playerSelection,);
        console.log(gameResult);

        if (gameResult.toLowerCase().includes("win")) {
            playerScore++;
        }
        else if (gameResult.toLowerCase().includes("lose")) {
            computerScore++;
        }
        console.log(`Player Score: ${playerScore}   Computer Score: ${computerScore}`);    
    }

    if (playerScore > computerScore) {
        return "Congrats! You won the game!";
    }
    else if (computerScore > playerScore) {
        return "You lost the game.";
    }
}

console.log(game());

