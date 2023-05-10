/* -- popUp -- */
function popUpI() {
    console.log('popUpI');
    const popUp = document.getElementById('popUpI');
    const instruction = document.getElementById('instruction');
    if (popUp.style.display === 'flex') {
        popUp.style.display = 'none';
        instruction.innerHTML = "Rendez-vous dans votre garage au plus vite ! Vous avez volé une pièce dans un magasin et la police est à vos trousses !";
        return;
    } else {
        popUp.style.display = 'flex';
        instruction.innerHTML = "Votre objectif est de rentrer dans un garage pour voler une pièce de voiture";
    }
  }
  
function popUpV() {
    const popUp = document.getElementById('popUpV');
    if (popUp.style.display === 'flex') {
        popUp.style.display = 'none';
        return;
    } else {
        popUp.style.display = 'flex';
    }
}