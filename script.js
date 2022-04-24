const gameBoard = (function() {
    board = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E']
    return {board}
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

gameFlow.initGame();

