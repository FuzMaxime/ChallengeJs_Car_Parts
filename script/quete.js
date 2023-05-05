const canvas = document.getElementById('quete');
const context = canvas.getContext('2d');

canvas.width = 1920;
canvas.height = 929;

const backgroundPosition = {
    x: -380,
    y: -980
}
const playerPosition = {
    x: backgroundPosition.x+1150,
    y: backgroundPosition.y+1400
}

/* -- Speed -- */
let speed = 8;
if (localStorage.getItem('upgrade') === "true") {
    speed = 16;
}
/* -- ----- -- */


/* -- clavier -- */
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
        context.fillStyle = 'red'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

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

const player = new Sprite({
    position: {
      x: backgroundPosition.x+1045,
      y: backgroundPosition.y+1400
    },
    image: playerRight,
    images: {
      up: playerUp,
      left: playerLeft,
      right: playerRight,
      down: playerDown
    }
  })
const background = new Sprite({
    position: {
      x: backgroundPosition.x,
      y: backgroundPosition.y
    },
    image: backgroundImg
  })

  /* -- collisions -- */

  const testBondary = new Boundary({
    position: {
      x: backgroundPosition.x+1140,
      y: backgroundPosition.y+1300    
    }
  })
console.log(testBondary)

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

// function draw() {
//     context.drawImage(background.image, background.position.x, background.position.y);
//     context.drawImage(player.image, player.position.x, player.position.y);
//     drawCollisions()
// }

const mouvables = [background, ...collisionsTab]
  
function drawCollisions() {
  collisionsTab.forEach((boundary) => {
    boundary.draw()
  })
  // if (testCollision({
  //   player: player, 
  //   squareCollision:{
  //     ...collisionsTab,
  //     position: {
  //       x: boundary.position.x,
  //       y: boundary.position.y + 3
  //     }
  // })) {
  //   console.log('collision')
  // }
  // testBondary.draw()
}

function testCollision(player, squareCollision) {
    return (player.position.x > (squareCollision.position.x -200) + squareCollision.width&&
    player.position.x - player.image.width < (squareCollision.position.x - 200) + squareCollision.width &&
    player.position.y < squareCollision.position.y + squareCollision.height &&
    player.position.y + player.image.height > squareCollision.position.y
    )
}

function animationOfCanvas() {
  window.requestAnimationFrame(animationOfCanvas); 
  const money = document.getElementById('money');
  money.innerHTML = localStorage.getItem('money');
  /* --- collisions --- */
  // if (testCollision(player, testBondary)) {
  //   console.log('collision')
  // }

  if (player.position.x + player.image.width >= canvas.width) {
      player.position.x = canvas.width - player.image.width;
  }
  if (left && lastPressKey === 'q') {
      player.image = player.images.left;
      mouvables.forEach((mouvable) => {
        mouvable.position.x += speed;
      })
      left = false;
  } else if (right && lastPressKey === 'd') {
      player.image = player.images.right;
      mouvables.forEach((mouvable) => {
        mouvable.position.x -= speed;
      })
      right = false;
  } else if (up && lastPressKey === 'z') {
      player.image = player.images.up;
      mouvables.forEach((mouvable) => {
        mouvable.position.y += speed;
      })
      up = false;
  } else if (down && lastPressKey === 's') {
      player.image = player.images.down;
      mouvables.forEach((mouvable) => {
        mouvable.position.y -= speed;
      })
      console.log(backgroundPosition.x+1045, backgroundPosition.y+1400)
      down = false;
  }
  /* -- Garage Sud Ouest */
  if (background.position.x >= -2508 
    && background.position.x <= -2436 
    && background.position.y >= -3820 
    && background.position.y <= -3788
      ) { 
      if (part) {
          alert(` Vous avez voler la piece !
                  Maintenant retourner au garage 
                  rapidement avant que la police vous attrappe !`);
          part = false;
      }
  }
  /* -- Garage Sud Est */
  if (background.position.x >= -6156 
    && background.position.x <= -6052 
    && background.position.y >= -3316 
    && background.position.y <= -3276
      ) { 
      if (part) {
          alert(` Vous avez voler la piece !
                  Maintenant retourner au garage 
                  rapidement avant que la police vous attrappe !`);
          part = false;
      }
  }
  /* -- Garage Nord Ouest */
  if (background.position.x >= -2516 
    && background.position.x <= -2404 
    && background.position.y >= -252 
    && background.position.y <= -204
      ) { 
      if (part) {
          alert(` Vous avez voler la piece !
                  Maintenant retourner au garage 
                  rapidement avant que la police vous attrappe !`);
          part = false;
      }
  }
  /* -- Start -- */
  if (part === false && win === false && 
      background.position.x <= -244 &&
      background.position.x >= -340 && 
      background.position.y >= -940 &&
      background.position.y <= -908) {
      alert(`Vous avez gagner !`);
      let gameMoney = localStorage.getItem('money');
      gameMoney = parseInt(gameMoney) + 100;
      let gamePart = localStorage.getItem('parts');
      gamePart = parseInt(gamePart) + 1;
      localStorage.setItem('money', gameMoney);
      localStorage.setItem('parts', gamePart);
      win = true;
  } 
    
    
    /* --- draw --- */
    context.drawImage(background.image, background.position.x, background.position.y);
    // draw();
    console.log( background.position.x, background.position.y)
    context.drawImage(player.image , playerPosition.x, playerPosition.y, player.image.width, player.image.height);
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


/*

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
      this.width = (this.image.width / this.frames.max) * scale
      this.height = this.image.height * scale
    }
    this.image.src = image.src

    this.animate = animate
    this.images = images
  }

  draw() {
    context.save()
    // c.translate(
    //   this.position.x + this.width / 2,
    //   this.position.y + this.height / 2
    // )
    // c.rotate(this.rotation)
    // c.translate(
    //   -this.position.x - this.width / 2,
    //   -this.position.y - this.height / 2
    // )

    const image = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      width: this.image.width,
      height: this.image.height
    }

    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      image.position.x,
      image.position.y,
      image.width,
      image.height
    )

    context.restore()

    if (!this.animate) return
  }
}
*/