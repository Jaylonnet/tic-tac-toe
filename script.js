const gameBoard = (function() {
    let board = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E']
    const markupBoard = document.querySelector('#board')
    return {board, markupBoard}
})();

const Player = (name, choice) => {
    const getName = () => { return name };
    const getChoice = () => { return choice }
    return {getName, getChoice}
}

const gameFlow = (function() {
    const initGame = () => {
    };
    return {
        initGame,
    }
})();