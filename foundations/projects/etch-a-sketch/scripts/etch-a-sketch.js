const DEFAULT_GRID_SIZE = 16;
const MAX_GRID_SIZE = 100;

function createGrid(numOfTiles = DEFAULT_GRID_SIZE) {
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
}

function colorBox(color = "grey") {
    const gridBoxes = document.querySelectorAll('div.grid-box');
    gridBoxes.forEach((box) => {
        box.addEventListener('mouseover', (e) => {
            box.style.backgroundColor = color;
        })
    })
}

function getSliderValue() {
    var slider = document.getElementById('tileRange');
    return slider.value;
}

function main() {
    createGrid(getSliderValue());
    colorBox();
}

main();