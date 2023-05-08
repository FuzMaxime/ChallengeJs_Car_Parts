const canvas = document.getElementById('quete');
const context = canvas.getContext('2d');

canvas.width = 1920;
canvas.height = 929;

class Sprite {
  constructor({
    position,
    image,
    images,
    animate = false,
  }) {
    this.position = position
    this.image = new Image()
    this.image.onload = () => {
      this.width = this.image.width
      this.height = this.image.height
    }
    this.image.src = image.src

    this.animate = animate
    this.images = images
  }
}

class Boundary {
  static width = 64
  static height = 64
  constructor({ 
      position 
  }) {
      this.position = position
      this.width = 64
      this.height = 64
  }

  draw() {
      context.fillStyle = "rgb(255, 0, 0, 0.0)"
      context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const backgroundPosition = {
    x: -380,
    y: -980
}

/* -- Speed -- */
let speed = 8;
if (localStorage.getItem('upgrade') === "true") {
    speed = 16;
}
/* -- ----- -- */


/* -- keyboard -- */
let up = false;
let down = false;
let left = false;
let right = false;
/* -- ------- -- */
let lastPressKey = ''; // pour avoir plusieurs touches enfoncées et garder la dernière direction
let part = true;
let win = false;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const backgroundImg = new Image();
backgroundImg.src = '../img/map.png';

const playerUp = new Image();
playerUp.src = '../img/voiture-haut.png';

const playerRight = new Image();
playerRight.src = '../img/voiture-droite.png';

const playerLeft = new Image();
playerLeft.src = '../img/voiture-gauche.png';

const playerDown = new Image();
playerDown.src = '../img/voiture-bas.png';

const background = new Sprite({
  position: {
    x: backgroundPosition.x,
    y: backgroundPosition.y
  },
  image: backgroundImg
})

const player = new Sprite({
    position: {
      x: background.position.x+1050,
      y: background.position.y+1450
    },
    image: playerRight,
    images: {
      up: playerUp,
      left: playerLeft,
      right: playerRight,
      down: playerDown
    }
  })

/* -- collisions -- */

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 150) {
  collisionsMap.push(collisions.slice(i, 150 + i))
}

const collisionsTab = []

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 683) // 683 = collision
      collisionsTab.push(
        new Boundary({
          position: {
            x: j * Boundary.width + background.position.x,
            y: i * Boundary.height + background.position.y
          }
        })
      )
  })
})
  
function drawCollisions() {
  collisionsTab.forEach((boundary) => {
    boundary.draw()
  })
}

function testCollision({playerCollision, squareCollision}) {
  return (playerCollision.position.x >= (squareCollision.position.x -110) + squareCollision.width&&
  playerCollision.position.x - playerCollision.image.width <= (squareCollision.position.x -110) + squareCollision.width &&
  playerCollision.position.y <= squareCollision.position.y + squareCollision.height &&
  playerCollision.position.y + playerCollision.image.height >= squareCollision.position.y
  )
}

/* -- animations -- */

const mouvables = [background, ...collisionsTab]

function animationOfCanvas() {
  window.requestAnimationFrame(animationOfCanvas); 
  const money = document.getElementById('money');
  money.innerHTML = localStorage.getItem('money');

  let moving = true;

  if (left && lastPressKey === 'q') {
    for (let i = 0; i < collisionsTab.length; i++) {
      const boundary = collisionsTab[i];
      if (testCollision({
        playerCollision: player, 
        squareCollision: {
          ...boundary,
            position: {
              x: boundary.position.x + speed,
              y: boundary.position.y 
            }
          }
        })){
        moving = false;
        break;
      }
    }
    if (moving) {
      player.image = player.images.left;
      mouvables.forEach((mouvable) => {
        mouvable.position.x += speed;
      })
      left = false;
    }
  } else if (right && lastPressKey === 'd') {
    for (let i = 0; i < collisionsTab.length; i++) {
      const boundary = collisionsTab[i];
      if (testCollision({
        playerCollision: player, 
        squareCollision: {
          ...boundary,
            position: {
              x: boundary.position.x - speed,
              y: boundary.position.y 
            }
          }
        })){
        moving = false;
        break;
      }
    }
    if (moving) {
      player.image = player.images.right;
      mouvables.forEach((mouvable) => {
        mouvable.position.x -= speed;
      })
      right = false;
    }
  } else if (up && lastPressKey === 'z') {
    for (let i = 0; i < collisionsTab.length; i++) {
      const boundary = collisionsTab[i];
      if (testCollision({
        playerCollision: player, 
        squareCollision: {
          ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + speed
            }
          }
        })){
        moving = false;
        break;
      }
    }
    if (moving) {
      player.image = player.images.up;
      mouvables.forEach((mouvable) => {
        mouvable.position.y += speed;
      })
      up = false;
    }
  } else if (down && lastPressKey === 's') {
    for (let i = 0; i < collisionsTab.length; i++) {
      const boundary = collisionsTab[i];
      if (testCollision({
        playerCollision: player, 
        squareCollision: {
          ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - speed 
            }
          }
        })){
        moving = false;
        break;
      }
    }
    if (moving) {
      player.image = player.images.down;
      mouvables.forEach((mouvable) => {
        mouvable.position.y -= speed;
      })
      down = false;
    }
  }

    /* --- draw --- */
    context.drawImage(background.image, background.position.x, background.position.y);
    context.drawImage(player.image , player.position.x, player.position.y, player.image.width, player.image.height);
    drawCollisions();
}
animationOfCanvas();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            right = true;
            lastPressKey = 'd';
            break;
        case 'q':
            left = true;
            lastPressKey = 'q';
            break;
        case 'z':
            up = true;
            lastPressKey = 'z';
            break;
        case 's':
            down = true;
            lastPressKey = 's';
            break;
    }
});