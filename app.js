const gameState = {
    board: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
    ],
    currentPlayer: 'X',
}

const grid = document.querySelector('.grid')

grid.addEventListener('click', function (event){
    const coordinateArray = event.target.dispatchEvent.split(',')
    console.log(coordinateArray)
    const x = coordinateArray[0]
    const y = coordinateArray[1]
    gameState.board[x][y] = gameState.currentPlayer
    if (gameState.currentPlayer === 'X') {
        gameState.currentPlayer = 'O'
    } else if (gameState.currentPlayer === 'O'){
        gameState.currentPlayer = 'X'
    }
})

//Render Function ==> Loop over the board, use the
// indexes and values to query the element and 
// update it in the browser