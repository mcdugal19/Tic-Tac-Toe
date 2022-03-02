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



// Here's our game object:


let gameState = {
    players: ['x', 'o'],
    // Xclick: function click(){'X'
    //     },
    // Oclick: function click(){'O'
    //     },
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    playerStatus: player1 || player2 || playerPC,

    player1: 'X',
    player2: 'O',
    playerPC:'O', //(option to play 2nd? for now no)
    //scoreStatus: 
    gameStatus: 'playing',

    // getRemaining: function(){
    //     return (this.goal - this.currentScore)
    // },
  }

// create board (why doesn't this show up?)(created in HTML)
// gameState.board[0][0] = document.getElementById("td")

// let table = document.getElementsByTagName('table')


//CREATE BUTTON TO CHOOSE (PlayerStatus)
let h1 = document.getElementsByTagName('h1')
let playerbutton = document.createElement(h1.append)









//ASSIGN boxes to a variable

let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let b7 = document.getElementById('b7')
let b8 = document.getElementById('b8')
let b9 = document.getElementById('b9')

//*** ASSIGN X ON CLICK LISTENER */
// (Need this function to apply only once, if statement)
// (Need to reproduce this for O)
// (Need a player state to determine which player is making a mark)
// (Need an if statement to apply only X || O based on player status)
function markXb1(){
       b1.append('X')
}

b1.addEventListener("click", markXb1)

function markXb2(){
    b2.append('X')
}

b2.addEventListener("click", markXb2)


function markXb3(){
    b3.append('X')
}

b3.addEventListener("click", markXb3)

function markXb4(){
    b4.append('X')
}

b4.addEventListener("click", markXb4)


function markXb5(){
    b5.append('X')
}

b5.addEventListener("click", markXb5)


function markXb6(){
    b6.append('X')
}

b6.addEventListener("click", markXb6)


function markXb7(){
    b7.append('X')
}

b7.addEventListener("click", markXb7)


function markXb8(){
    b8.append('X')
}

b8.addEventListener("click", markXb8)


function markXb9(){
    b9.append('X')
}

b9.addEventListener("click", markXb9)


// console.log(b1, 'Hello')

//     else{
//         board.appendChild(b1)
//         b1.innerText = 'O'
//     }
// }


// b1.addEventListener('click', markXorO)

    // renderGame()








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