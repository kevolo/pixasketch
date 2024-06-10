const canvasDiv = document.getElementById("canvas");

const setupGrid = (canvasHeight, canvasWidth) => {
    console.log("setupGrid");
    for (let i=0; i<canvasHeight; i++) {
        for (let j=0; j<canvasWidth; j++) {
            const newDiv = document.createElement("div");
            newDiv.className="pixel";
            newDiv.id = i + "-" + j;
            canvasDiv.appendChild(newDiv);
        }
    }
}

document.addEventListener('click', function (e) {
    // console.log(e + " : " + e.target + " : " + e.target.id);
    const curPixel = document.getElementById(e.target.id);
    curPixel.style.backgroundColor = "gray";
});

const togglePixel = e => {
    console.log(e + " : " + e.target);
}

setupGrid(16,16);