const gameBoard = (function() {
    let board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    const markupBoard = document.querySelector('#board')
    const displayBoard = () =>  {
        markupBoard.style.display = 'grid';
        for (const slot of board) {
            const emptySlot = document.createElement('div')
            emptySlot.style.border = '2px solid white'
            emptySlot.style.cursor =  'pointer'
            markupBoard.appendChild(emptySlot)
        }
    }

    return {board, displayBoard}
})();

const Player = (name, choice) => {
    const getName = () => name;
    const getChoice = () => choice;
    return {getName, getChoice}
}

const gameFlow = (function() {
    const playerOne = Player('name', 'O');
    const playerTwo = Player('name', 'X')
    const initGame = () => {
        playerOne.name = document.querySelector('#playerOne input').value
        playerTwo.name = document.querySelector('#playerTwo input').value
        document.querySelector('#playerOne #name').textContent = playerOne.name
        document.querySelector('#playerTwo #name').textContent = playerTwo.name
        hidePreGame()
        gameBoard.displayBoard()
    };
    const hidePreGame = () => {
        const playerInput = document.querySelectorAll('#players input');
        playerInput.forEach((input) => {
            input.style.display = 'none';
        });
        const startGame = document.querySelector('#startGame');
        startGame.style.display = 'none';
    }

    return {
        initGame,
    }
})();

const startGame = document.querySelector('#startGame')
startGame.addEventListener('click', gameFlow.initGame)