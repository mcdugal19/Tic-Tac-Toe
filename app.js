const gameState = {
    board: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
    ],
    currentPlayer: 'X' || 'O', //WANT To make it random, insert variable
    // then add a function to randomize the x and o even vs odd
    // math.floor(math.random()) look up doc
    singlePlayer: true
    //pcPlayer: true || false
    // finished: clearboardfunc
}

const grid = document.querySelector('.grid')

// grid.addEventListener('click', function (event){
//     const coordinateArray = event.target.id.split(',')
//     console.log(coordinateArray)
//     const x = coordinateArray[0]
//     const y = coordinateArray[1]
//     gameState.board[x][y] = gameState.currentPlayer
//     if (gameState.currentPlayer === 'X') {
//         gameState.currentPlayer = 'O'
//     } else if (gameState.currentPlayer === 'O'){
//         gameState.currentPlayer = 'X'
//     }
// })

grid.addEventListener('click', function (event){
    const coordinateArray = event.target.id.split(',')
    console.log(coordinateArray)
    const x = coordinateArray[0]
    const y = coordinateArray[1]
    gameState.board[x][y] = gameState.currentPlayer
    if (gameState.currentPlayer === 'X') {
        event.target.innerText = 'X'
        gameState.currentPlayer = 'O'
    } else if (gameState.currentPlayer === 'O'){
        event.target.innerText = 'O'
        gameState.currentPlayer = 'X'
    }
})


//**HEADER */
//**BUTTON TO CHOOSE 1P OR 2P? follow up on deselect when both are clicked*/
let button1 = document.createElement('button');
button1.innerText= "Single Player Game?";
let h1tag = document.getElementsByTagName('h1')[0]
let button2 = document.createElement('button');
button2.innerText= "Two Player Game?";
h1tag.after(button2);
console.log(h1tag)
h1tag.after(button1);

let selectedColor = ".darkgrey";

button1.addEventListener('click', function (event){
    gameState.singlePlayer = false;
    console.log(event.target.tagName)
    if(event.target.tagName === 'BUTTON'){
        event.target.classList.toggle('darkgrey');
        console.log(event.target, 'color')
        }
    console.log(event.target, 'gameState changed')
})

button2.addEventListener('click', function (event){
    gameState.singlePlayer = false;
    console.log(event.target.tagName)
    if(event.target.tagName === 'BUTTON'){
        event.target.classList.toggle('darkgrey');
        console.log(event.target, 'color')
        }
    console.log(event.target, 'gameState changed')
})


function colorize (event){
    const target = event.target
    
        if(event.target.tagName === 'button'){
        event.target.classList.toggle(selectedColor);
        console.log(event.target, 'color')
        }
        console.log(event.target.tagName, 'outside if')
}

//**USER NAME INPUT */


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
