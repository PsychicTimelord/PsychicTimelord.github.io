
let player = "1";

class Field {

    constructor(first, second, third, forth, fifth, sixth, seventh, eighth, ninth) {
        this.first = first;
        this.second = second;
        this.third = third;
        this.forth = forth;
        this.fifth = fifth;
        this.sixth = sixth;
        this.seventh = seventh;
        this.eighth = eighth;
        this.ninth = ninth;
    }

    draw() {
        document.getElementById("field").innerHTML = `
                <button id="button1", onclick="field.place('button1')">${this.first}</button>|<button id="button2", onclick="field.place('button2')">${this.second}</button>|<button id="button3", onclick="field.place('button3')">${this.third}</button><br>
                <button id="button4", onclick="field.place('button4')">${this.forth}</button>|<button id="button5", onclick="field.place('button5')">${this.fifth}</button>|<button id="button6", onclick="field.place('button6')">${this.sixth}</button><br>
                <button id="button7", onclick="field.place('button7')">${this.seventh}</button>|<button id="button8", onclick="field.place('button8')">${this.eighth}</button>|<button id="button9", onclick="field.place('button9')">${this.ninth}</button>
            `;
    }

    place(buttonId) {
        if (document.getElementById("wonMassage").textContent == "") {
            if (player == "1") {
                if (document.getElementById(buttonId).textContent != "o") {
                    switch (buttonId) {
                        case "button1":
                            this.first = "x";
                            break;

                        case "button2":
                            this.second = "x";
                            break;

                        case "button3":
                            this.third = "x";
                            break;

                        case "button4":
                            this.forth = "x";
                            break;

                        case "button5":
                            this.fifth = "x";
                            break;

                        case "button6":
                            this.sixth = "x";
                            break;

                        case "button7":
                            this.seventh = "x";
                            break;

                        case "button8":
                            this.eighth = "x";
                            break;

                        case "button9":
                            this.ninth = "x";
                            break;
                    }

                    player = "2";
                    this.check("1");
                    this.draw();
                }
            } else if (player == "2") {
                if (document.getElementById(buttonId).textContent != "x") {
                    switch (buttonId) {
                        case "button1":
                            this.first = "o";
                            break;

                        case "button2":
                            this.second = "o";
                            break;

                        case "button3":
                            this.third = "o";
                            break;

                        case "button4":
                            this.forth = "o";
                            break;

                        case "button5":
                            this.fifth = "o";
                            break;

                        case "button6":
                            this.sixth = "o";
                            break;

                        case "button7":
                            this.seventh = "o";
                            break;
                        case "button8":
                            this.eighth = "o";
                            break;

                        case "button9":
                            this.ninth = "o";
                            break;
                    }

                    player = "1";
                    this.check("2");
                    this.draw();
                }
            }
        }
    }


    check(player) {
        let mark = "";
        let win = `Spieler ${player} hat gewonnen!`;
        let won = false;
        let all = [this.first, this.second, this.third, this.forth, this.fifth, this.sixth, this.seventh, this.eighth, this.ninth];

        switch (player) {
            case "1":
                mark = "x";
                break;

            case "2":
                mark = "o";
                break;
        }

        if (this.first == mark && this.second == mark && this.third == mark) {
            won = true;
        } else if (this.forth == mark && this.fifth == mark && this.sixth == mark) {
            won = true;
        } else if (this.seventh == mark && this.eighth == mark && this.ninth == mark) {
            won = true;

        } else if (this.first == mark && this.forth == mark && this.seventh == mark) {
            won = true;
        } else if (this.second == mark && this.fifth == mark && this.eighth == mark) {
            won = true;
        } else if (this.third == mark && this.sixth == mark && this.ninth == mark) {
            won = true;

        } else if (this.first == mark && this.fifth == mark && this.ninth == mark) {
            won = true;
        } else if (this.third == mark && this.fifth == mark && this.seventh == mark) {
            won = true;
        } else if (!all.includes("_") && !all.includes("")) {
            document.getElementById("wonMassage").textContent = "Unentschieden!"
        }





        if (won) {
            document.getElementById("wonMassage").textContent = win;
        }
    }
}

let field = new Field("_", "_", "_", "_", "_", "_", "", "", "");
field.draw();
