function setLocalStorage() {
    localStorage.clear();
    localStorage.setItem('upgrade', false);
    localStorage.setItem('money', 0);
    localStorage.setItem('parts', 0);
    localStorage.setItem('date', Math.round(Date.now()/60000));
    localStorage.setItem('infos', `Rendez-vous dans votre garage au plus vite !
    Vous avez volé une pièce dans un garage et la police est à vos trousses !`);
}