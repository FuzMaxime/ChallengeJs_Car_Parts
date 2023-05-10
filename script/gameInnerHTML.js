function refrechHTML() {
    const idMoney = document.getElementById('money');
    idMoney.innerHTML = localStorage.getItem('money');
    const idParts = document.getElementById('parts');
    idParts.innerHTML = localStorage.getItem('parts');
}

refrechHTML();


const switchHTML = document.getElementById('switch');

if (parseInt(localStorage.getItem('parts'))===5) {
    switchHTML.innerHTML = `<button class="btnUpgrade" onclick='upgradeCar()'>Améliorer pour 500 pneus Vitesse: x2</button>`;
}