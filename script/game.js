const idMoney = document.getElementById('money');

idMoney.innerHTML = localStorage.getItem('money');

function informations() {
    alert(`Déplacez-vous avec les touches ZQSD.
Regardez les instructions de la quête dans le menu en haut à gauche.`)
}

console.log(localStorage.getItem('money'));