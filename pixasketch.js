const canvasDiv = document.getElementById("canvas");

const setupGrid = (canvasHeight, canvasWidth) => {
    console.log("setupGrid");
    for (let i=0; i<canvasHeight; i++) {
        for (let j=0; j<canvasWidth; j++) {
            const newDiv = document.createElement("div");
            newDiv.className="pixel";
            newDiv.id = i + "-" + "j";
            canvasDiv.appendChild(newDiv);
        }
    }
}

setupGrid(16,16);