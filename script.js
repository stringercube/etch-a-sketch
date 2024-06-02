// function to draw grid size

function drawGrid(size) {
    let container = document.querySelector('.container');
    for (let i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < size; j++) {
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

// event to check correct input for size, erase previous grid and trigger draw grid function

document.querySelector('#squaresNumber').addEventListener('click', (e) => {
    let squares = window.prompt("Enter number of squares: (default 16)", 16);
    squares = Number(squares);
    while (squares > 100 || isNaN(squares) || squares < 1) {
        squares = window.prompt("Enter A NUMBER of squares and min 1 max 100: (default 16)", 16);
    } 
    while (document.querySelector('.column') !== null) {
        let eraseColumn = document.querySelector('.column');
        eraseColumn.remove();
    }
    drawGrid(squares);
});

//add event listener for coloring grid

document.querySelector('#randomColor').addEventListener('click', gridColor);

// function for grid coloring

function gridColor() {
    const gridCells = document.querySelectorAll('.row');
    gridCells.forEach((cell) => {
        cell.removeEventListener('click', applyBlackeningColor);
        cell.addEventListener('click', applyRandomColor);
    });
}

// function for applying color to target element

function applyRandomColor(e) {
    e.currentTarget.style.backgroundColor = randomColor();
}

// add event listener for blackening grid

document.querySelector('#blackeningColor').addEventListener('click', gridPencil);

function gridPencil() {
    const gridCells = document.querySelectorAll('.row');
    gridCells.forEach((cell) => {
        cell.removeEventListener('click', applyRandomColor);
        cell.addEventListener('click', applyBlackeningColor);
    });
}

// function for applying blackening effect

function applyBlackeningColor(e) {
    const cell = e.currentTarget;
    let opacity = getComputedStyle(cell).getPropertyValue('opacity');
    if (opacity === '1') {
        opacity = '0'; // Set default opacity if not defined
    }
    cell.style.backgroundColor = blackingColor(opacity);
    cell.style.opacity = opacity < 1 ? parseFloat(opacity) + 0.1 : 1;
}


// function to randomly color each grid cell

function randomColor() {
    let r = Math.round((Math.random() * 255));
    let g = Math.round((Math.random() * 255));
    let b = Math.round((Math.random() * 255));
    return `rgb(${r}, ${g}, ${b})`;
}

// increase opacity by returning black with increased opacity

function blackingColor(opacity) {
    let opacityNumber = Number(opacity);
    let alphaOpacity = opacityNumber + 0.1;
    if (alphaOpacity >= 1.0) {
        alphaOpacity = 1;
    }
    return `rgba(0, 0, 0, ${alphaOpacity})`;
}

