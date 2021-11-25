let grid = document.getElementById('grid');
let SIDE = 8;
let SIDEPX = 800;

function createGrid(side, sidePx, grid) {
    const cellsidenum = (sidePx/side).toFixed();
    console.log(cellsidenum)
    cellSide = `${cellsidenum}px`;
    for(let i = 0; i < side; i++) {
        row = document.createElement('div');
        row.style.display = 'flex';
        row.style.flexDirection = 'row';
        row.style.height = cellSide;
        row.classList.add('row')
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
createGrid(SIDE, SIDEPX, grid)
function makeBoxesDrawable() {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.addEventListener('mouseover', becomeBlack)
    });
}
makeBoxesDrawable();

function becomeBlack(e) {
    e.target.style.backgroundColor = 'black';
}
newgrid = document.querySelector('button');
newgrid.addEventListener('click', () => {grid = newGrid(grid);})

function newGrid(grid) {
    grid.remove();
    body = document.querySelector('body');
    newgrid = document.createElement('div');
    newgrid.setAttribute('id', 'grid');
    createGrid(promptGridSize(), SIDEPX, newgrid);
    body.appendChild(newgrid);
    makeBoxesDrawable();
    return newgrid;
}

function promptGridSize() {
    let size = 0;
    while(size < 1 || size > 100 || typeof size != 'number') {
        size = prompt('Enter new grid size between 1 and 100!');
        size = +size;
    }
    return size;
}