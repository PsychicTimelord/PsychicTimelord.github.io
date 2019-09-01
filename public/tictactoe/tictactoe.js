
let player = "1";

document.getElementById("field").innerHTML = `
                <button id="button1", onclick="start('button1')">_</button>|<button id="button2", onclick="start('button2')">_</button>|<button id="button3", onclick="start('button3')">_</button><br>
                <button id="button4", onclick="start('button4')">_</button>|<button id="button5", onclick="start('button5')">_</button>|<button id="button6", onclick="start('button6')">_</button><br>
                <button id="button7", onclick="start('button7')"></button>|<button id="button8", onclick="start('button8')"></button>|<button id="button9", onclick="start('button9')"></button>
            `;

function start(buttonId) {
    if (document.getElementById("wonMassage").textContent == "") {
        if (player == "1") {
            if (document.getElementById(buttonId).textContent != "o") {
                button(buttonId, "x");
                player = "2";
                check("1");
            }
        } else if (player == "2") {
            if (document.getElementById(buttonId).textContent != "x") {
                button(buttonId, "o");
                player = "1";
                check("2");
            }
        }
    }
}

function button(button, mark) {
    document.getElementById(button).textContent = mark;
}

function check(player) {
    let mark = "";
    let win = `Spieler ${player} hat gewonnen!`;
    let won = false;

    switch (player) {
        case "1":
            mark = "x";
            break;

        case "2":
            mark = "o";
            break;
    }

    let first = document.getElementById("button1").textContent;
    let second = document.getElementById("button2").textContent;
    let third = document.getElementById("button3").textContent;
    let forth = document.getElementById("button4").textContent;
    let fifth = document.getElementById("button5").textContent;
    let sixth = document.getElementById("button6").textContent;
    let seventh = document.getElementById("button7").textContent;
    let eighth = document.getElementById("button8").textContent;
    let ninth = document.getElementById("button9").textContent;

    if (first == mark && second == mark && third == mark) {
        won = true;
    } else if (forth == mark && fifth == mark && sixth == mark) {
        won = true;
    } else if (seventh == mark && eighth == mark && ninth == mark) {
        won = true;

    } else if (first == mark && forth == mark && seventh == mark) {
        won = true;
    } else if (second == mark && fifth == mark && eighth == mark) {
        won = true;
    } else if (third == mark && sixth == mark && ninth == mark) {
        won = true;

    } else if (first == mark && fifth == mark && ninth == mark) {
        won = true;
    } else if (third == mark && fifth == mark && seventh == mark) {
        won = true;
    }

    if (won) {
        document.getElementById("wonMassage").textContent = win
    }
} 