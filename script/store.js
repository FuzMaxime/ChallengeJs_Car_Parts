function buy() {
    localStorage.setItem('money', parseInt(localStorage.getItem('money')) - 100);
    localStorage.setItem('parts', parseInt(localStorage.getItem('parts')) + 1);
}

function sold() {
    localStorage.setItem('money', parseInt(localStorage.getItem('money')) + 50);
    localStorage.setItem('parts', parseInt(localStorage.getItem('parts')) - 1);
}
  
function popUpStore() {
    const store = document.getElementById('store');
    const casse = document.getElementById('casse');
    if (store.style.display === 'flex') {
        store.style.display = 'none';
        casse.style.display = 'flex';
        return;
    } else {
        store.style.display = 'flex';
        casse.style.display = 'none';
    }
}