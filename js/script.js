const container = document.querySelector("#container");

for(let i = 0; i<32; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 0; j<32; j++){
        const grid = document.createElement("div");
        grid.classList.add("gridElement");
        row.appendChild(grid);
    }
}
