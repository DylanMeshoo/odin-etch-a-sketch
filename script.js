const gridWrapper = document.getElementById("grid-wrapper");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function makeRows(rows, cols) {
    gridWrapper.style.setProperty('--grid-rows', rows);
    gridWrapper.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', changeColor)
        cell.addEventListener('mousedown', changeColor)
        gridWrapper.appendChild(cell).className = "grid-item";
    };
};

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "blue"
}


makeRows(16, 16);