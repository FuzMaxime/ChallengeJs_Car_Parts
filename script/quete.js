const canvas = document.getElementById('quete');
const context = canvas.getContext('2d');

canvas.width = 1600;
canvas.height = 900;

let x = 0;
let y = 600;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = '../img/map.png';

const player = new Image();
player.src = '../img/perso-droite.png';

function animation() {
    context.drawImage(image, 0, 0);
    context.drawImage(player, x, y, player.width/3, player.height/3);
    window.requestAnimationFrame(animation);
}

image.onload = () => {
    context.drawImage(image, 0, 0);
    // context.drawImage(playerBas, x, y, player.width/3, player.height/3);
    // context.drawImage(playerHaut, x, y, player.width/3, player.height/3);
    // context.drawImage(playerGauche, x, y, player.width/3, player.height/3);
    context.drawImage(player, x, y, player.width/3, player.height/3);
};

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            context.drawImage(image, 0, 0);
            context.drawImage(player, x-=2, y, player.width/3, player.height/3);
            break;
        case 'ArrowRight':
            context.drawImage(image, 0, 0);
            context.drawImage(player, x+=2, y, player.width/3, player.height/3);
            break;
        case 'ArrowUp':
            context.drawImage(image, 0, 0);
            context.drawImage(player, x, y-=2, player.width/3, player.height/3);
            break;
        case 'ArrowDown':
            context.drawImage(image, 0, 0);
            context.drawImage(player, x, y+=2, player.width/3, player.height/3);
            break;
    }
});