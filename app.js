// ## MVP Requirements
// * The snake should be able to eat food to grow bigger snake.length
//* The game should end when the snake hits the wall or itself 
// * Snake speeds up as it eats more


// * Dom Elements
const grid = document.querySelector('.grid');
const cells = [];
const scoreboard = document.querySelector('.score'); //! select scoreboard from HTML

// * grid variables
const width = 10;
const totalCells = width * width; // the grid is going to be 10 x 10 cells
let snakeMovement = 'ArrowRight'; // Snake will automatically move to the right. Later in the game, we will change the automatic direction of the snake based on the last movement of the player's keystrooke.

// * game variables
let snakePosition = [55, 54, 53];
let fruitPosition = Math.floor(Math.random() * totalCells);
let speed = 2000;
let score = 0;

function addSnake() {
  snakePosition.map(position => {
    cells[position].classList.add('snake');
  })
}

function removeSnake() {
  snakePosition.map(position => {
    cells[position].classList.remove('snake');
  })
}

// Creates grid
function createGrid() {
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cells.push(cell);
  }
  addSnake();
}

createGrid();



// //* Snake tail moves 
// We are going to add 1 to the head of the snake at index 0, and have index 1 of the array shift into the location of index 0, and index 2 shift into the location of index 1. We will remove the old snake and add the new snake array onto the grid.
function keyRight() {
  console.log("pressed");
  removeSnake(); // remove old snake array
  console.log(snakePosition);
  let head = snakePosition[0]; // access head location of snake array
  console.log(snakePosition);
  console.log(head);
  head += 1; // move head of snake one cell to the right 
  console.log(head);
  console.log(snakePosition);
  snakePosition.unshift(head); // removes old index 0 value of head array
  console.log(snakePosition);
  snakePosition.pop(); // removes last index value of snake array so that snake tail moves along
  console.log(snakePosition);
  addSnake(); // add new snake array onto new location of grid
}

function keyLeft() {
  removeSnake(); // remove old snake array
  let head = snakePosition[0]; // access head location of snake array
  head -= 1; // move head of snake one cell to the left 
  snakePosition.unshift(head); // removes old index 0 value of head array
  snakePosition.pop(); // removes last index value of snake array so that snake tail moves along
  addSnake(); // add new snake array onto new location of grid
}

function keyUp() {
  removeSnake(); // remove old snake array
  let head = snakePosition[0]; // access head location of snake array
  head -= width; // move head of snake one cell up 
  snakePosition.unshift(head); // removes old index 0 value of head array
  snakePosition.pop(); // removes last index value of snake array so that snake tail moves along
  addSnake(); // add new snake array onto new location of grid
}

function keyDown() {
  removeSnake(); // remove old snake array
  let head = snakePosition[0]; // access head location of snake array
  head += width; // move head of snake one cell down
  snakePosition.unshift(head); // removes old index 0 value of head array
  snakePosition.pop(); // removes last index value of snake array so that snake tail moves along
  addSnake(); // add new snake array onto new location of grid
}


//* Make Snake move automatically in the direction it's already headed
function snakeSlithers() {
  const slithering = setInterval(() => {
    console.log(snakeMovement === 'ArrowRight');
    //Use multiple if statements to move the snake automatically according to last key direction.
    const rowPosition = snakePosition[0] % width; //This code stops the snake from going through the wall on the left and right side of the grid
    const colPosition = Math.floor(snakePosition[0] / width); //This code also stops the snake from going through the wall on the top and bottom of the grid
    console.log(rowPosition);
    if (snakeMovement === 'ArrowRight' && rowPosition < width - 1) {
      keyRight();
    } else if (snakeMovement === 'ArrowLeft' && rowPosition > 0) {
      keyLeft();
    } else if (snakeMovement === 'ArrowUp' && colPosition > 0) {
      keyUp();
    } else if (snakeMovement === 'ArrowDown' && colPosition < width - 1) {
      keyDown();
    } else {
      alert("Game Over!"); // if snake hits the wall, a pop-up alert will state "Game Over!"
    }

    //The game should have a pop-up saying "Game Over!" when the snake hits itself
    if (
      (snakePosition[0] === snakePosition[1])
      ||
      (snakePosition[0] === snakePosition[2])
      ||
      (snakePosition[0] === snakePosition[3])
      ||
      (snakePosition[0] === snakePosition[4])
      ||
      (snakePosition[0] === snakePosition[5])
      ||
      (snakePosition[0] === snakePosition[6])
      ||
      (snakePosition[0] === snakePosition[7])
      ||
      (snakePosition[0] === snakePosition[8])
      ||
      (snakePosition[0] === snakePosition[9])) {
      console.log('game over');
      alert("Game over!");
    }


    // This part of code speeds up snake and makes tail grow longer as it eats fruit   
    console.log('snakePosition: ', snakePosition);
    console.log('fruitPosition: ', fruitPosition);
    if (snakePosition[0] === fruitPosition) {
      console.log('collisionPoints');
      // scoreboard.innerHTML += 10 + 'points';
      cells[fruitPosition].classList.remove('fruit');
      snakePosition.push(snakePosition.slice(-1)); // grabs last item of array and then pushes it to make tail grow by 1 cell when it eats the fruit
      console.log(snakePosition);
      //* Snake speed will increase each time it eats the fruit
      if (snakePosition[0] === fruitPosition) {
        clearInterval(slithering);
        speed = speed - 100;
        score += 100;
        snakeSlithers();
        console.log("The speed is now " + speed);
        scoreboard.innerText = (`Scoreboard: You won 100 points! The score is now ${score}`);
      } else if (speed === 1000) {
        clearInterval(slithering); // it stops the snake from moving once the speed is 1000
        console.log("You win!");
        alert("You win!");
      }
      //*Snake speed code ends
      //! add innerhTML to score/points +10, use the ${} js thingy
    }
    addSnake(snakePosition); // add snake back at the new position
  }, speed);
}


//* Keyboard strokes move the snake
document.addEventListener('keyup', (event) => {
  // ! Get the last key the user pressed
  const key = event.code;
  console.log(key);
  snakeMovement = key;
})



//!Fruit should start in random position but shouldn't move all the time. It should refresh after snake eats fruit. if (fruitPosition === snakePosition)/ maybe move interval
//*Fruit moves around the board randomly
function fruitLocation() {
  setInterval(() => {
    cells[fruitPosition].classList.remove('fruit');
    fruitPosition = Math.floor(Math.random() * cells.length);
    cells[fruitPosition].classList.add('fruit');
  }, 10000);
}


fruitLocation();


//! Fruit cannot land on snake
if (
  (fruitPosition === snakePosition[0])
  ||
  (fruitPosition === snakePosition[1])
  ||
  (fruitPosition === snakePosition[2])
  ||
  (fruitPosition === snakePosition[3])
  ||
  (fruitPosition === snakePosition[4])
  ||
  (fruitPosition === snakePosition[5])
  ||
  (fruitPosition === snakePosition[6])
  ||
  (fruitPosition === snakePosition[7])
  ||
  (fruitPosition === snakePosition[8])
  ||
  (fruitPosition === snakePosition[9])) {
    console.log("fruit landed on snake");
    cells[fruitPosition].classList.remove('fruit');
    fruitPosition = Math.floor(Math.random() * totalCells);
    cells[fruitPosition].classList.add('fruit');
}



//* Make Snake move automatically, call function.
snakeSlithers();



// //? score
// let score = 0;
// score += 10;
// let scoreboard = document.querySelector('#score');
// scoreboard.innerText = (`score: ${score}`);

// // function scoreUpdate(){
// //   innertext.html = "score" += score
// // }





// In your function to win your game:
// localStorage.setItem('level', 2)
// window.location.reload() // this will refresh your page
// Then when your game first starts:
// const level = Number(localStorage.getItem('level')) || 1

// if (level === 2) {
//    // Set whatever variables you'd like to set for your second level.   
// }