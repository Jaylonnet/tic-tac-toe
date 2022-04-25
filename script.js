const gameBoard = (function() {
    let board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    const markupBoard = document.querySelector('#board')
    const displayBoard = () =>  {
        markupBoard.style.display = 'grid';
        for (const slot of board) {
            const emptySlot = document.createElement('div')
            emptySlot.addEventListener('click', markBoard)
            emptySlot.textContent = slot
            markupBoard.appendChild(emptySlot)
        }
    }

    const markBoard = (e) => {
        e.target.textContent = gameFlow.getCurrentPlayer().getChoice()
        e.target.removeEventListener("click", markBoard)
        gameFlow.setCurrentPlayer()
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
    const playerTwo = Player('name', 'X');
    let currentPlayer = null;
    const initGame = () => {
        playerOne.name = document.querySelector('#playerOne input').value
        playerTwo.name = document.querySelector('#playerTwo input').value
        document.querySelector('#playerOne h2').textContent = playerOne.name
        document.querySelector('#playerTwo h2').textContent = playerTwo.name
        hidePreGame()
        gameBoard.displayBoard()
        currentPlayer = playerOne
    };
    const hidePreGame = () => {
        const playerInput = document.querySelectorAll('#players input');
        playerInput.forEach((input) => {
            input.style.display = 'none';
        });
        const startGame = document.querySelector('#startGame');
        startGame.style.display = 'none';
    }
    const getCurrentPlayer = () => {
        return currentPlayer;
    }
    const setCurrentPlayer = () => {
        if (currentPlayer == playerOne) {
            currentPlayer = playerTwo
        } else {
            currentPlayer = playerOne
        }
    }
    return {
        initGame,
        getCurrentPlayer,
        setCurrentPlayer
    }
})();

const startGame = document.querySelector('#startGame')
startGame.addEventListener('click', gameFlow.initGame)