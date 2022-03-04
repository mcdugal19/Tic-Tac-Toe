const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  PlayerOrder: XorO,
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
  //scoreDisplay: [score1, score2, scorePC],

  // finished: clearboardfunc
};
let p1score = document.querySelector(".score1");
  p1score.innerHTML = gameState.p1score;

  let p2score = document.querySelector(".score2");
  p2score.innerHTML = gameState.p2score;

  let PCscore = document.querySelector(".scorePC");
  PCscore.innerHTML = gameState.PCscore;

const grid = document.querySelector(".grid");

//board checker needs to be inside grid listener
grid.addEventListener("click", function (event) {
  const coordinateArray = event.target.id.split(",");
  console.log(coordinateArray); //remove this later
  const x = coordinateArray[0];
  const y = coordinateArray[1];

  // not quite functioning *overwrite not present
  // add all of this to a function
  winningcomboX(event.target, x, y);
});

// with extra time work to reduce the # of if statements
function winningcomboX(e, x, y) {
  if (e !== "X" || "O") {
    gameState.board[x][y] = gameState.currentPlayer;
    if (gameState.currentPlayer === "X") {
      e.innerText = "X";
      gameState.currentPlayer = "O";
      if (
        gameState.board[0][0] === "X" &&
        gameState.board[0][1] === "X" &&
        gameState.board[0][2] === "X"
      ) {
        gameState.p2score++;
        p2score.innerHTML = gameState.p2score;
        window.alert("Player X won");
      } else if (
        gameState.board[0][0] === "X" &&
        gameState.board[1][0] === "X" &&
        gameState.board[2][0] === "X"
      ) {
        window.alert("Player X won");
      } else if (
        gameState.board[2][0] === "X" &&
        gameState.board[2][1] === "X" &&
        gameState.board[2][2] === "X"
      ) {
        window.alert("Player X won");
      } else if (
        gameState.board[0][2] === "X" &&
        gameState.board[1][2] === "X" &&
        gameState.board[2][2] === "X"
      ) {
        window.alert("Player X won");
      } else if (
        gameState.board[0][0] === "X" &&
        gameState.board[1][1] === "X" &&
        gameState.board[2][2] === "X"
      ) {
        window.alert("Player X won");
      } else if (
        gameState.board[0][2] === "X" &&
        gameState.board[1][1] === "X" &&
        gameState.board[2][0] === "X"
      ) {
        window.alert("Player X won");
      } else if (
        gameState.board[0][1] === "X" &&
        gameState.board[1][1] === "X" &&
        gameState.board[2][1] === "X"
      ) {
        window.alert("Player X won");
      } else if (
        gameState.board[1][0] === "X" &&
        gameState.board[1][1] === "X" &&
        gameState.board[1][2] === "X"
      ) {
        window.alert("Player X won");
      }
    } else if (gameState.currentPlayer === "O") {
      event.target.innerText = "O";
      gameState.currentPlayer = "X";
      if (
        gameState.board[0][0] === "O" &&
        gameState.board[0][1] === "O" &&
        gameState.board[0][2] === "O"
      ) {
        window.alert("Player O won");
      } else if (
        gameState.board[0][0] === "O" &&
        gameState.board[1][0] === "O" &&
        gameState.board[2][0] === "O"
      ) {
        window.alert("Player O won");
      } else if (
        gameState.board[2][0] === "O" &&
        gameState.board[2][1] === "O" &&
        gameState.board[2][2] === "O"
      ) {
        window.alert("Player O won");
      } else if (
        gameState.board[0][2] === "O" &&
        gameState.board[1][2] === "O" &&
        gameState.board[2][2] === "O"
      ) {
        window.alert("Player O won");
      } else if (
        gameState.board[0][0] === "O" &&
        gameState.board[1][1] === "O" &&
        gameState.board[2][2] === "O"
      ) {
        window.alert("Player O won");
      } else if (
        gameState.board[0][2] === "O" &&
        gameState.board[1][1] === "O" &&
        gameState.board[2][0] === "O"
      ) {
        window.alert("Player O won");
      } else if (
        gameState.board[0][1] === "O" &&
        gameState.board[1][1] === "O" &&
        gameState.board[2][1] === "O"
      ) {
        window.alert("Player O won");
      } else if (
        gameState.board[1][0] === "O" &&
        gameState.board[1][1] === "O" &&
        gameState.board[1][2] === "O"
      ) {
        window.alert("Player O won");
      }
    }
  }
}

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

//** WHAT IS THIS FOR??? I FORGOT */
function getVal() {
  let value = document.getElementById("nameInput");
  console.log(value);
}
getVal();

// Submit button eventListener (maybe use a ternary)
nameSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  if (gameState.playerOneName === "") {
    gameState.playerOneName = nameInput.value;
  } else if (gameState.playerOneName !== "") {
    gameState.playerTwoName = nameInput.value;
  }
  let playerOneName = document.querySelector(".playerOneName");
  playerOneName.innerHTML = 'Player One: ' + gameState.playerOneName;

  let playerTwoName = document.querySelector(".playerTwoName");
  playerTwoName.innerHTML = 'Player Two: ' + gameState.playerTwoName;

  let playerPCName = document.querySelector(".playerPCName");
  playerPCName.innerHTML = 'Player PC: ' + gameState.playerPCName;

  
  console.log(gameState.playerOneName);
  console.log(gameState.playerTwoName);
});

//**BUTTON TO CHOOSE 1P OR 2P? follow up on deselect when both are clicked*/
//
let button1 = document.createElement("button");
button1.innerText = "Single Player Game?";

let h1tag = document.getElementsByTagName("h1")[0];

let button2 = document.createElement("button");
button2.innerText = "Two Player Game?";

let selectedColor = ".darkgrey";

//Player Turn Display
// let playerTurnDisplay = document.createElement("p")
// playerTurnDisplay.innerText =`Player unassigned` + gameState.playerOneName + ` goes first`

// H1 TAG ORDER (reverse)
// h1tag.after(playerTurnDisplay);

h1tag.after(nameForm);

h1tag.after(enterName);

h1tag.after(button2);

h1tag.after(button1);

// SCORE TICKER VARIABLES (i++ each score with each win)
// function scoreTick() {
//   for (let i = 0; i <= 10; i++) {
//     let score1value = [i];
//   }
//   return score1value;
// }
//
// let score1 = document.getElementsByClassName("score1");
// score1.innerText = "PLAYER ONE:" + nameInput + "" +score1value

// let score2 = document.getElementsByClassName("score2");

// let scorePC = document.getElementsByClassName("scorePC");

button1.addEventListener("click", function (event) {
  gameState.PlayerOrder();

  gameState.singlePlayer = true;

  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("darkgrey");
  }
});

button2.addEventListener("click", function (event) {
  gameState.PlayerOrder();

  gameState.singlePlayer = false;
  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("darkgrey");
  }
});

function colorize(event) {
  const target = event.target;

  if (event.target.tagName === "button") {
    event.target.classList.toggle(selectedColor);
    console.log(event.target, "color");
  }
  console.log(event.target.tagName, "outside if");
}

//**RANDOMIZE ORDER FUNCTION */
//WANT To make it random, insert variable
// then add a function to randomize the x and o even vs odd
// math.floor(math.random()) look up doc *change X
function XorO() {
  let random = Math.floor(Math.random() * 10);
  if ((gameState.singlePlayer = false)) {
    if (random % 2 == 0) {
      ((gameState.playerOne = "O"), (gameState.currentPlayer = "O")),
        (gameState.playerTwo = "X");
    } else {
      ((gameState.playerTwo = "O"), (gameState.currentPlayer = "O")),
        (gameState.playerOne = "X");
    }
  } else if (random % 2 == 0) {
    ((gameState.playerOne = "O"), (gameState.currentPlayer = "O")),
      (gameState.playerPC = "X");
  } else {
    ((gameState.playerOne = "X"), (gameState.currentPlayer = "O")),
      (gameState.playerPC = "O");
  }
}

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
//         //increment winnerscore(function needed)
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
