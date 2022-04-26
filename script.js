const gameBoard = (function (board) {
      
})(document.querySelector('#board'));

const displayController = (function () {
    const _addEventToStartBtn = (function () {
        document.querySelector('#startGame')
            .addEventListener('click', () => _initStartGame());
    })();

    const _initStartGame = () => {
        const playerOneName = document.querySelector('#playerOne input').value;
        const playerTwoName = document.querySelector('#playerTwo input').value;
        _removePreGameElements();
        _updateNameTags(playerOneName, playerTwoName);
        gameController.initGame(playerOneName, playerTwoName);

    };

    const _removePreGameElements = () => {
        document.querySelectorAll('#players input').forEach((input) => {
            input.style.display = 'none';
        });
        document.querySelector('#startGame').style.display = 'none';
    };

    const _updateNameTags = (playerOneName, playerTwoName) => {
        document.querySelector('#playerOne h2').textContent = playerOneName;
        document.querySelector('#playerTwo h2').textContent = playerTwoName;
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

    const initGame = (playerOneName, playerTwoName) => {
        _createPlayers(playerOneName, playerTwoName);
    };

    return {
        initGame,
    }
})();