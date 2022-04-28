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

function addElement (elementType = 'div', sourceContainer, newElement, textContent, classDesc = "newElement") {
    newElement = document.createElement(elementType);
    newElement.textContent = textContent;
    newElement.classList.add(classDesc);
    sourceContainer.appendChild(newElement);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function main () {
    // Initialization of game variables
    let playerSelection = null;
    let singleResult = null;
    let singleGame = null;
    const winningScore = 5;
    let playerScore = 0;
    let computerScore = 0;

    const gameButtons = document.querySelectorAll('button.game-buttons');
    const gameResults = document.querySelector('div.game-results');
    const gameScore = document.querySelector('div.game-score');
    let singleScore = null;

    let roundCount = 1; // Start at round 1

    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Add the Game Score section only on the first click of a button
            if (roundCount === 1) {
                addElement('div', gameScore, singleScore, "Game Score", 'single-score');
            }
            roundCount++;   // Increment the round number

            // The game is active as long as neither player has reached the winning score
            if (playerScore < winningScore && computerScore < winningScore) {
                playerSelection = button.id;
                singleGame = singleRound(playerSelection);
    
                addElement('div', gameResults, singleResult, singleGame, classDesc = "single-result");
                if (singleGame.toLowerCase().includes("win")) {
                    playerScore++;
                }
                else if (singleGame.toLowerCase().includes("lose")) {
                    computerScore++;
                }
                addElement    
            }
            else {
                endGame(playerScore, computerScore, winningScore);
            }
        });
    });    

    function endGame (playerScore, computerScore, winningScore = 5) {
        if (playerScore === winningScore || computerScore === winningScore) {
            gameButtons.forEach((button) =>  {
                button.disabled = true; // Disable the game buttons to prevent any further selections
            })
            let finalWinner = null;
            if (playerScore > computerScore) {
                finalWinner = "Congrats! You won the game!";
            }
            else if (computerScore > playerScore) {
                finalWinner = "You lost the game.";
            }
    
            // Print the final score and the winner
            finalScore = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
            addElement('div', gameResults, singleResult, finalWinner, classDesc = 'final-winner');
            addElement('div', gameResults, singleResult, finalScore, classDesc = 'final-winner');

            playAgain();
        }
    }    

    function playAgain() {
        // Create a new button to prompt the player if they wish to play the game again
        let newButton = null;
        addElement('button', gameResults, newButton, "Play Again?", 'play-again-button')

        let playAgainButton = document.querySelector('button.play-again-button');
        playAgainButton.addEventListener('click', () => {
            roundCount = 1;
            playerScore = 0;
            computerScore = 0;
            removeAllChildNodes(gameResults);
            removeAllChildNodes(gameScore);
            gameButtons.forEach((button) =>  {
                button.disabled = false;
            })
        }) 
    }
}

main();