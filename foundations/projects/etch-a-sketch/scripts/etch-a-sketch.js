const DEFAULT_GRID_SIZE = 16;
const MAX_GRID_SIZE = 100;
const DEFAULT_GRID_COLOR = "grey";

function createGrid(numOfTiles = DEFAULT_GRID_SIZE) {
    clearContainer();
    const containerDiv = document.querySelector('div#container')
    let newColumnDiv = null;
    let newBoxDiv = null;

    // Create the grid rows and columns
    for (let row = 0; row < numOfTiles; row++) {
        newColumnDiv = document.createElement('div');
        newColumnDiv.classList.add('grid-column');

        for (let column = 0; column < numOfTiles; column++) {
            newBoxDiv = document.createElement('div');
            newBoxDiv.classList.add('grid-box');
            newColumnDiv.appendChild(newBoxDiv);
        }

        containerDiv.appendChild(newColumnDiv);
    }

    colorBox();
}

function colorBox(color = DEFAULT_GRID_COLOR) {
    const gridBoxes = document.querySelectorAll('div.grid-box');
    gridBoxes.forEach((box) => {
        box.addEventListener('mouseover', (e) => {
            box.style.backgroundColor = color;
        })
    })
}

function createNewGrid() {
    const tileRange = document.getElementById('tileRange');
    tileRange.addEventListener('click', () => {
        createGrid(tileRange.value);
    })
}

function createButtons() {
    const controlsDiv = document.getElementById('controls');
    let newButton = document.createElement('button');
    newButton.id = "clear-button"
    newButton.innerHTML = "Clear";
    controlsDiv.appendChild(newButton);
}

function clearContainer() {
    const containerDiv = document.getElementById('container');
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function clearButton() {
    const clearButton = document.getElementById('clear-button');
    const tileRange = document.getElementById('tileRange');
    let sliderValue = null;
    tileRange.addEventListener('click', () => {
        sliderValue = tileRange.value;
    })
    clearButton.addEventListener('click', (e) => {
        createGrid(sliderValue);
    })
}

function main() {
    createGrid();       // Creates initial grid on start-up
    createNewGrid();    // Creates new grid based on slider value
    createButtons();
    clearButton();
}

main();