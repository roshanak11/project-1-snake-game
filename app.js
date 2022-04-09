// * Dom Elements
const grid = document.querySelector('.grid');
const cells = [];

// * Grid variables
const width = 10;
const height = 10;
const totalCells = width * height;

// * Snake & Fruit variables
let snakePosition = 0;
let fruitPosition = Math.floor(Math.random() * totalCells);

// * Add Snake
function addSnake() {
  cells[snakePosition].classList.add('snake');
}

// * Create Grid
function createGrid() {
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cells.push(cell);
  }
  addSnake();
}

createGrid();


// Moving Snake with arrow keys

document.addEventListener('keyup', (event) => {

  // ! Get the key the user pressed
  const key = event.code;
  console.log(key);

  // ! rowPosition and colPosition
  const rowPosition = snakePosition % width;
  const colPosition = Math.floor(snakePosition / width);

  if (key === 'ArrowLeft' && rowPosition > 0) { // ! Left
    snakePosition -= 1
  } else if (key === 'ArrowRight' && rowPosition < width - 1) { // ! Right
    snakePosition += 1
  } else if (key === 'ArrowUp' && colPosition > 0) { // ! Up
    snakePosition -= width
  } else if (key === 'ArrowDown' && colPosition < width - 1) { // ! Down
    snakePosition += width
  }
})

addSnake(snakePosition); // ! add Snake back at the new position


function fruitLocation() {
  setInterval(() => {
    cells[fruitPosition].classList.remove('fruit');
    fruitPosition = Math.floor(Math.random() * cells.length); 
    cells[fruitPosition].classList.add('fruit');
  }, 1000)
}

fruitLocation();


// we are not removing snake, it's growing
// function removeSnake() {
//   cells[snakePosition].classList.remove('snake');
// }