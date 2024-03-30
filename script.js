document.addEventListener("DOMContentLoaded", function() {
    const gameboard = document.getElementById('game-board');
    const cells = [];

    for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', () => handleCellClick(cell));
    gameboard.appendChild(cell);
    cells.push(cell);
    }
})