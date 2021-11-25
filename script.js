let grid = document.getElementById('grid');
let side = 8;
let sidePx = 800;

function createGrid(side, sidePx, grid) {
    cellSide = `${sidePx/side}px`;
    for(let i = 0; i < side; i++) {
        row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flexDirection = 'row';
        row.style.height = cellSide;
        for(let i = 0; i < side; i++) {
            box = document.createElement('div');
            box.style.width = cellSide;
            box.style.height = cellSide;
            box.classList.add('box');
        
            row.appendChild(box);
        }
        grid.style.display = 'flex';
        grid.style.flexDirection = 'column';
        grid.appendChild(row);
    }
}
createGrid(side, sidePx, grid)

boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
    box.addEventListener('mouseover', becomeBlack)
});

function becomeBlack(e) {
    e.target.style.backgroundColor = 'black';
}