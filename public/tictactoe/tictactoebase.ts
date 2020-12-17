function Game(db) {
    let player: string;
    let turn: string;
    const gameCollection = db.collection("games").doc("dev-game");

    this.init = () => {
        gameCollection.get().then(doc => {
            const data = doc.data();
            console.log(data);
            const players = data.players;
            console.log(players)
            if (players === "0") {
                player = "1";
                gameCollection.update({ players: "1" });
            } else if (players === "1") {
                player = "2";
                gameCollection.update({ players: "2" });
            }
        });

        gameCollection.onSnapshot(doc => {
            turn = doc.data().turn;
        });

        console.log(player);
        this.draw();
    }

    this.draw = function () {
        gameCollection.onSnapshot(doc => {
            const data = doc.data();
            console.log(data);
            document.getElementById("field").innerHTML = `     
            <button id="button1", onclick="field.place('button1')">${data.first}</button>|<button id="button2", onclick="field.place('button2')">${data.second}</button>|<button id="button3", onclick="field.place('button3')">${data.third}</button><br>
            <button id="button4", onclick="field.place('button4')">${data.fourth}</button>|<button id="button5", onclick="field.place('button5')">${data.fifth}</button>|<button id="button6", onclick="field.place('button6')">${data.sixth}</button><br>
            <button id="button7", onclick="field.place('button7')">${data.seventh}</button>|<button id="button8", onclick="field.place('button8')">${data.eight}</button>|<button id="button9", onclick="field.place('button9')">${data.nineth}</button>`
        });
    };

    this.place = function (buttonId) {
        if (document.getElementById("wonMassage").textContent == "") {
            if (player === "1" && turn === "1") {
                if (document.getElementById(buttonId).textContent != "o") {
                    switch (buttonId) {
                        case "button1":
                            gameCollection.update({ first: "x" });
                            break;

                        case "button2":
                            gameCollection.update({ second: "x" });
                            break;

                        case "button3":
                            gameCollection.update({ third: "x" });
                            break;

                        case "button4":
                            gameCollection.update({ fourth: "x" });
                            break;

                        case "button5":
                            gameCollection.update({ fifth: "x" });
                            break;

                        case "button6":
                            gameCollection.update({ sixth: "x" });
                            break;

                        case "button7":
                            gameCollection.update({ seventh: "x" });
                            break;

                        case "button8":
                            gameCollection.update({ eight: "x" });
                            break;

                        case "button9":
                            gameCollection.update({ nineth: "x" });
                            break;
                    }
                    gameCollection.update({ turn: "2" });
                    this.check("1");
                }
            } else if (player == "2" && turn === "2") {
                if (document.getElementById(buttonId).textContent != "x") {
                    switch (buttonId) {
                        case "button1":
                            gameCollection.update({ first: "o" });
                            break;

                        case "button2":
                            gameCollection.update({ second: "o" });
                            break;

                        case "button3":
                            gameCollection.update({ third: "o" });
                            break;

                        case "button4":
                            gameCollection.update({ fourth: "o" });
                            break;

                        case "button5":
                            gameCollection.update({ fifth: "o" });
                            break;

                        case "button6":
                            gameCollection.update({ sixth: "o" });
                            break;

                        case "button7":
                            gameCollection.update({ seventh: "o" });
                            break;

                        case "button8":
                            gameCollection.update({ eight: "o" });
                            break;

                        case "button9":
                            gameCollection.update({ nineth: "o" });
                            break;
                    }
                    gameCollection.update({ turn: "1" });
                    this.check("2");
                }
            }
        }

    };

    // this.check = function (player) {
    //     let mark = "";
    //     let win = `Spieler ${player} hat gewonnen!`;
    //     let won = false;
    //     let all = [this.first, this.second, this.third, this.forth, this.fifth, this.sixth, this.seventh, this.eighth, this.ninth];

    //     let firstr = [this.first, this.second, this.third];
    //     let secondr = [this.forth, this.fifth, this.sixth];
    //     let thirdr = [this.seventh, this.eighth, this.ninth];
    //     let vfirst = [this.first, this.forth, this.seventh];
    //     let vsecond = [this.second, this.fifth, this.eighth];
    //     let vthird = [this.third, this.sixth, this.ninth];
    //     let diagonal1 = [this.first, this.fifth, this.ninth];
    //     let diagonal2 = [this.third, this.fifth, this.seventh];

    //     switch (player) {
    //         case "1":
    //             mark = "o";
    //             break;

    //         case "2":
    //             mark = "x";
    //             break;
    //     }

    //     if (!firstr.includes(mark) && !firstr.includes("_")) {
    //         won = true;
    //     } else if (!secondr.includes(mark) && !secondr.includes("_")) {
    //         won = true;
    //     } else if (!thirdr.includes(mark) && !thirdr.includes("")) {
    //         won = true;
    //     } else if (!vfirst.includes(mark) && !vfirst.includes("") && !vfirst.includes("_")) {
    //         won = true;
    //     } else if (!vsecond.includes(mark) && !vsecond.includes("") && !vsecond.includes("_")) {
    //         won = true;
    //     } else if (!vthird.includes(mark) && !vthird.includes("") && !vthird.includes("_")) {
    //         won = true;
    //     } else if (!diagonal1.includes(mark) && !diagonal1.includes("") && !diagonal1.includes("_")) {
    //         won = true;
    //     } else if (!diagonal2.includes(mark) && !diagonal2.includes("") && !diagonal2.includes("_")) {
    //         won = true;
    //     } else if (!all.includes("_") && !all.includes("")) {
    //         document.getElementById("wonMassage").textContent = "Unentschieden!";
    //     }

    //     if (won) {
    //         document.getElementById("wonMassage").textContent = win;
    //     }
    // };
};