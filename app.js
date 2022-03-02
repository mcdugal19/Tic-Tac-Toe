const gameState = {
    board: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
    ],
    currentPlayer: 'X' || 'O',
    // finished: clearboardfunc
}

const grid = document.querySelector('.grid')

grid.addEventListener('click', function (event){
    const coordinateArray = event.target.id.split(',')
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

//**HEADER */
let h1 = document.querySelector('h1')
function makeh1(h1){
h1.innerText('TIC TAC TOE')
}
innerText.value = h1.innerText
console.log(h1)


//**SCORE TICKER */

//**BUTTON TO CHOOSE 1P OR 2P? */

//Render Function ==> Loop over the board, use the
// indexes and values to query the element and 
// update it in the browser

//update progress
function update(progress) {
    gameState.board[x][y] += progress

    if(gameState.board = finished
    ){
        gameState.board = finished
    }
}
//alternative below
// function gameLoop(){
//     window.requestAnimationFrame(gameLoop);
//     Game.update();
//   }


function updateScore() {
    //update score ticker
}


//winning functions
// check every possibility? no
// any 3 X in a line?
// or any 3 O in a line
