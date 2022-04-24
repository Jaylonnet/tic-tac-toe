const gameBoard = (function() {
    let board = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E']
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
        hidePreGameOps()
    };
    const hidePreGameOps = () => {
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