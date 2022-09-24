# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Shoe Drip ![]()
### Developer
Roshanak Ahmed 

### Deployed Project
https://roshanak11.github.io/project-1-snake-game/ 


## Brief
I was asked to build a grid based game over the course of 3 weeks, and deploy it online with a git repository hosted on Github. It was required that my app rendered the game in a browser. I had to design a logic for winning, use JavaScript for DOM manipulation, and include separate HTML, CSS, and JavaScript files.


## Overview
I chose to recreate the classic Snake Game. This was my first project at the General Assembly Software Engineering Immersive bootcamp. I created a single-player game where the player manipulates the keyboard to guide the snake to catch a moving fruit on the game board grid. Each time the snake catches the fruit, the snake earns 100 points, grows longer, and its speed increases. The game ends if the snake hits itself or the edge of the board. The aim of the game is to stay alive as long as possible. 


## Technologies Used
- HTML
- JavaScript to create the DOM elements, variables, functions, grid, scoreboard, snake, and moving fruit
- CSS for styling and to create the grid, import the fruit image, and create the snake
- Flexbox to create the grid
- Git and GitHub to host my git repository and deployed project link online 


## Approach Taken
Below I show my original pitch deck Whiteboard 1 and how I brainstormed to meet these goals during the initial stages in Whiteboard 2.
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978120/project%201%20readme/SnakeGameWhiteboard3_x5reex.png)

I also looked at the documentation and on stack overflow for resources and ideas. After the whiteboarding stage, some of my logic developed or changed because I ran into bugs or limitations that inspired me to try different ways of attempting to achieve my goals, as well as develop my goals further.

During week 1, I whiteboarded and planned my outline for the project. I listed my MVP goals and brainstormed potential solutions to them in detail. I also spent some time reviewing my class material to really think about how I could best approach my MVP goals. I also listed stretch goals. In addition, I worked on the index.html file, grid CSS, snake CSS, fruit CSS, grid variable const width with a value of 10 cells, grid variable const totalCells that multiplied width x width to create a grid of 100 cells, DOM element const grid that selected the grid div from the HTML, DOM element const cells that created an array, and the functions createGrid and fruitLocation. The function createGrid created a grid with 100 cells and added divs to the cells and pushed them to the grid using a For Loop. Inside the function I also called the function addSnake to add the snake to the grid using the CSS class “snake” which filled the cells a green color to create the illusion of a snake on the board.

During week 2 I created the grid variable snakeMovement which allowed the snake to automatically move to the right at the beginning of the game. I added an event listener so that snakeMovement would listen for the most recent arrow keystroke and move according to that direction. I also created the function snakeSlithers to make the snake move automatically in the direction it’s already headed after a keystroke is pressed. My snake head was also originally moving up, right, left, and down according to the keystrokes pressed by the player, but the tail was not following these keystrokes. Creating the game variable called snakePosition with an array, along with the functions keyRight, keyLeft, keyUp, and keyDown allowed the tail to move along with the direction of the head.

I had to spend some time whiteboarding the logic for the functions keyRight, keyLeft, keyUp, and keyDown. In these functions, each index in the snake tail shifted into the index value that came before it, so it followed along the direction of the snake appropriately like a snake that slithers. For example, I would start each function by removing the old snake array, then I would access the head location of the snake array through snakePosition[0], then I would move the head of the snake one cell to the direction of the keystroke the player pressed, then I would unshift the snake head by removing the old index 0 value of the head array, then I would use the pop method to remove the last index value of the snake array so that the snake tail moved along without leaving a trail, and finally I would add the snake array onto the new location of the grid.

Furthermore, I used an If statement with setInerval to make the snake speed up and get longer each time it ate the fruit. I had to fiddle around with the clearInterval method so the game would not crash and stop the snake from moving once the speed reached 10 seconds.

During week 3, I had to figure out how to make the game end if the snake hit the wall under the function snakeSlithers. The following code stopped the snake from going through the wall on the left and right side of the grid:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978243/project%201%20readme/612CA283-16B1-4301-A98B-0C7C2158551E_4_5005_c_ldzf5q.jpg)
The following code stopped the snake from going through the wall on the left and right side of the grid:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978246/project%201%20readme/76CB575A-D187-40C8-B6D2-E50A3B225F30_4_5005_c_hlviij.jpg)
In addition, && rowPosition < width - 1 stopped the snake from moving through the right side of grid. Meanwhile, && rowPosition > 0 stopped the snake from moving through left side of grid. Furthermore, && colPosition > 0 stopped the snake from moving through bottom of grid and // && colPosition < width - 1 stopped the snake from moving through top of grid.

I also had to make the game end if the snake hit itself using an If statement. I added a pop-up alert to the else statement saying “Game Over!” when the snake head snakePosition[0] hit itself in any of the tail indices snakePosition[1-9].

Lastly, I worked on the scoreboard stretch goal. I used the innerText method to update the score on the HTML file each time the snake ate the fruit.
Scoreboard (stretch goal). Scoreboard.innerText

**Interesting Achievements**
I whiteboarded the logic of the slithering effect of the snake first:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978383/project%201%20readme/A8131D98-251D-4F79-8FFD-ABD2C7A25B73_perxrs.jpg)

This was the final product of the slither effect logic. I have explained each line of code using the commented green text:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978502/project%201%20readme/ACEBE037-8AFE-4417-ABEB-98DC69387436_hufw08.jpg)

Below, I make the snake move automatically in the direction it’s already headed and end the game if the snake hits the edge of the board. I have explained each line of code using the commented green text:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978590/project%201%20readme/AC15E17A-0B72-4F44-9F50-E0C4C65846D7_lwktf6.jpg)

Here, the game ends when the snake hits itself. I have explained each line of code using the green text:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978671/project%201%20readme/096E9313-8803-4949-BC5C-AD9931F63AFF_ojy8os.jpg)

Below, the snake increases speed each time it eats fruit using setInterval. I have explained each line of code using the green text:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978723/project%201%20readme/7A06444F-574B-4BB5-9C76-4325117CD0FB_rhbty3.jpg)

I added an event listener so the player can move the snake with arrow keyboard strokes. I have explained each line of code using the green text:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978774/project%201%20readme/571CC094-1DC2-432F-9A68-4899E10E8148_4_5005_c_lqdk9h.jpg)

Here, the fruit moves around the board randomly. The while loop ensure that the fruit cannot land on the snake tail by redirecting it to a new location. I have explained each line of code using the commented green text:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978831/project%201%20readme/4CD8D9BE-CD87-446E-827B-D6D77C2A8666_bouu8r.jpg)

Finally, the snake tail grows each time it eats a fruit. I have explained each line of code using the green text:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978879/project%201%20readme/7D05FF5A-24F7-4B97-9FA2-A35BBA6F7A06_4_5005_c_qeo8zt.jpg)


## Screenshots
**Whiteboard Presentation Pitch:**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663977841/project%201%20readme/3B6026B0-2205-40DC-863A-A30717F35070_g6fmvq.jpg)

**Embedded Project**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663977940/project%201%20readme/62C32D3A-A54C-4709-8E87-3B68D4AA1310_d07egs.jpg)

**Project Code**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978010/project%201%20readme/816CCDCD-84A7-4164-A761-355B408E2912_cy6byg.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663978022/project%201%20readme/47E2F33E-FAF7-4C0B-B3F2-1046ECCFC6EA_ojagqf.jpg)


## Bugs, Blockers, Wins
**Bugs**
- The 10th row of the grid doesn’t show up clearly. This can be resolved by using flexbox and CSS to improve the grid design.
- The fruit image isn’t shown clearly on the grid. This can be resolved by making the fruit fit clearly by using a smaller image, resizing the image with CSS, or changing the concept of “fruit” to a “light” that the snake is chasing.  The “light” can be a grid box that is colored in a different shade with CSS. 
- The game lags a few seconds in showing the fruit. However, if I show the fruit immediately when the game starts, it increases the speed in which the fruit appears, and it changes location too quickly for the snake to keep up with chasing it. In order to resolve this issue, I could create a smaller grid so the snake can reach the rapidly moving fruit more quickly across a shorter grid.

**Blockers**
- I had to figure out the perfect length of time to move the fruit to a random new location in the fruitLocation function. I realized, the time it takes for the fruit to move is also the time it takes for the fruit to initially appear on the board, and if the fruit takes too long to appear, the player may be confused. To settle this, I decided the fruit should move and appear on the board after 19 seconds, which is not too long. To resolve this in an even better way, I could use a React app to create a separate component from the game that explains the instructions of the game. The instructions could tell players to wait 10 seconds for the fruit to appear on the board. 
- Initially, my fruit was landing on my snake tail and the snake was getting 100 points each time this happened. I had to fix this with the following code under the function fruitLocation:
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663977578/project%201%20readme/9F5EE79D-9EB9-4A1D-8CF7-2D616E57B20E_4_5005_c_aexxc7.jpg)
- I had to ensure the tail of the snake follows the direction of the head’s movement (based on user keyboard strokes). Originally, the tail was not following the head’s direction. To resolve this, I had to whiteboard out the logic for how I would do this. I decided to create a new function for each keystroke (keyUp, keyDown, keyRight, keyLeft) to represent the movement of the tail when the snake head moves Right, Left, Up, Down to a new location. Then, I made sure each index in the snake tail shifted into the index value that came before it, so it could follow along the direction of the snake appropriately like a snake that slithers. As a result, I removed the old snake array, accessed the head location of the snake array, moved the head of the snake one cell to any direction, removed the old index 0 value of the head array, removed the last index value of snake array so that snake tail moved along and didn’t leave a trail, and finally added a new snake array onto the new location of the grid.
- I had to ensure both the scoreboard points and speed of the snake increased each time the snake ate the fruit. I used an IF statement and setInterval to resolve this issue. I learned how to use the HTML DOM Element innerText property to increase the score, once I figured out how to use that, it was quite simple using mathematical logic to change the score within the IF statement. I used setInterval and mathematical logic to increase the speed by reducing the amount of seconds the snake was traveling each time the head of the snakePosition landed on the fruitPosition.
- I had to ensure the size of the snake tail increased each time it ate the fruit. I used the following code to do so, using the slice() method and push() method in combination with one another.
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663977738/project%201%20readme/965AA316-F42C-4CBF-9FB8-594317CBCE7B_4_5005_c_oyeb2u.jpg)

**Wins**
- Scoreboard that increases score by 100 points each time snake eats fruit
- Speed of snake increases each time snake eats fruit
- Size of snake tail increases each time snake eats fruit
- Snake moves according to arrow directions typed by user in keyboard
- Tail follows the direction of the head’s movement (based on user keyboard strokes)
- Fruit is not allowed to land on snake head or tail at any given point
- Game ends when the snake hits itself
- Game ends when the snake hits the wall (or the edge of the grid)
- Users receive a Game Over! popup whenever the game ends because the snake hits the wall or itself


## Future Features
- Media queries to make it responsive to different browsers/mobiles/tablets
- Multi-player mode
- High score table
- Instructions on how to play the game and earn points
- Use React to create multiple pages on the game app (one page with instructions, one page with game, one page with scoreboard)
- Start & reset button (to restart game once it is over) or make the game reload automatically when it ends without having to hit refresh
- Game background music
- Use CSS to add a border to make the game more aesthetically pleasing


## Key Learnings
This was my first time creating a complex game such as this that involved DOM manipulation, a grid, the element of changing speed, a scoreboard, the movement of a snake, manual keyboard strokes, the eventListener method, and many more methods. I learned about whiteboarding to think through the logic of my app before creating my app. I also learned about whiteboarding to think through the logic of specific functions. Furthermore, I learned how to create several different functions, DOM elements, and variables that communicate with one another and cohesively worked together to create a seamless game. It was interesting to learn how to create different functions that work together and interact with one another to create a simple game. The game was more complex than I initially thought it would be, it definitely challenged me and pushed me out of my comfort zone. I found it quite rewarding to successfully meet all my MVP goals for my very first General Assembly project.