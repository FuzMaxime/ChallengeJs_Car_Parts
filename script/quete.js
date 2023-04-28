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

// const collisionsMap = []
// for (let i = 0; i < collisions.length; i += 70) {
//   collisionsMap.push(collisions.slice(i, 70 + i))
// }

// const boundaries = []

// collisionsMap.forEach((row, i) => {
//   row.forEach((symbol, j) => {
//     if (symbol === 1025)
//       boundaries.push(
//         new Boundary({
//           position: {
//             x: j * Boundary.width + backgroundPosition.x,
//             y: i * Boundary.height + backgroundPosition.y
//           }
//         })
//       )
//   })
// })

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
// const background = new Sprite({
//     position: {
//       x: backgroundPosition.x,
//       y: backgroundPosition.y
//     },
//     image: backgroundImg
//   })

function animationOfCanvas() {
    const money = document.getElementById('money');
    money.innerHTML = localStorage.getItem('money');
    if (left && lastPressKey === 'q') {
        player.image = player.images.left;
        backgroundPosition.x += 32;
        left = false;
    } else if (right && lastPressKey === 'd') {
        player.image = player.images.right;
        backgroundPosition.x -= 32;
        right = false;
    } else if (up && lastPressKey === 'z') {
        player.image = player.images.up;
        backgroundPosition.y += 8;
        up = false;
    } else if (down && lastPressKey === 's') {
        player.image = player.images.down;
        backgroundPosition.y -= 8;
        down = false;
    }

    
    if ((playerPosition.x-backgroundPosition.x) + backgroundPosition.x <= -4942 && (playerPosition.x-backgroundPosition.x) + backgroundPosition.x >= -4990 && (playerPosition.y-backgroundPosition.y) + backgroundPosition.y === -1892) {
        if (part) {
            alert(` Vous avez voler la piece !
                    Maintenant retourner au garage 
                    rapidement avant que la police vous attrappe !`);
            part = false;
        }
    }
    if (part === false && win === false && 
        (playerPosition.x-backgroundPosition.x) + backgroundPosition.x <= 882 &&
         (playerPosition.x-backgroundPosition.x) + backgroundPosition.x >= 834 && 
         (playerPosition.y-backgroundPosition.y) + backgroundPosition.y === 476 ) {
        alert(`Vous avez gagner !`);
        let gameMoney = localStorage.getItem('money');
        gameMoney = parseInt(gameMoney) + 100;
        let gamePart = localStorage.getItem('part');
        gamePart += 1;
        localStorage.setItem('money', gameMoney);
        localStorage.setItem('part', gamePart);
        win = true;
    }
    context.drawImage(backgroundImg, backgroundPosition.x, backgroundPosition.y);
    context.drawImage(player.image , playerPosition.x, playerPosition.y, player.image.width, player.image.height);
    window.requestAnimationFrame(animationOfCanvas);
    
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
const player = new Sprite({
  position: {
    x: backgroundPosition.x+1045
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
  image: image
})


class Boundary {
  static width = 48
  static height = 48
  constructor({ position }) {
    this.position = position
    this.width = 48
    this.height = 48
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

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