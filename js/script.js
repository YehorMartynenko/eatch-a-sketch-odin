const container = document.querySelector("#container");
let gridSize = 16;

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
setDrawMode();

const sizeSelector = document.querySelector("#size");
sizeSelector.addEventListener("click", function(e){
    gridSize = prompt('Select grid size(from 4 to 100)');
    if(gridSize<4) gridSize=4;
    if(gridSize>100) gridSize=100;
    drawGrid(gridSize);
    setDrawMode();
});

function setDrawMode() {
    const gridElements = document.querySelectorAll(".gridElement");
    console.log(gridElements);
    gridElements.forEach((el) => {
        el.addEventListener("mouseenter", function(e) {
            this.style.backgroundColor = getRandomColor();
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
