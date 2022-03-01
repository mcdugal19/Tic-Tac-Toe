// Here's our game object:


let gameState = {
    players: ['x', 'o'],
    Xclick: 'X',
    Oclick: 'O',
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],

    gameStatus: 'playing',
    // getRemaining: function(){
    //     return (this.goal - this.currentScore)
    // },
  }

// create board (why doesn't this show up?)
let gameState.board = document.getElementById("table"),
let b1 = document.getElementsByTagNameNS('td')[0]
let b2 = gameState.board[0][1]
let b3 = gameState.board[0][2]
let b4 = gameState.board[1][0]
let b5 = gameState.board[1][1]
let b6 = gameState.board[1][2]
let b7 = gameState.board[2][0]
let b8 = gameState.board[2][1]
let b9 = gameState.board[2][2]


console.log(b1)
function markXorO(){
    
    if(players === 'X'){
    board.appendChild(b1)
    b1.innerText = 'X'
    }
    else{
        board.appendChild(b1)
        b1.innerText = 'O'
    }
}


button.addEventListener('click', function(){
    markXorO()
    // renderGame()
})






// board.appendChild()

// // = write functions to manipulate gamestate after every click
//   const board = document.querySelector('.board')

//   const button = document.createElement('button')
//   button.classList.add()
//   board.appendChild(button)
//   button.innerText = "Choose Single or Double Player"

//   console.log(board)
//     function markX(){
//   gameState.board [0][0]

//   }

//   function markO(){

//   }

//   function checkgame(){

//   }

// // make display box to display current player's turn
// const displayBox = di

// // render game
// function renderGame(){
//     displayBox.innerText = gameState.currentScore
//     gameStatus.innerText = gameState.gameStatus
// }


// // = design computer responses for single player


// // give them options to choose single or double player

// // make them work together

// Listen for click on board and re-render
// button.addEventListener('click', function(){
//     incrementScore()
//     renderGame()
// })