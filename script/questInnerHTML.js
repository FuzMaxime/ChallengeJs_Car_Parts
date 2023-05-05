const idMoney = document.getElementById('money');

idMoney.innerHTML = localStorage.getItem('money');

function instructions() {
    const idInfos = document.getElementById('instruction');
    idInfos.innerHTML = localStorage.getItem('infos');
}