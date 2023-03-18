const gridWrapper = document.getElementById("grid-wrapper");

function makeRows(rows, cols) {
  gridWrapper.style.setProperty('--grid-rows', rows);
  gridWrapper.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridWrapper.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);