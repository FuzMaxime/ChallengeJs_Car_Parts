// import { game } from './menu.js';

const canvas = document.getElementById('quete');
const context = canvas.getContext('2d');

canvas.width = 1600;
canvas.height = 900;

let x = -380;
let y = -980;
let playerX = x+1045;
let playerY = y+1400;

/* -- clavier -- */
let up = false;
let down = false;
let left = false;
let right = false;
/* -- ------- -- */
let lastPressKey = ''; // pour avoir plusieurs touches enfoncées et garder la dernière direction
let part = true;
let win = false;

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

// class Player {
//     x = 0;
//     y = 0;
//     width = 0;
//     height = 0;
//     image = null;
//     images = null;
//     constructor(x, y, width, height, image ,images) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.image = new Image();
//         this.image.onload = () => {
//             this.width = (this.image.width / this.frames.max) * scale
//             this.height = this.image.height * scale
//         }
//         this.image.src = image.src
//         this.images = images;
//     }
//     draw() {
//         context.save()
//         context.translate(
//           this.position.x + this.width / 2,
//           this.position.y + this.height / 2
//         )
//         context.rotate(this.rotation)
//         context.translate(
//           -this.position.x - this.width / 2,
//           -this.position.y - this.height / 2
//         )
//         context.globalAlpha = this.opacity
    
//         const crop = {
//           position: {
//             x: this.frames.val * (this.width / this.scale),
//             y: 0
//           },
//           width: this.image.width / this.frames.max,
//           height: this.image.height
//         }
    
//         const image = {
//           position: {
//             x: this.position.x,
//             y: this.position.y
//           },
//           width: this.image.width / this.frames.max,
//           height: this.image.height
//         }
    
//         context.drawImage(
//           this.image,
//           crop.position.x,
//           crop.position.y,
//           crop.width,
//           crop.height,
//           image.position.x,
//           image.position.y,
//           image.width * this.scale,
//           image.height * this.scale
//         )
//     }
// }

const image = new Image();
image.src = '../img/map.png';

const playerUp = new Image();
playerUp.src = '../img/voiture-haut.png';

const playerRight = new Image();
playerRight.src = '../img/voiture-droite.png';

const playerLeft = new Image();
playerLeft.src = '../img/voiture-gauche.png';

const playerDown = new Image();
playerDown.src = '../img/voiture-bas.png';

// const player = new Player({
//     playerX, playerY, 
//     width: 32, 
//     height: 32,
//     image: playerRight,
//     images: {
//         up: playerUp,
//         right: playerRight,
//         left: playerLeft,
//         down: playerDown
//     }
// });

function animationOfCanvas() {
    const money = document.getElementById('money');
    money.innerHTML = localStorage.getItem('money');
    if (left && lastPressKey === 'q') {
        // player.image = player.images.left;
        x += 8;
        context.drawImage(image, x, y);
        context.drawImage(playerLeft , playerX, playerY, playerLeft.width, playerLeft.height);
        left = false;
    } else if (right && lastPressKey === 'd') {
        // player.image = player.images.right;
        x -= 8;
        context.drawImage(image, x, y);
        context.drawImage(playerRight , playerX, playerY, playerRight.width, playerRight.height);
        right = false;
    } else if (up && lastPressKey === 'z') {
        // player.image = player.images.up;
        y += 8;
        context.drawImage(image, x, y);
        context.drawImage(playerUp , playerX, playerY, playerUp.width, playerUp.height);
        up = false;
    } else if (down && lastPressKey === 's') {
        // player.image = player.images.down;
        y -= 8;
        context.drawImage(image, x, y);
        context.drawImage(playerDown , playerX, playerY, playerDown.width, playerDown.height);
        down = false;
    }

    
    if (playerX + x === -3984 && playerY + y === -1530 || playerX + x === -3992 && playerY + y === -1530) {
        if (part) {
            alert(` Vous avez voler la piece !
                    Maintenant retourner au garage 
                    rapidement avant que la police vous attrappe !`);
            part = false;
        }
    }
    if (part === false && win === false && playerX + x === 1584 && playerY + y === 830 || part === false && win === false && playerX + x === 1576 && playerY + y === 830 ) {
        alert(`Vous avez gagner !`);
        let gameMoney = localStorage.getItem('money');
        gameMoney = parseInt(gameMoney) + 100;
        let gamePart = localStorage.getItem('part');
        gamePart += 1;
        localStorage.setItem('money', gameMoney);
        localStorage.setItem('part', gamePart);
        win = true;
    }
    // context.drawImage(backgroundImg, x, y);
    // player.draw();
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
