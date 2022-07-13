function createGrid(numOfTiles = 16) {
    const containerDiv = document.querySelector('div#container')
    let newRowDiv = null;
    let newColumnDiv = null;

    // Create the grid rows and columns
    for (let row = 0; row < numOfTiles; row++) {
        newRowDiv = document.createElement('div');
        newRowDiv.classList.add('grid=row');

        for (let column = 0; column < numOfTiles; column++) {
           newColumnDiv = document.createElement('div');
            newColumnDiv.classList.add('grid-column', 'grid-box');
            newRowDiv.appendChild(newColumnDiv);
        }

        containerDiv.appendChild(newRowDiv);
    }
}

function main() {
    createGrid(50);
}

main();