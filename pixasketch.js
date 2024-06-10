const canvasDiv = document.getElementById("canvas");
const clearBtn = document.getElementById("clearBtn");
const newCanvasBtn = document.getElementById("newCanvasBtn");
const monoBtn = document.getElementById("monochromeBtn");
const colorBtn = document.getElementById("randomColorBtn");
const grayscaleBtn = document.getElementById("grayscaleBtn");
const modeSpan = document.getElementById("mode");

let numRows = 16;
let numCols = 16;
let rowHeight = 720 / numRows;
let colWidth = 960 / numCols;
let renderMode = "mono";

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
        let pixColor = "gray";
        if (renderMode === "rand") {
            pixColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        } else if (renderMode === "gs") {
            pixColor = "black";
        }
        curPixel.style.backgroundColor = pixColor;
        if (renderMode === "gs") {
            let curOpacity = parseInt(curPixel.style.opacity * 100) / 100;
            if (curOpacity < 1) {
                let newOpacity = curOpacity + 0.1;
                newOpacity = newOpacity>1 ? 1 : newOpacity;
                curPixel.style.opacity = newOpacity;
            }
        }
        else {
            curPixel.style.opacity = 1;
        }
    }
});

clearBtn.addEventListener('click', e => {
    canvasDiv.replaceChildren();
    setupGrid(numRows, numCols);
});

newCanvasBtn.addEventListener('click', e => {
    canvasDiv.replaceChildren();
    numRows = parseInt(prompt("Enter number of rows:", 16));
    numCols = parseInt(prompt("Enter number of columns:", 16));
    numRows = numRows<2 ? 2 : numRows;
    numRows = numRows>100 ? 100 : numRows;
    numCols = numCols<2 ? 2 : numCols;
    numCols = numCols>100 ? 100 : numCols;
    rowHeight = 720 / numRows;
    colWidth = 960 / numCols;
    setupGrid(numRows, numCols);
});

monoBtn.addEventListener('click', e => {
    modeSpan.textContent = "Monochrome";
    renderMode = "mono";
});

colorBtn.addEventListener('click', e => {
    modeSpan.textContent = "Random Color";
    renderMode = "rand";
});
grayscaleBtn.addEventListener('click', e => {
    modeSpan.textContent = "Grayscale";
    renderMode = "gs";
});

setupGrid(numRows, numCols);