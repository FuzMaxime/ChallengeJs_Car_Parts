

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