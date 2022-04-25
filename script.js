const gameBoard = (function (board) {
      
})(document.querySelector('#board'));

const displayController = (function () {
    const _addEventToStartBtn = (function () {
        document.querySelector('#startGame')
            .addEventListener('click', () => _initStartGame());
    })();

    const _initStartGame = () => {
        _removeInputs();
    };

    const _removeInputs = () => {
        document.querySelectorAll('#players input').forEach((input) => {
            input.style.display = 'none';
        });
        
    };

})();

const player = (name, choice) => {
    const getName = () => name;
    const getChoice = () => choice;
    return {getName, getChoice}
}

const gameController = (function () {
    
    let playerOne = null;
    let playerTwo = null;
    
    const _createPlayers = (playerOneName, playerTwoName) => {
        playerOne = player(playerOneName, 'X');
        playerTwo = player(playerTwoName, 'O');
    };


})();