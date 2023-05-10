function timer() {
    let temps = 60

    const timer = document.getElementById("timer")
    const loose = document.getElementById("loose")
    const info = document.getElementById("info")
    const back = document.getElementById("back")

    timer.style.display = 'flex';

    setInterval(() => {
        if (temps === 0) {
            timer.style.display = 'none';
            info.style.display = 'none';
            back.style.display = 'none';
            loose.style.display = 'flex';
            return;
        } else {
            timer.innerText = `${temps}`
            temps--
        }
    }, 1000)
}

function loose () {
    localStorage.setItem('money', parseInt(localStorage.getItem('money')) - 100);
}