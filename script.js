const gameBoard = (function (board) {

    const boardArray = ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X']
    return {
        board,
        boardArray,
    }
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
        _showBoard(gameBoard.board);
        _addBoardSlots(gameBoard.boardArray, gameBoard.board);
        gameController.initGame(playerOneName, playerTwoName);
        _addEventListeners(document.querySelectorAll('#board div'));

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

    const _showBoard = (board) => {
        board.style.display = 'grid';
    };

    const _addBoardSlots = (boardArray, boardElement) => {
        let count = 0;
        for (let slot of boardArray) {
            const slot = document.createElement('div');
            slot.setAttribute('data-index', count);
            boardElement.appendChild(slot)
            count++
        };
    };

    const _addEventListeners = (nodeList) => {
        nodeList.forEach((slot) => {
            slot.addEventListener('click', (e) => {
                gameController.getCurrentPlayer().makeSelection(e);
            })
        });
    };

})();

const player = (name, choice) => {
    const getName = () => name;
    const getChoice = () => choice;

    const makeSelection = (e) => {
        e.target.textContent = getChoice()
        gameController.setPlayer()
    };
    return { getName, getChoice, makeSelection };
  };

const gameController = (function () {
    
    let playerOne = null;
    let playerTwo = null;
    let currentPlayer = null;
    
    const _createPlayers = (playerOneName, playerTwoName) => {
        playerOne = player(playerOneName, 'X');
        playerTwo = player(playerTwoName, 'O');
        setPlayer();
    };

    const setPlayer = () => {
        if (currentPlayer != playerOne) {
            currentPlayer = playerOne;
        } else {
            currentPlayer = playerTwo;
        };
    };

    const getCurrentPlayer = () => currentPlayer;

    const initGame = (playerOneName, playerTwoName) => {
        _createPlayers(playerOneName, playerTwoName);
    };

    return {
        initGame,
        getCurrentPlayer,
        setPlayer,
    }
})();