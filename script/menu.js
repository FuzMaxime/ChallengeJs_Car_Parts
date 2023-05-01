function setLocalStorage() {
    localStorage.clear();
    localStorage.setItem('money', 0);
    localStorage.setItem('parts', 0);
    localStorage.setItem('infos', `Rendez-vous dans votre garage au plus vite !
    Vous avez volé une pièce dans un magasin et la police est à vos trousses !`);
}