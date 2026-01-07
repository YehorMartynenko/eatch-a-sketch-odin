const container = document.querySelector("#container");

for(let i = 0; i<11; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j<11; j++){
        const grid = document.createElement("div");
        grid.classList.add("gridElement");
        row.appendChild(grid);
    }
}

const gridElements = document.querySelectorAll(".gridElement");
console.log(gridElements);
gridElements.forEach((el) => {
    el.addEventListener("mouseenter", function(e) {
        this.style.backgroundColor = getRandomColor();
    })
})

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

    return "#" + color.join("");;
}
