function changeColor(e) {
    // add property that would 
    console.log(e);
    this.classList.add("hovered");
};

// create 16x rows for grid
function createGrid(sqrsEachrow) {
    for (let i = 0; i < sqrsEachrow; i++) {
        // create row element, with class "row{row_number}"
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < sqrsEachrow; j++) {
            // select row and add 16x squares to the row
            const square = document.createElement('div');
            square.classList.add("square");
            // create hover effect
            // when the div class="square" is hovered, change color 
            square.addEventListener("mouseover", changeColor);
            row.appendChild(square);
        }
        const grid = document.querySelector(".grid");
        grid.appendChild(row);
    }
};

// function that removes current grid
function removeGrid() {
    const rows = document.querySelectorAll(".row");
    console.log(rows);
    rows.forEach(row => row.remove());
};

function promptMsg(e) {
    let numSqrs = window.prompt("Enter number of squares per side", 16);
    if (numSqrs <= 100) {
        removeGrid();
        createGrid(numSqrs);
    }
}

// when button is clicked, change number of squares in each row
const buttonPromt = document.querySelector("button");
buttonPromt.addEventListener("click", promptMsg);


