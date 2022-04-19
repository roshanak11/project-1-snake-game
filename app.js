// * Dom Elements
const grid = document.querySelector('.grid');
// const snake = document.querySelector('.snake');
const cells = [];
const scoreboard = document.querySelector('.score'); // select scoreboard from HTML

// * grid variables
const width = 10;
const totalCells = width * width; // the grid is going to be 10 x 10 cells
let snakeMovement = 'ArrowRight'; // Snake will automatically move to the right. Later in the game, we will change the automatic direction of the snake based on the last movement of the player's keystrooke.



// * game variables
let snakePosition = [55, 54, 53]; 
//! snakeSpeed = 10 make speed a variable and you can manipulate it everytime it gets a fruit
//! if statement snake can't be on fruit
let fruitPosition = Math.floor(Math.random() * totalCells);
let speed = 4000;

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


// document.addEventListener('keyup', (event) => {
//   snakeMovement = event.code;
// }

//* Make Snake move automatically in the direction it's already headed
function snakeSlithers() {
  const slithering = setInterval(() => {
    console.log(snakeMovement === 'ArrowRight');
    //* Make snake move automatically by using a forEach loop to add 1 cells to every item in array
    for (i = 0; i < snakePosition.length; i++) {
      if (snakePosition[i]){
      console.log(snakePosition[i]);

      ///****LOOK AT CODE HERE: Use multiple if statements to move the snake automatically according to last key direction.
        if (snakeMovement === 'ArrowRight') {
          keyRight();
        } else if (snakeMovement === 'ArrowLeft') {
         keyLeft();
        } else if (snakeMovement === 'ArrowUp') {
          keyUp();
        } else if (snakeMovement === 'ArrowDown') {
          keyDown();
        }



     // This part of code speeds up snake and makes tail grow longer as it eats fruit   
      console.log('snakePosition: ', snakePosition);
      console.log('fruitPosition: ', fruitPosition);
      if(snakePosition[0] === fruitPosition){
        console.log('collisionPoints');
        // scoreboard.innerHTML += 10 + 'points';
        cells[fruitPosition].classList.remove('fruit');
        snakePosition.push(snakePosition.slice(-1)); // grabs last item of array and then pushes it to make tail grow by 1 cell when it eats the fruit
        console.log(snakePosition);
    //! SNAKE WILL SPEED UP WHEN IT EATS FRUIT, turn this into a loop
      if (snakePosition[0] === fruitPosition && speed > 1000){
      speed = speed - 100;
    slithering = setInterval(snakeSlithers, speed);
      console.log("The speed is now " + speed);
    } else if (speed === 1000) {
      clearInterval(slithering); // it stops the snake from moving once the speed is 1000
      console.log("You win!");
    }
    //!SNAKE SPEED ENDS
        //! add innerhTML to score/points +10, use the ${} js thingy
        //! turn this into a function, then append the function to make snake grow longer and add points
      }
      addSnake(snakePosition); // ! add snake back at the new position
    }
    }
  }, 1000);
}




//* Keyboard strokes move the snake

document.addEventListener('keyup', (event) => {

// removeSnake(snakePosition); // ! remove snake from the current position
  // ! Get the key the user pressed
  const key = event.code;
  console.log(key);
  snakeMovement = key;

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



//* Make Snake move automatically, call function.
snakeSlithers();





// ## MVP Requirements
// // * The snake should be able to eat food to grow bigger snake.length + 2?
// * The game should end when the snake hits the wall or itself //! POPUP GAME OVER
// // * Snake speeds up as it eats more



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


///? COLLISION DETECTION HITS WALL OR ITSELF
//? APPLE CANNOT BE SAME POSITION AS SNAKE