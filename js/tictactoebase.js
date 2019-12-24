export default function Game(first, second, third, forth, fifth, sixth, seventh, eighth, ninth) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.forth = forth;
    this.fifth = fifth;
    this.sixth = sixth;
    this.seventh = seventh;
    this.eighth = eighth;
    this.ninth = ninth;
    this.player = "1";
    this.placed = false;

    this.draw = function () {
        document.getElementById("field").innerHTML = `
                <button id="button1", onclick="field.place('button1')">${this.first}</button>|<button id="button2", onclick="field.place('button2')">${this.second}</button>|<button id="button3", onclick="field.place('button3')">${this.third}</button><br>
                <button id="button4", onclick="field.place('button4')">${this.forth}</button>|<button id="button5", onclick="field.place('button5')">${this.fifth}</button>|<button id="button6", onclick="field.place('button6')">${this.sixth}</button><br>
                <button id="button7", onclick="field.place('button7')">${this.seventh}</button>|<button id="button8", onclick="field.place('button8')">${this.eighth}</button>|<button id="button9", onclick="field.place('button9')">${this.ninth}</button>
            `;
    };

    this.place = function (buttonId) {
        if (document.getElementById("wonMassage").textContent == "") {
            this.placed = true;
            if (this.player == "1") {
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

                    this.player = "2";
                    this.check("1");
                }
            } else if (this.player == "2") {
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

                    this.player = "1";
                    this.check("2");
                }
            }
            this.placed = false;
            this.draw();
        }
    };

    this.check = function (player) {
        let mark = "";
        let win = `Spieler ${player} hat gewonnen!`;
        let won = false;
        let all = [this.first, this.second, this.third, this.forth, this.fifth, this.sixth, this.seventh, this.eighth, this.ninth];

        let firstr = [this.first, this.second, this.third];
        let secondr = [this.forth, this.fifth, this.sixth];
        let thirdr = [this.seventh, this.eighth, this.ninth];
        let vfirst = [this.first, this.forth, this.seventh];
        let vsecond = [this.second, this.fifth, this.eighth];
        let vthird = [this.third, this.sixth, this.ninth];
        let diagonal1 = [this.first, this.fifth, this.ninth];
        let diagonal2 = [this.third, this.fifth, this.seventh];

        switch (player) {
            case "1":
                mark = "o";
                break;

            case "2":
                mark = "x";
                break;
        }

        if (!firstr.includes(mark) && !firstr.includes("_")) {
            won = true;
        } else if (!secondr.includes(mark) && !secondr.includes("_")) {
            won = true;
        } else if (!thirdr.includes(mark) && !thirdr.includes("")) {
            won = true;
        } else if (!vfirst.includes(mark) && !vfirst.includes("") && !vfirst.includes("_")) {
            won = true;
        } else if (!vsecond.includes(mark) && !vsecond.includes("") && !vsecond.includes("_")) {
            won = true;
        } else if (!vthird.includes(mark) && !vthird.includes("") && !vthird.includes("_")) {
            won = true;
        } else if (!diagonal1.includes(mark) && !diagonal1.includes("") && !diagonal1.includes("_")) {
            won = true;
        } else if (!diagonal2.includes(mark) && !diagonal2.includes("") && !diagonal2.includes("_")) {
            won = true;
        } else if (!all.includes("_") && !all.includes("")) {
            document.getElementById("wonMassage").textContent = "Unentschieden!";
        }

        if (won) {
            document.getElementById("wonMassage").textContent = win;
        }
    };
}
