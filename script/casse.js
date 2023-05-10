function popUpCasse() {
    const casse = document.getElementById('casse');
    const store = document.getElementById('store');
    if (casse.style.display === 'flex') {
        casse.style.display = 'none';
        store.style.display = 'flex';
        return;
    } else {
        casse.style.display = 'flex';
        store.style.display = 'none';
    }
}

/* -- 1 minute = 60000 ms -- */

function casse() {
    const dateNow = (Math.round(Date.now()/60000));
    if (localStorage.getItem('date') === dateNow.toString()) {
        alert('Vous avez déjà récupéré la pièce aujourd\'hui ! Dans la phase de test, vous pouvez récupérer une pièce toutes les minutes.');
        return;
    } else {
        localStorage.setItem('date', dateNow);
        localStorage.setItem('parts', parseInt(localStorage.getItem('parts')) + 1);
        refrechHTML();
        timer();
        return;
    }
}

function timer() {
    let temps = 60

    const timer = document.getElementById("timer")

    setInterval(() => {
        if (temps === 0) {
            timer.innerText = `0`
            return;
        } else {
            timer.innerText = `${temps}`
            temps--
        }
    }, 1000)
}