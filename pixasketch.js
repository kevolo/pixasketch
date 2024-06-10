const canvasDiv = document.getElementById("canvas");
const clearBtn = document.getElementById("clearBtn");
const newCanvasBtn = document.getElementById("newCanvasBtn");

let numRows = 16;
let numCols = 16;
let rowHeight = 720 / numRows;
let colWidth = 960 / numCols;

const setupGrid = (canvasRows, canvasCols) => {
    //console.log("setupGrid");
    for (let i=0; i<canvasRows; i++) {
        for (let j=0; j<canvasCols; j++) {
            const newDiv = document.createElement("div");
            newDiv.className = "pixel";
            newDiv.id = i + "-" + j;
            newDiv.style.width = `${colWidth}px`;
            newDiv.style.height = `${rowHeight}px`;
            newDiv.style.backgroundColor = "darkgray";
            canvasDiv.appendChild(newDiv);
        }
    }
}

document.addEventListener('mouseover', function (e) {
    if (e.target.className === "pixel") {
        // console.log(e + " : " + e.target + " : " + e.target.id);
        const curPixel = document.getElementById(e.target.id);
        curPixel.style.backgroundColor = "gray";
    }
});

clearBtn.addEventListener('click', e => {
    canvasDiv.replaceChildren();
    setupGrid(numRows, numCols);
});

newCanvasBtn.addEventListener('click', e => {
    canvasDiv.replaceChildren();
    numRows = prompt("Enter number of rows:", 16);
    numCols = prompt("Enter number of columns:", 16);
    rowHeight = 720 / numRows;
    colWidth = 960 / numCols;
    setupGrid(numRows, numCols);
});

setupGrid(numRows, numCols);