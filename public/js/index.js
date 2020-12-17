function tictactoebutton() {
    document.getElementById("glist").style.visibility = "visible";
}

function checkbutton() {
    document.getElementById("input1").style.visibility = "visible";
    document.getElementById("input2").style.visibility = "visible";
    document.getElementById("check_button").style.visibility = "visible";
}

function gamesButton() {
    document.getElementById("games").style.visibility = "visible";
    document.getElementById("tools").style.visibility = "hidden";
}

function toolsButton() {
    document.getElementById("games").style.visibility = "hidden";
    document.getElementById("tools").style.visibility = "visible";
}