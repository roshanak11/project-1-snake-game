// * Dom Elements
const grid = document.querySelector('.grid');
const cells = [];
const scoreboard = document.querySelector('.score'); // select scoreboard from HTML

// * grid variables
const width = 10;
const totalCells = width * width;


// * game variables
let snakePosition = [55, 54, 53]; // map through it
// first index is head
//create constant for index 0 in snakePosition
//you wanna add 1 add 1 and delete bum
//oppposite direction then
// 3 directions if the last key passes left then you can only go other 3 directions
// make an if statement for every move, if the index 1 is the same as head -1 you can't go left and if it's head +1 you can't go rigth
// snakeSpeed = 10 make speed a variable and you can manipulate it everytime it gets a fruit
// if statement snake can't be on fruit
// focus on left and right, then work on up and down
let fruitPosition = Math.floor(Math.random() * totalCells);

function addSnake () {
  snakePosition.map(position => {
    cells[position].classList.add('snake');
  })
}

function removeSnake () {
  snakePosition.map(position => {
    cells[position].classList.remove('snake');
  })
}

function createGrid() {
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cells.push(cell);
  }
  addSnake();
}

createGrid();



//!test it out. do all 4 key strokese h
// //* Snake tail moves //! test this out
// // We are going to add 1 to the head of the snake at index 0, and have index 1 of the array shift into the location of index 0, and index 2 shift into the location of index 1. We will remove the old snake and add the new snake array onto the grid.
function keyRight() {
  console.log("pressed");
  removeSnake(); // remove old snake array
  //! if (ArrowRight) {
    let head = snakePosition[0]; // access head location of snake array
    head += 1; // move head of snake one cell to the right 
    snakePosition.unshift(head); // removes old index 0 value of head array
    snakePosition.pop(); // removes last index value of snake array so that snake tail moves along
  //! }
  addSnake(); // add new snake array onto new location of grid
}

function keyLeft() {
  removeSnake(); // remove old snake array
  //! if (ArrowLeft) {
    let head = snakePosition[0]; // access head location of snake array
    head -= 1; // move head of snake one cell to the left 
    snakePosition.unshift(head); // removes old index 0 value of head array
    snakePosition.pop(); // removes last index value of snake array so that snake tail moves along
  //! }
  addSnake(); // add new snake array onto new location of grid
}

function keyUp() {
  removeSnake(); // remove old snake array
  // !if (ArrowUp) {
    let head = snakePosition[0]; // access head location of snake array
    head -= width; // move head of snake one cell up 
    snakePosition.unshift(head); // removes old index 0 value of head array
    snakePosition.pop(); // removes last index value of snake array so that snake tail moves along
  //! }
  addSnake(); // add new snake array onto new location of grid
}


function keyDown() {
  removeSnake(); // remove old snake array
  //! if (ArrowDown) {
    let head = snakePosition[0]; // access head location of snake array
    head += width; // move head of snake one cell down
    snakePosition.unshift(head); // removes old index 0 value of head array
    snakePosition.pop(); // removes last index value of snake array so that snake tail moves along
  //! }
  addSnake(); // add new snake array onto new location of grid
}





document.addEventListener('keyup', (event) => {

// removeSnake(snakePosition); // ! remove pikachu from the current position
  // ! Get the key the user pressed
  const key = event.code;
  console.log(key);

  // ! rowPosition and colPosition
  // const rowPosition = snakePosition % width;
  // const colPosition = Math.floor(snakePosition / width);

  if (key === 'ArrowLeft') { // && rowPosition > 0) { // ! Left. ADD NICK's FUNCTION HERE
    keyLeft();
    console.log("hello");
    // snakePosition -= 1
  } else if (key === 'ArrowRight') { // && rowPosition < width - 1) { // ! Right
    keyRight();
    // snakePosition += 1
  } else if (key === 'ArrowUp') { // && colPosition > 0) { // ! Up
    keyUp();
    // snakePosition -= width
  } else if (key === 'ArrowDown'){ // && colPosition < width - 1) { // ! Down
    keyDown();
    // snakePosition += width
  }
  console.log('snakePosition: ', snakePosition);
  console.log('fruitPosition: ', fruitPosition);
  if(snakePosition === fruitPosition){
    console.log('collisionPoints');
    // scoreboard.innerHTML += 10 + 'points';
    cells[fruitPosition].classList.remove('fruit')
    //! make snake longer
    //! add innerhTML to score/points +10, use the ${} js thingy
    //! turn this into a function, then append the function to make snake grow longer and add points
  }
  addSnake(snakePosition); // ! add snake back at the new position
})

//*Fruit moves around the board randomly
function fruitLocation() {
  setInterval(() => {
    cells[fruitPosition].classList.remove('fruit');
    fruitPosition = Math.floor(Math.random() * cells.length); 
    cells[fruitPosition].classList.add('fruit');
  }, 4000);
}


fruitLocation();

//* Make Snake move automatically
function snakeSlithers() {
  setInterval(() => {
    //* Make snake move automatically by using a forEach loop to add 1 cells to every item in array
    for (i = 0; i < snakePosition.length; i++) {
      cells[snakePosition[i]].classList.remove('snake');
      snakePosition[i] += 1;
      // return snakePosition[0] += 1;
      // return snakePosition[1] += 1;
      // return snakePosition[2] += 1;
      cells[snakePosition[i]].classList.add('snake');
    }
  }, 4000);
}


snakeSlithers();

//! TO DO FIRST
//! snake has to move automayically, not just with keyboard stroke!
//! snake has to move with intervals, like the yellow dancefloor but instea dof randomly generating it'll pull numbers from array
//! and within interval remove the snake from where it is and change the numbers 
//! have your interval and inside it remove snake and think of how to change snake position array
// // for increasing speed turn this into if statement for if snake positon = apple postion
// const moveOneCell = (value) => {
//   return value + 1;
// }
// console.log(snakePosition.map(moveOneCell));

//!instead of random generated number you're gonna take numbers from the array and use the same code as above to make the snake MOVE
// function fruitLocation() {
//   setInterval(() => {
//     cells[fruitPosition].classList.remove('fruit');
//     fruitPosition = Math.floor(Math.random() * cells.length); 
//     cells[fruitPosition].classList.add('fruit');
//   }, 4000);
// }


// fruitLocation();



// // !Not working yet
// // * Score and Snake Size increase after eating fruit
// let snakeSize = 5;
// let score = 0;

// const snakeEatsFruit = () => {
//   score = score + 10;// iterate score  
//   snakeSize = 5 + snake; // when snake eats a fruit
// }


// for (let i = 0; i < snakePosition.length; i++) { 
// }


// //? Speed gets faster after Snake eats fruit 
// let speed = 2;

// function snakeWinning() {
//   console.log('Snake ate a fruit and is moving more quickly');
//   setTimeout(snakeWinning, 1000/speed); // Snake moves more quickly after it eats fruit
// }

// snakeWinning();

// //? if snake hits itself
// // if snake[i] ==== snake[0] || snake[1] || snake[2]
// //return console.log("Game over!"); but have it as a popup 
// let text = '';
// for (let i = 0; i > 500; i++) {
//   text =+ "the number is " + i;
//   remove snake
//   give cells css a color of green
//   add snake\
//   console.log(text)
//   if (i > 2){
//     console.log(i);
//   }
//   if snakelocation = snakelocation || apple location || outside grid{
//     popup GAME OVER
//   }
// }

// //? score
// let score = 0;
// score += 10;
// let scoreboard = document.querySelector('#score');
// scoreboard.innerTextHTML = (`score: ${score}`);

// // function scoreUpdate(){
// //   innertext.html = "score" += score
// // }
