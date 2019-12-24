window.onload = function () {
    canv = document.getElementById("snakecanvas");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 10);
}

let playerx = playery = 10;
let gridsize = tilecount = 25;
let applex = appley = 15;
let velox = veloy = 0;
let trail = [];
let tail = 5;

function game() {

    playerx += velox;
    playery += veloy;

    //wall wrap
    //right
    if (playerx > tilecount - 1) {
        playerx = 0;
    }
    //left
    if (playerx < 0) {
        playerx = tilecount - 1;
    }
    //top
    if (playery < 0) {
        playery = tilecount - 1;
    }
    //bottom
    if (playery > tilecount - 1) {
        playery = 0;
    }
    //--------------------------------

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (let i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gridsize, trail[i].y * gridsize, gridsize - 2, gridsize - 2);
        if (trail[i].x == playerx && trail[i].y == playery) {
            tail = 5;
        }
    }

    trail.push({ x: playerx, y: playery });
    while (trail.length > tail) {
        trail.shift();
    }

    //collect apple
    if (applex == playerx && appley == playery) {
        tail++;
        applex = Math.floor(Math.random() * tilecount);
        appley = Math.floor(Math.random() * tilecount);
    }
    //spawn apple
    ctx.fillStyle = "red";
    ctx.fillRect(applex * gridsize, appley * gridsize, gridsize - 2, gridsize - 2);
    //-------------------------------------------------------------------------------
}

function keyPush(evt) {
    switch (evt.keyCode) {
        //up
        case 87:
            if (veloy != +1) {
                velox = 0; veloy = -1;
            }
            break;
        //------------------------------
        //down
        case 83:
            if (veloy != -1) {
                velox = 0; veloy = +1;
            }
            break;
        //---------------------------
        //right
        case 68:
            if (velox != -1) {
                velox = +1; veloy = 0;
            }
            break;
        //------------------------------
        //left
        case 65:
            if (velox != +1) {
                velox = -1; veloy = 0;
            }
            break;
        //------------------------------
    }
}