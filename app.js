const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  
  singlePlayer: true,
  playerOne: "",
  playerTwo: "",
  playerPC: "",
  currentPlayer: "",
  playerOneName: "",
  playerTwoName: "",
  playerPCName: "",
  p1score: 0,
  p2score: 0,
  PCscore: 0,
  playerTurn: "",
  // still unable to clear boxes or clear board.
//   clearBoxes: [
//       ["", "", ""],
//       ["", "", ""],
//       ["", "", ""],
//   ],

}

let p1score = document.querySelector(".score1");
p1score.innerHTML = gameState.p1score;

let p2score = document.querySelector(".score2");
p2score.innerHTML = gameState.p2score;

let PCscore = document.querySelector(".scorePC");
PCscore.innerHTML = gameState.PCscore;


const grid = document.getElementById("grid");

const cellElements = document.querySelectorAll('[data-cell]')

const winningArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const winningMessageText = document.querySelectorAll('[data-winning-message-text]')
const winningMessage = document.getElementsByClassName("winning-message");

const xClass = 'x'
const oClass = 'o'

let oTurn  
let pcTurn

initBoard()

function initBoard (){
    XorO()

    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once:true})
    
    })
    setGridHover()
}


function handleClick(e) {
    const winningMessageText = document.querySelectorAll('[data-winning-message-text]')
const winningMessage = document.getElementsByClassName("winning-message");
    const cell = e.target
    const currentClass = oTurn ? oClass : xClass
    placeMark(cell, currentClass)
    if (checkForWin(currentClass)){
        matchOver(false)
    } else if (isCat()) {
        matchOver(true)
    } else {
        changeTurnTwoPlayer()
        changeTurnSinglePlayer()
        setGridHover()
        document.getElementsByClassName("winning-message").classList.remove("show");
    }
    
    //placeMark
    //check for win
    //check for Draw
    // switch turn

}

function matchOver(cat){
    winningMessage.classList.add("show")
    if (cat) {
        winningMessageText.innerText = `Cat!`
    } else {
        winningMessageText.innerText = `${oTurn ? "O's" : "X's"} Wins's!`
    }
    
}

function isCat(){
    return [...cellElements].every(cell => {
            return cell.classList.contains(xClass) || cell.classList.contains(oClass)
    })
}

function checkForWin (currentClass){
    return winningArr.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function changeTurnTwoPlayer(){
    oTurn = !oTurn
}

function changeTurnSinglePlayer(){
    pcTurn = !pcTurn

}

function setGridHover(){
    grid.classList.remove(xClass)
    grid.classList.remove(oClass)

    if (oTurn) {
        grid.classList.add(oClass)
    } else {
        grid.classList.add(xClass)
    }

}
//board checker needs to be inside grid listener
// grid.addEventListener("click", function (event) {
//   const coordinateArray = event.target.id.split(",");
//   console.log(coordinateArray); //remove this later
//   const x = coordinateArray[0];
//   const y = coordinateArray[1];

//   // not quite functioning *overwrite not present
//   // add all of this to a function
//   markXorO(event.target, x, y);
//   checkForWin(event.target, x, y);
//   clearBoard(event, x, y, gameState);
  
// });


// with extra time work to reduce the # of if statements
// function markXorO(e, x, y) {
//   if (event.target !== "X" || "O") {
//     gameState.board[x][y] = gameState.currentPlayer;
    
//     if (gameState.currentPlayer === "X") {
//       e.innerText = "X";
//       gameState.currentPlayer = "O";
        
//     } else if (gameState.currentPlayer === "O") {
//       e.innerText = "O";
//       gameState.currentPlayer = "X";
      
//   } else {
//       e.stopPropagation();
//   }
// }
// }
//*** clear function not working */
// function clearBoard(e, x, y, board, clearBoard){
    
//     if(
//         gameState.board[0][0] === "X" &&
//         gameState.board[0][1] === "X" &&
//         gameState.board[0][2] === "X"
//         ) {
//         document.replaceWith(gameState.clearBoard);
//         }
// }

// function checkForWin(e, x, y){
//     if (
//         gameState.board[0][0] === "X" &&
//         gameState.board[0][1] === "X" &&
//         gameState.board[0][2] === "X"
//       ) {
//         gameState.p1score++;
//         p1score.innerHTML = gameState.p1score;
//         window.alert("Player X won");
//       } else if (
//         gameState.board[0][0] === "X" &&
//         gameState.board[1][0] === "X" &&
//         gameState.board[2][0] === "X"
//       ) {
//         gameState.p1score++;
//         p1score.innerHTML = gameState.p1score;
//         window.alert("Player X won");
//       } else if (
//         gameState.board[2][0] === "X" &&
//         gameState.board[2][1] === "X" &&
//         gameState.board[2][2] === "X"
//       ) {
//         gameState.p1score++;
//         p1score.innerHTML = gameState.p1score;
//         window.alert("Player X won");
//       } else if (
//         gameState.board[0][2] === "X" &&
//         gameState.board[1][2] === "X" &&
//         gameState.board[2][2] === "X"
//       ) {
//         gameState.p1score++;
//         p1score.innerHTML = gameState.p1score;
//         window.alert("Player X won");
//       } else if (
//         gameState.board[0][0] === "X" &&
//         gameState.board[1][1] === "X" &&
//         gameState.board[2][2] === "X"
//       ) {
//         gameState.p1score++;
//         p1score.innerHTML = gameState.p1score;
//         window.alert("Player X won");
//       } else if (
//         gameState.board[0][2] === "X" &&
//         gameState.board[1][1] === "X" &&
//         gameState.board[2][0] === "X"
//       ) {
//         gameState.p1score++;
//         p1score.innerHTML = gameState.p1score;
//         window.alert("Player X won");
//       } else if (
//         gameState.board[0][1] === "X" &&
//         gameState.board[1][1] === "X" &&
//         gameState.board[2][1] === "X"
//       ) {
//         gameState.p1score++;
//         p1score.innerHTML = gameState.p1score;
//         window.alert("Player X won");
//       } else if (
//         gameState.board[1][0] === "X" &&
//         gameState.board[1][1] === "X" &&
//         gameState.board[1][2] === "X"
//       ) {
//         gameState.p1score++;
//         p1score.innerHTML = gameState.p1score;
//         window.alert("Player X won");
//       }
//       if (
//         gameState.board[0][0] === "O" &&
//         gameState.board[0][1] === "O" &&
//         gameState.board[0][2] === "O"
//       ) {
//         gameState.p2score++;
//         p2score.innerHTML = gameState.p2score;
//         window.alert("Player O won");
//       } else if (
//         gameState.board[0][0] === "O" &&
//         gameState.board[1][0] === "O" &&
//         gameState.board[2][0] === "O"
//       ) {
//         gameState.p2score++;
//         p2score.innerHTML = gameState.p2score;
//         window.alert("Player O won");
//       } else if (
//         gameState.board[2][0] === "O" &&
//         gameState.board[2][1] === "O" &&
//         gameState.board[2][2] === "O"
//       ) {
//         gameState.p2score++;
//         p2score.innerHTML = gameState.p2score;
//         window.alert("Player O won");
//       } else if (
//         gameState.board[0][2] === "O" &&
//         gameState.board[1][2] === "O" &&
//         gameState.board[2][2] === "O"
//       ) {
//         gameState.p2score++;
//         p2score.innerHTML = gameState.p2score;
//         window.alert("Player O won");
//       } else if (
//         gameState.board[0][0] === "O" &&
//         gameState.board[1][1] === "O" &&
//         gameState.board[2][2] === "O"
//       ) {
//         gameState.p2score++;
//         p2score.innerHTML = gameState.p2score;
//         window.alert("Player O won");
//       } else if (
//         gameState.board[0][2] === "O" &&
//         gameState.board[1][1] === "O" &&
//         gameState.board[2][0] === "O"
//       ) {
//         gameState.p2score++;
//         p2score.innerHTML = gameState.p2score;
//         window.alert("Player O won");
//       } else if (
//         gameState.board[0][1] === "O" &&
//         gameState.board[1][1] === "O" &&
//         gameState.board[2][1] === "O"
//       ) {
//         gameState.p2score++;
//         p2score.innerHTML = gameState.p2score;
//         window.alert("Player O won");
//       } else if (
//         gameState.board[1][0] === "O" &&
//         gameState.board[1][1] === "O" &&
//         gameState.board[1][2] === "O"
//       ) {
//         gameState.p2score++;
//         p2score.innerHTML = gameState.p2score;
//         window.alert("Player O won");
//       }
      
      
//     }

// function PCmark(e, x, y, boxes){
//     // if statement to determine whether single player = true
//     // if (true){ mark currentPlayer "X" or "O" in random box}
//     // use random box from math.floor.random
//     // increment player turn
//     gameState.board[x][y] = gameState.boxes;
//     let random = Math.floor(Math.random() * 10);
//     if(gameState.singlePlayer = true){

//     }
// }

// let PCmark = setTimeout(function PCmark(e, x, y) {
    
// }, 1000);

//**HEADER */
//**User name input */ //add event listener
let enterName = document.createElement("p");
enterName.append("Enter Your Name Below:");

let nameForm = document.createElement("form");
// nameForm.setAttribute("method", "post");
// nameForm.setAttribute("action", "submit.php");

let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "username");
nameInput.setAttribute("id", "nameInput");

let nameSubmit = document.createElement("input");
nameSubmit.setAttribute("type", "submit");
nameSubmit.setAttribute("id", "nameSubmit");
// nameSubmit.setAttribute("value", "Submit");

nameForm.appendChild(nameInput);
nameForm.appendChild(nameSubmit);


// Submit button eventListener (maybe use a ternary)
nameSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  if (gameState.playerOneName === "") {
    gameState.playerOneName = nameInput.value;
  } else if (gameState.playerOneName !== "") {
    gameState.playerTwoName = nameInput.value;
  }
  let playerOneName = document.querySelector(".playerOneName");
  playerOneName.innerHTML = "Player One: " + gameState.playerOneName;

  let playerTwoName = document.querySelector(".playerTwoName");
  playerTwoName.innerHTML = "Player Two: " + gameState.playerTwoName;

  let playerPCName = document.querySelector(".playerPCName");
  playerPCName.innerHTML = "Player PC: Smarty" + gameState.playerPCName;

  console.log(gameState.playerOneName);
  console.log(gameState.playerTwoName);
});

function XorO() {

    let random = Math.floor(Math.random() * 10);
  
    if ((gameState.singlePlayer = false)) {
      if (random % 2 == 0) {
        ((gameState.playerOne = xClass), (gameState.currentPlayer = xClass)),
          (gameState.playerTwo = oClass)
      } else {
        ((gameState.playerTwo = xClass), (gameState.currentPlayer = xClass)),
          (gameState.playerOne = oClass)
      }
    } else if (random % 2 == 0) {
      ((gameState.playerOne = xClass), (gameState.currentPlayer = xClass)),
        (gameState.playerPC = oClass)
    } else {
      ((gameState.playerOne = oClass), (gameState.currentPlayer = oClass)),
        (gameState.playerPC = xClass)
    }
  }
//**BUTTON TO CHOOSE 1P OR 2P? follow up on deselect when both are clicked*/
//
let button1 = document.createElement("button");
button1.innerText = "Single Player Game?";

let h1tag = document.getElementsByTagName("h1")[0];

let button2 = document.createElement("button");
button2.innerText = "Two Player Game?";

let selectedColor = ".darkgrey";

button1.addEventListener("click", function (event) {
    gameState.singlePlayer = true;
    XorO(event);

  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("darkgrey");
  }

});

button2.addEventListener("click", function (event) {
    gameState.singlePlayer = false;
    XorO(event);

  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("darkgrey");

  }
});

// let PlayerTurnDisplay = document.createElement("p");
// PlayerTurnDisplay.innerText = `Current Player: ${gameState.playerTurn}`;
//Player Turn Display
// let playerTurnDisplay = document.createElement("p")
// playerTurnDisplay.innerText =`Player unassigned` + gameState.playerOneName + ` goes first`

// H1 TAG ORDER (reverse)
// h1tag.after(playerTurnDisplay);
// h1tag.after(PlayerTurnDisplay)

h1tag.after(nameForm);

h1tag.after(enterName);

h1tag.after(button2);

h1tag.after(button1);


//**RANDOMIZE ORDER FUNCTION */
//WANT To make it random, insert variable
// then add a function to randomize the x and o even vs odd
// math.floor(math.random()) look up doc *change X


//**SCORE TICKER */
// should display player names and 'Computer' for 1p

//Render Function ==> Loop over the board, use the
// indexes and values to query the element and
// update it in the browser

//** UPDATE PROGRESS, */
// function update(progress) {
//     gameState.board[x][y] += progress
//     setInterval() => {
//     if(gameState.board = finished
//     ){
//         //clear gameState.board
//         //increment winnerScore(function needed)
//     } else {
//             //gameState.board = keep playing
//     }
//     }
// }
//alternative below
// function gameLoop(){
//     window.requestAnimationFrame(gameLoop);
//     Game.update();
//   }

//** UPDATE SCORE FUNCTION */
// function updateScore() {
//     //update score ticker
// }

//winning functions
// check every possibility? no
// any 3 X in a line?
// or any 3 O in a line
// 8 possible per player, easiest is an if else brute force
