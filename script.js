// function to draw grid size

function drawGrid(size) {
    let container = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.className = "column";
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.className = "row";
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

// function to check correct input for size, erase previous grid and 

document.querySelector('#squaresNumber').addEventListener('click', (e) => {
    //const { target } = e;
    let squares = window.prompt("Enter number of squares: (default 16)", 16);
    squares = Number(squares);
    while (squares > 100 || isNaN(squares) || squares < 1) {
        squares = window.prompt("Enter A NUMBER of squares and min 1 max 100: (default 16)", 16);
    } 
    while (document.querySelector(".column") !== null) {
        let eraseColumn = document.querySelector(".column");
        eraseColumn.remove();
    }
    drawGrid(squares);
});
