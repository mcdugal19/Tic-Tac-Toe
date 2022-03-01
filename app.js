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
    player1: 'X' || 'O',
    player2: 'X' || 'O',
    playerPC: 'X' || 'O',
    //scoreStatus: 
    gameStatus: 'playing',

    // getRemaining: function(){
    //     return (this.goal - this.currentScore)
    // },
  }

// create board (why doesn't this show up?)
// gameState.board[0][0] = document.getElementById("td")

// let table = document.getElementsByTagName('table')
// let b1 = document.getElementsByTagName('td')[0]
// let b2 = document.getElementsByTagName('td'[1])
// let b3 = document.getElementsByTagName('td'[2])
// let b4 = document.getElementsByTagName('td'[3])
// let b5 = document.getElementsByTagName('td'[4])
// let b6 = document.getElementsByTagName('td'[5])
// let b7 = document.getElementsByTagName('td'[6])
// let b8 = document.getElementsByTagName('td'[7])
// let b9 = document.getElementsByTagName('td'[8])



let Xfill = 'X'
let b1button = document.getElementById('b1')

function markXorO(){
       b1.toggle(Xfill) 
         

}

b1button.addEventListener("click", markXorO)

// console.log(b1, 'Hello')
function markXorO(){
    b1.innerText = 'X'    
    }
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

  const button = document.createElement('button')
  button.classList.add()
  board.appendChild(button)
  button.innerText = "Choose Single or Double Player"

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