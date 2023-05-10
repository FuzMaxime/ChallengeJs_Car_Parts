let popInfo = false;
let popWin = false;
function quest(backPositionX,backPositionY, part, win) {
    /* -- Garage Sud Ouest */
    if (backPositionX >= -2596 
        && backPositionX <= -2516 
        && backPositionY >= -3788 
        && backPositionY <= -3756
        && popInfo === false) {
            if (part) {
                popUpI();
                timer();
                part = false;
                popInfo = true;
                return part;
            }  
    }
    /* -- Garage Sud Est */
    if (backPositionX >= -6244 
        && backPositionX <= -6164 
        && backPositionY >= -3268 
        && backPositionY <= -3244
        && popInfo === false
        ) { 
            if (part) {
                popUpI();
                timer();
                part = false;
                popInfo = true;
                return part;
            } 
    }
    /* -- Garage Nord Ouest */
    if (backPositionX >= -2596 
        && backPositionX <= -2532  
        && backPositionY >= -196 
        && backPositionY <= -172
        && popInfo === false
        ) { 
            if (part) {
                popUpI();
                timer();
                part = false;
                popInfo = true;
                return part;
            } 
    }
    /* -- Start -- */
    if (part === false && win === false && 
        backPositionX <= -340 &&
        backPositionX >= -428 && 
        backPositionY >= -892 &&
        backPositionY <= -876 &&
        popWin === false) {
        popUpV();
        let gameMoney = localStorage.getItem('money');
        gameMoney = parseInt(gameMoney) + 100;
        let gamePart = localStorage.getItem('parts');
        gamePart = parseInt(gamePart) + 1;
        localStorage.setItem('money', gameMoney);
        localStorage.setItem('parts', gamePart);
        win = true;
        popWin = true;
    } 
}