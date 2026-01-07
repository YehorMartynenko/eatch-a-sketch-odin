const container = document.querySelector("#container");
let gridSize = 16;
let colorMode = "black";

function drawGrid(size){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i<size; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j<size; j++){
            const grid = document.createElement("div");
            grid.classList.add("gridElement");
            row.appendChild(grid);
        }
    }
}

drawGrid(gridSize);
setDrawMode(colorMode);

const sizeSelector = document.querySelector("#size");
sizeSelector.addEventListener("click", function(e){
    gridSize = prompt('Select grid size(from 4 to 100)');
    if(gridSize<4) gridSize=4;
    if(gridSize>100) gridSize=100;
    drawGrid(gridSize);
    setDrawMode(colorMode);
});

function setDrawMode(mode) {
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((el) => {
        el.addEventListener("mouseenter", function(e) {
            if(mode == "random"){
                this.style.backgroundColor = getRandomColor();
            } else if (mode =="black"){
                this.style.opacity=Number(this.style.opacity) + 0.1;
                this.style.backgroundColor = "black";
            }
        })
    })
}

function getRandomColor(){
    let range = "0123456789ABCDEF";
    let color = new Array(6);
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random() * 16);
        console.log("random number: "+ random);
        console.log("random color: "+range.at(random));
        color.push(range.at(random));
    }
    console.log("#" + color.join(""));

    return "#" + color.join("");
}

const randomColorBtn = document.querySelector("#randomColor");
randomColorBtn.addEventListener("click", () => {
    colorMode = "random";
    setDrawMode(colorMode);
})

const blackColorBtn = document.querySelector("#blackColor");
blackColorBtn.addEventListener("click", () => {
    colorMode = "black";
    setDrawMode(colorMode);
})

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    drawGrid(gridSize);
    setDrawMode(colorMode);
});