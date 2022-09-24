// ## MVP Requirements
// * The snake should be able to eat food to grow bigger 
// * The game should end when the snake hits the wall or itself 
// * Snake speeds up as it eats more


// * Dom Elements
const grid = document.querySelector('.grid'); // selects grid div from HTML
const cells = []; // creates an array
const scoreboard = document.querySelector('.score'); // select scoreboard div from HTML

// * grid variables
const width = 10; // the width and height will be 10 cells
const totalCells = width * width; // the grid is going to be 10 x 10 cells
let snakeMovement = 'ArrowRight'; // Snake will automatically move to the right. Later in the game, we will change the automatic direction of the snake based on the last movement of the player's keystroke.

// * game variables
let snakePosition = [55, 54, 53]; // array of snake position starting in the middle of the grid in the very beginning of the game. I used let instead of const because we will be modifying this array over time as the snake position changes due to its movement across the board and as we add more cell indices (the tail gets longer when it eats the fruit).
let fruitPosition = Math.floor(Math.random() * totalCells); // the fruit will always start at a random position on the board and move around randomly throughout the game
let speed = 1800; // the starting speed of the snake is 1800 milliseconds or 18 seconds. I used let instead of const because this snake's speed will increase each time it eats the fruit.
let score = 0; // the starting score is 0 points. I used let instead of const because the score will increase each time the snake eats the fruit.

//Add snake to the grid
function addSnake() {
  snakePosition.map(position => {
    cells[position].classList.add('snake');
  })
}

//Remove snake from the grid
function removeSnake() {
  snakePosition.map(position => {
    cells[position].classList.remove('snake');
  })
}

// Creates grid, adds divs to the cells, then pushes them to the grid
function createGrid() {
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cells.push(cell);
  }
  addSnake();
}

createGrid(); // call Create Grid function



// //* Snake Head moves Right, Left, Up, Down to new location. Each index in Snake Tail shifts into the index value that came before it, so it is following along the direction of the snake appropriately like a snake that slithers.
// We are going to add 1 to the head of the snake at index 0, and have index 1 of the array shift into the location of index 0, and index 2 shift into the location of index 1. We will remove the old snake and add the new snake array onto the grid.
//Change Snake direction to moving Right
function keyRight() {
  removeSnake(); // remove old snake array
  let head = snakePosition[0]; // access head location of snake array
  head += 1; // move head of snake one cell to the right 
  snakePosition.unshift(head); // removes old index 0 value of head array
  snakePosition.pop(); // removes last index value of snake array so that snake tail moves along and doesn't leave a trail
  addSnake(); // add new snake array onto new location of grid
}

//Change Snake direction to moving Left
function keyLeft() {
  removeSnake(); // remove old snake array
  let head = snakePosition[0]; // access head location of snake array
  head -= 1; // move head of snake one cell to the left 
  snakePosition.unshift(head); // removes old index 0 value of head array
  snakePosition.pop(); // removes last index value of snake array so that snake tail moves along and doesn't leave a trail
  addSnake(); // add new snake array onto new location of grid
}

//Change Snake direction to moving Up
function keyUp() {
  removeSnake(); // remove old snake array
  let head = snakePosition[0]; // access head location of snake array
  head -= width; // move head of snake one cell up 
  snakePosition.unshift(head); // removes old index 0 value of head array
  snakePosition.pop(); // removes last index value of snake array so that snake tail moves along and doesn't leave a trail
  addSnake(); // add new snake array onto new location of grid
}

//Change Snake direction to moving Down
function keyDown() {
  removeSnake(); // remove old snake array
  let head = snakePosition[0]; // access head location of snake array
  head += width; // move head of snake one cell down
  snakePosition.unshift(head); // removes old index 0 value of head array
  snakePosition.pop(); // removes last index value of snake array so that snake tail moves along and doesn't leave a trail
  addSnake(); // add new snake array onto new location of grid
}


//* Make Snake move automatically in the direction it's already headed
function snakeSlithers() {
  const slithering = setInterval(() => {
    //Use multiple if statements to move the snake automatically according to last key direction.
    //*Game ends if snake hits wall
    const rowPosition = snakePosition[0] % width; //This code stops the snake from going through the wall on the left and right side of the grid
    const colPosition = Math.floor(snakePosition[0] / width); //This code also stops the snake from going through the wall on the top and bottom of the grid
    if (snakeMovement === 'ArrowRight' && rowPosition < width - 1) { // && rowPosition < width - 1 stops snake from moving through right side of grid
      keyRight(); // call keyRight function when ArrowRight keystroke is pressed: snake head moves to the right and tail follows.
    } else if (snakeMovement === 'ArrowLeft' && rowPosition > 0) { // && rowPosition > 0 stops snake from moving through left side of grid
      keyLeft(); // call keyLeft function when ArrowLeft keystroke is pressed: snake head moves to the left and tail follows.
    } else if (snakeMovement === 'ArrowUp' && colPosition > 0) { // && colPosition > 0 stops snake from moving through bottom of grid
      keyUp(); // call keyUp function when ArrowUp keystroke is pressed: snake head moves up and tail follows.
    } else if (snakeMovement === 'ArrowDown' && colPosition < width - 1) { // && colPosition < width - 1 stops snake from moving through top of grid
      keyDown(); // call keyDown function when ArrowDown keystroke is pressed: snake head moves down and tail follows.
    } else {
      alert("Game Over!"); // if snake hits the wall, a pop-up alert will state "Game Over!"
    }

    //*Game ends if snake hits itself
    //The game should have a pop-up saying "Game Over!" when the snake head snakePosition[0] hits itself in any of the tail indices snakePosition[1-9]
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
      alert("Game over!"); // Game ends and a pop-up says "Game Over" when snake hits itself
    }


    //*Snake speeds up and gets longer when it eats fruit   
    if (snakePosition[0] === fruitPosition) { // indicates snake head at index 0 landing on fruit and eating it
      cells[fruitPosition].classList.remove('fruit'); // the fruit will be removed when the snake head lands on it and eats it
      snakePosition.push(snakePosition.slice(-1)); //*Snake tail grows: grabs last item of the snakePosition array and then pushes it back to the snakePosition array to make tail grow by 1 cell when it eats the fruit.
      //* Snake speed will increase each time it eats the fruit
      if (snakePosition[0] === fruitPosition) {
        clearInterval(slithering); // we clear the interval so the game does not crash
        speed = speed - 200; // snake speed will increase by 200 milliseconds or 2 seconds each time the snake eats the fruit
        score += 100; // game score will increase by 100 points each time snake eats fruit
        snakeSlithers(); // call snakeSlithers function inside this timed interval when the snake eats the fruit
        scoreboard.innerText = (`Scoreboard: You won just won 100 points! The score is now ${score}`); // the score HTML div is updated with the new score each time the snake eats the fruit. innerText inserts the text and the ${score} gives us the most recent score.
      } else if (speed === 8000) { // if snake speed is 8000 milliseconds or 8 seconds, the game ends.
        clearInterval(slithering); // it stops the snake from moving once the speed is 1000 milliseconds or 10 seconds
        alert("You win!"); // the player is alerted that they have won the game once the game ends.
      }
      //*Snake speed code ends
    }
    addSnake(snakePosition); // add snake back at the new position
  }, speed); // the speed can be changed in this interval as the snake eats the fruit.
}


//* Keyboard strokes move the snake
document.addEventListener('keyup', (event) => { // if an arrow key (up, down, left, right) is pressed, the code listens for an event.
  //Get the last key the user pressed
  const key = event.code;
  snakeMovement = key; //snakeMovement listens for the most recent arrow keystroke and moves according to that direction.
})



//*Fruit moves around the board randomly
function fruitLocation() {
  setInterval(() => {
    cells[fruitPosition].classList.remove('fruit'); // remove fruit from current location
    fruitPosition = Math.floor(Math.random() * cells.length); // add fruit to new random location

    //This while loop only runs if the fruit lands on the snake and makes sure fruit is randomly redirected to a new location. This way the fruit does not appear to land on the snake tail and only lands on the grid.
      while (cells[fruitPosition].classList.contains('snake')) { // while the fruit position is on any cells containing the class of snake (i.e. while a fruit lands on snake)
      fruitPosition = Math.floor(Math.random() * cells.length); // while a fruit lands on snake, redirect the fruit to a new random location that isn't on the snake.
    }

    cells[fruitPosition].classList.add('fruit'); // add fruit on the grid
  }, 10000); // fruit moves to a random new location even 10000 milliseconds or 10 seconds
}


fruitLocation(); // call fruitLocation function so it moves around the board randomly for the snake to catch



//* Make Snake move automatically, call function.
snakeSlithers(); // call snakeSlithers function
