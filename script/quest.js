function quest(backPositionX,backPositionY, part, win) {
    /* -- Garage Sud Ouest */
    if (backPositionX >= -2508 
    && backPositionX <= -2436 
    && backPositionY >= -3820 
    && backPositionY <= -3788
        ) { 
        if (part) {
            popUpI();
            part = false;
        }
    }
    /* -- Garage Sud Est */
    if (backPositionX >= -6156 
    && backPositionX <= -6052 
    && backPositionY >= -3316 
    && backPositionY <= -3276
        ) { 
        if (part) {
            popUpI();
            part = false;
        }
    }
    /* -- Garage Nord Ouest */
    if (backPositionX >= -2596 
        && backPositionX <= -2532  
        && backPositionY >= -196 
        && backPositionY <= -172
        ) { 
        if (part) {
            popUpI();
            part = false;
            return part;
        }
    }
    /* -- Start -- */
    if (part === false && win === false && 
        backPositionX <= -340 &&
        backPositionX >= -428 && 
        backPositionY >= -892 &&
        backPositionY <= -876) {
        popUpV();
        let gameMoney = localStorage.getItem('money');
        gameMoney = parseInt(gameMoney) + 100;
        let gamePart = localStorage.getItem('parts');
        gamePart = parseInt(gamePart) + 1;
        localStorage.setItem('money', gameMoney);
        localStorage.setItem('parts', gamePart);
        win = true;
    } 
}