<template>
  <div id="snake-div">
    <!-- <img id="player" src="../assets/joueur-haut.png" alt=""> -->
    <canvas ref="snake" id="snake" :width="width*cellSize" :height="height*cellSize" />
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      snake: [
        {
          x: 0,
          y: 0
        }
      ],
      // img: new Image(),
      // player: null,
      width: 45,
      height: 20,
      cellSize: 20,
      nextDirection: null,
directions: [
        { // left
          keyCode: 37,
          move: {
            x: -1,
            y: 0
          }
        },
        { // top
          keyCode: 38,
          move: {
            x: 0,
            y: -1
          }
        },
        {
          direction: "right",
          keyCode: 39,
          move: {
            x: 1,
            y: 0
          }
        },
        {
          direction: "bottom",
          keyCode: 40,
          move: {
            x: 0,
            y: 1
          }
        }
      ]
    }
  },
  mounted() {
    this.boardContext = this.$refs.snake.getContext("2d");
    this.interval = setInterval(this.nextMove, 200);
    window.addEventListener("keydown", this.onKeyPress);
    this.resetGame();
    // const img = new Image()
    // img.src = '../assets/map1.png'
  },
  methods: {
    resetGame() {

      // Clear the canvas
      this.clear();

       // Create the head of the snake in the middle of the canvas
       this.snake = [{x: Math.round(this.width / 2), y: Math.round(this.height / 2)}];
      this.drawGame();
    },
    clear() {
      this.boardContext.fillRect(0, 0, this.width * this.cellSize, this.height * this.cellSize);
    },
    drawGame() {

      // Clear canvas
      this.clear();

      // this.img.src = '../assets/map1.png'
      // this.img.onload = () => {
      //   this.boardContext(this.img,0,0)
      // }

      // Start drawing on the canvas
      this.boardContext.beginPath();

      // Draw the snake
      this.snake.forEach((snakePart) => {
          this.boardContext.rect(snakePart.x * this.cellSize, snakePart.y * this.cellSize, this.cellSize, this.cellSize);
          this.boardContext.fillStyle = "black";
          this.boardContext.fill();
      });


      // Stop drawing on the canvas
      this.boardContext.closePath();
    },
    nextMove() {

      // If there is no direction for the moment : nothing to do
      if (this.nextDirection == null)
      {
        return;
      }

      // And we compute a new header depending on the next direction
      this.snake.unshift({ 
        x: this.snake[0].x + this.nextDirection.move.x,
        y: this.snake[0].y + this.nextDirection.move.y
      });

      // Check if the new position of the head of the snake is not out of the canvas
      if (this.snake[0].x < 0 || this.snake[0].x >= this.width || this.snake[0].y < 0 || this.snake[0].y >= this.height)
      {
        this.resetGame();
        window.alert('Le serpent est sorti du jeu : perdu !');
        return;
      } 

      // Check if the new position of the head of the snake is not in collision with its body
      for (var cpt = 1; cpt < this.snake.length; cpt++) {
        if (this.snake[cpt].x === this.snake[0].x &&
          this.snake[cpt].y === this.snake[0].y) {
            this.resetGame();
            window.alert('Le serpent entre en collision avec lui-même : perdu !');
            return;
        }
      }
      // Else we can remove the last element of the snake
      this.snake.pop();

      // Draw on the canvas
      this.drawGame();
      },
      onKeyPress(event) {
      
      // Get the new direction
      const newDirection = this.directions.find(c => c.keyCode === event.keyCode);

      // If the key pressed is no a direction key : nothing to do
      if (!newDirection) {
        return;
      }

      // From up, we can go right or left but not down and so on for other directions so we use the following code to know if the next direction can be set
      if (this.nextDirection == null || Math.abs(newDirection.keyCode - this.nextDirection.keyCode) !== 2) {
        this.nextDirection = newDirection;
    }
    }
  }
}
</script>
<style>
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  #snake {
    border: 1px solid black;
  }
</style>