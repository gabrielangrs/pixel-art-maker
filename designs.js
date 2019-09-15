// Stores table from document into variable
let grid_table = document.getElementById("pixelCanvas");

function makeGrid() {
	// Clears the current grid before creating a new one
    clearGrid();
    // Stores values of height and width into variables
    let inputHeight = document.getElementById("inputHeight").value;
    let inputWidth = document.getElementById("inputWidth").value;
    // Loop over values to create new grid
    for (let h = 0; h < inputHeight; h++) {
        const new_row = grid_table.insertRow(h);
            for (let w = 0; w < inputWidth; w++) {
                const new_column = new_row.insertCell(w);
                // Add event listeners to each cell for detecting clicks
                new_column.addEventListener("click", changeColor);
                }
        }
}

function clearGrid(){
	// Loops over the table to remove cells until none left
    while (grid_table.firstChild) {
    grid_table.removeChild(grid_table.firstChild);
    }
}

function changeColor() {
	// Stores color value into variable
    let inputColor = document.getElementById("colorPicker").value;
    // Applies style to cell as background color
    this.setAttribute("style", `background-color: ${inputColor}`);
}
