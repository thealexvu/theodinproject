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

function addDiv (sourceContainer, newDiv, textContent, classDesc = "addDiv") {
    newDiv = document.createElement('div');
    newDiv.textContent = textContent;
    newDiv.classList.add(classDesc);
    sourceContainer.appendChild(newDiv);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function main () {
    let playerSelection = null;
    let singleResult = null;
    let singleGame = null;
    let gameCount = 0;

    const winningScore = 5;
    let playerScore = 0;
    let computerScore = 0;
    let finalWinner = null;

    const gameButtons = document.querySelectorAll('button.game-buttons');
    const gameResults = document.querySelector('div.game-results');

    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore < 5 && computerScore < 5) {
                gameCount++;
                playerSelection = button.innerText;
                singleGame = singleRound(playerSelection);
    
                addDiv(gameResults, singleResult, (`Game ${gameCount}: ` + singleGame), classDesc = "single-result");
                if (singleGame.toLowerCase().includes("win")) {
                    playerScore++;
                }
                else if (singleGame.toLowerCase().includes("lose")) {
                    computerScore++;
                }    
            }

            if (playerScore === 5 || computerScore === 5) {
                gameButtons.forEach((button) =>  {
                    button.disabled = true;
                })
                if (playerScore > computerScore) {
                    finalWinner = "Congrats! You won the game!";
                }
                else if (computerScore > playerScore) {
                    finalWinner = "You lost the game.";
                }
                addDiv(gameResults, singleResult, finalWinner, classDesc = "final-winner");
                finalScore = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
                addDiv(gameResults, singleResult, finalScore, classDesc = "final-winner");

                let newButton = document.createElement('button');
                newButton.textContent = "Play Again?";
                newButton.classList.add('play-again-button');
                gameResults.appendChild(newButton);

                let playAgainButton = document.querySelector('button.play-again-button');
                playAgainButton.addEventListener('click', () => {
                    gameCount = 0;
                    playerScore = 0;
                    computerScore = 0;
                    removeAllChildNodes(gameResults);    
                    gameButtons.forEach((button) =>  {
                        button.disabled = false;
                    })
                })
            }
        });
    });    
}

main();

/* function game(numOfRounds = 5) {
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
*/