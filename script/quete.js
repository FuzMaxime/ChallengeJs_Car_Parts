// import { game } from './game.js';

const canvas = document.getElementById('quete');
const context = canvas.getContext('2d');

canvas.width = 1600;
canvas.height = 900;

let x = 720;
let y = 300;
let playerX = x+80;
let playerY = y+150;

/* -- clavier -- */
let up = false;
let down = false;
let left = false;
let right = false;
/* -- ------- -- */
let lastPressKey = ''; // pour avoir plusieurs touches enfoncées et garder la dernière direction
let part = true;
let win = false;

context.fillStyle = 'red';
context.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = '../img/map-zoom.png';

const player = new Image();
player.src = '../img/voiture-droite.png';

function animationOfCanvas() {
    if (left && lastPressKey === 'q') {
        x += 8;
        left = false;
    } else if (right && lastPressKey === 'd') {
        x -= 8;
        right = false;
    } else if (up && lastPressKey === 'z') {
        y += 8;
        up = false;
    } else if (down && lastPressKey === 's') {
        y -= 8;
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
        // game.money += 100;
        // game.part += 1;
        win = true;
    }

    context.drawImage(image, x, y);
    context.drawImage(player, playerX, playerY, player.width, player.height);
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
