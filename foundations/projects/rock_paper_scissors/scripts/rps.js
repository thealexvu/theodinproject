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

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('clicked');
}

function main () {
    // Initialization of game variables
    let singleGame = null;
    let singleResult = null;
    const winningScore = 5;
    let playerScore = 0;
    let computerScore = 0;

    const gameButtons = document.querySelectorAll('button.game-buttons');
    const gameResults = document.querySelector('div.game-results');
    const gameScore = document.querySelector('div.game-score');
    let singleScore = null;

    let roundCount = 1; // Start at round 1

    // const path_selector = document.querySelectorAll('path');
    // path_selector.forEach((path) => {
    //     path.addEventListener('transitionend', removeTransition);
    // })

    // const computerHands = document.querySelectorAll('button.computer-hands');

    const playerHand = document.querySelector('div.game-play-player');
    const computerHand = document.querySelector('div.game-play-computer');

    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // button.classList.add('clicked');
            // button.addEventListener('transitionend', removeTransition);
            // let path = document.querySelector(`path.${button.id}-svg`);
            // path.classList.add('clicked');
            // path.addEventListener('transitionend', removeTransition);

            let playerSelection = button.id;
            let computerSelection = computerPlay();

            // let playerHandImg = document.createElement('img');
            // playerHandImg.classList.add('playerHandImg');
            // playerHandImg.src = `img/${playerSelection}.svg`;
            // playerHand.appendChild(playerHandImg);

            // let computerHandImg = document.createElement('img');
            // computerHandImg.classList.add('computerHandImg');
            // computerHandImg.src = `img/${computerSelection}_computer.svg`;
            // computerHand.appendChild(computerHandImg);

            // setTimeout( () => {
            //     playerHandImg.remove();
            //     computerHandImg.remove();
            // }, 3000);

            let playerHandSvg = document.createElement('object');
            playerHandSvg.classList.add('playerHandSvg');
            playerHandSvg.data = `img/${playerSelection}.svg`;
            playerHand.appendChild(playerHandSvg);

            let computerHandSvg = document.createElement('object');
            computerHandSvg.classList.add('computerHandSvg');
            computerHandSvg.data = `img/${computerSelection}_computer.svg`;
            computerHand.appendChild(computerHandSvg);

            setTimeout( () => {
                playerHandSvg.remove();
                computerHandSvg.remove();
            }, 3000);

            let svg = document.querySelector(`svg.${button.id}-svg`);
            svg.classList.add('clicked');
            svg.addEventListener('transitionend', removeTransition);

            // let svg_computer = document.querySelector(`svg.${computerSelection}-svg-computer`);
            // svg_computer.classList.add('clicked');
            // svg_computer.addEventListener('transitionend', removeTransition);

            // Add the Game Score section only on the first click of a button
            if (roundCount === 1) {
                addElement('div', gameScore, singleScore, "Game Score", 'single-score');
            }
            roundCount++;   // Increment the round number

            // The game is active as long as neither player has reached the winning score
            if (playerScore < winningScore && computerScore < winningScore) {

                singleGame = singleRound(playerSelection, computerSelection);
    
                addElement('div', gameResults, singleResult, singleGame, classDesc = "single-result");
                if (singleGame.toLowerCase().includes("win")) {
                    playerScore++;
                    let img = document.querySelector(`object.playerHandSvg`);
                    img.classList.add('clicked', 'win');
                    img.addEventListener('transitionend', () => {
                        removeTransition;
                        img.classList.remove('clicked', 'win');
                    });
                    let img_computer = document.querySelector(`object.computerHandSvg`);
                    img_computer.classList.add('clicked', 'lose');
                    img_computer.addEventListener('transitionend', () => {
                        removeTransition;
                        img_computer.classList.remove('clicked', 'lose');
                    });
                }
                else if (singleGame.toLowerCase().includes("lose")) {
                    computerScore++;
                    let img = document.querySelector(`object.playerHandSvg`);
                    img.classList.add('clicked', 'lose');
                    img.addEventListener('transitionend', () => {
                        removeTransition;
                        img.classList.remove('clicked', 'lose');
                    });
                    let img_computer = document.querySelector(`object.computerHandSvg`);
                    img_computer.classList.add('clicked', 'win');
                    img_computer.addEventListener('transitionend', () => {
                        removeTransition;
                        img_computer.classList.remove('clicked', 'win');
                    });
                }
                else {
                    let img = document.querySelector(`object.playerHandSvg`);
                    img.classList.add('clicked', 'tie');
                    img.addEventListener('transitionend', () => {
                        removeTransition;
                        img.classList.remove('clicked', 'tie');
                    });
                    let img_computer = document.querySelector(`object.computerHandSvg`);
                    img_computer.classList.add('clicked', 'tie');
                    img_computer.addEventListener('transitionend', () => {
                        removeTransition;
                        img_computer.classList.remove('clicked', 'tie');
                    });
                }
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