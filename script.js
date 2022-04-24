const gameBoard = (function() {
    let board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    const markupBoard = document.querySelector('#board')
    return {board, markupBoard}
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
        displayBoard()
    };
    const hidePreGame = () => {
        const playerInput = document.querySelectorAll('#players input');
        playerInput.forEach((input) => {
            input.style.display = 'none';
        });
        const startGame = document.querySelector('#startGame');
        startGame.style.display = 'none';
    }

    const displayBoard = () =>  {
        gameBoard.markupBoard.style.display = 'grid';
        for (const slot of gameBoard.board) {
            const emptySlot = document.createElement('div')
            emptySlot.style.border = '2px solid white'
            emptySlot.style.cursor =  'pointer'
            gameBoard.markupBoard.appendChild(emptySlot)
        }
    }


    return {
        initGame,
    }
})();

const startGame = document.querySelector('#startGame')
startGame.addEventListener('click', gameFlow.initGame)