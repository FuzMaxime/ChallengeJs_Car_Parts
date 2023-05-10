function informations() {
    alert(`Déplacez-vous avec les touches ZQSD.
Regardez les instructions de la quête dans le menu en haut à gauche.`)
}

function upgradeCar() {
    let gameMoney = localStorage.getItem('money');
    if (parseInt(gameMoney) >= 500) {
        localStorage.setItem('upgrade', true);
        /* -- money -- */
        gameMoney = parseInt(gameMoney) - 500;
        localStorage.setItem('money', gameMoney);
        /* -- parts -- */
        localStorage.setItem('parts', 0);
        /* -- infos -- */
        const switchHTML = document.getElementById('switch');
        switchHTML.innerHTML = `<h3 class="parts"><span id="parts"></span>/5</h3>`;
        /* -- html -- */
        refrechHTML();
    } else {
        alert(`Vous n'avez pas assez d'argent !`);
    }
}