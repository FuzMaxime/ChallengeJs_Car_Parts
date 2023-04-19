class Game {
    money = 1;
    part = 0;
}

const game = new Game();

const money = document.getElementById('money');

money.innerHTML = game.money;