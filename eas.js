// 2023.Feb.12 
// Basic functionalities are completed for the Etch-a-Sketch
// Rainbow button is not functioning properly, but will update buttonRainbow() in the future.

// get random rgb 
function randomRGB() {
    // rgb is created by rgb(#,#,#); where # is between 1-256
    let r = Math.random() * (256);
    let g = Math.random() * (256);
    let b = Math.random() * (256);
    let rgb = `rgb(${ r },${ g },${ b })`;
    return rgb;
}

function changeColor(e) {
    // add property that would change color if mouse is hovered
    this.classList.add("hovered");
};

// change the background of hovered squares to rainbow
function setHovertoRainbow(e) {
    const sqrs = document.querySelectorAll(".hovered");
    sqrs.forEach(sqr => sqr.style.backgroundColor = randomRGB());
};
// .style.backgroundColor = randomRGB();

// create hover effect
function hover() {
    // when the div class="square" is hovered, change color 
    const sqrs = document.querySelectorAll(".square");
    sqrs.forEach(sqr => sqr.addEventListener("mouseover", changeColor));
}

// create the entire grid depending on the number of squares for each row
function createGrid(sqrsEachrow) {
    // create rows
    for (let i = 0; i < sqrsEachrow; i++) {
        // create row element by adding class="row" 
        const row = document.createElement("div");
        row.classList.add("row");
        // create squares for the rows
        for (let j = 0; j < sqrsEachrow; j++) {
            // for each row, attatch square elements to the row
            const square = document.createElement('div');
            square.classList.add("square");
            row.appendChild(square);
        }
        const grid = document.querySelector(".grid");
        // add each row to the entire grid
        grid.appendChild(row);
    }
    hover();
};

// function that removes current grid
// prevents new grids merging with previous grids
function removeGrid() {
    // remove all elements from the grid
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove());
};

// promts message when clicked the "Number of squares per side" button
function promptMsg(e) {
    // prompt message, default 30
    let numSqrs = window.prompt("Enter number of squares per side", 30);
    // As long as the number of squares per side are equal or smaller to 64
    if (numSqrs <= 64) {
        // remove grid to prevent merging with previous grids
        removeGrid();
        // create grid based off number of squares prompted
        createGrid(numSqrs);
    }
}

// erases all etch marks by removing the "hovered" attribute
function eraseHover(e) {
    const sqrs = document.querySelectorAll(".square");
    sqrs.forEach(sqr => sqr.classList.remove("hovered"));
}

// Start of Script -------------------------------

createGrid(30);

// when button is clicked, change number of squares in each row
const buttonPromt = document.querySelector(".prompt");
buttonPromt.addEventListener("click", promptMsg);

// when Erase button is clicked, erase all hovered squares
const buttonErase = document.querySelector(".erase");
buttonErase.addEventListener("click", eraseHover);

// when Rainbow button is clicked, change color to randomRGB();
const buttonRainbow = document.querySelector(".rainbow");
buttonRainbow.addEventListener("click", setHovertoRainbow);




