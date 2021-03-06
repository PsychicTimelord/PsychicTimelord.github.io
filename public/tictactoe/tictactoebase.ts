function Game(db, gameID) {
    let player: string;
    let turn: string;
    let turnSnapshot;
    const gameCollection = db.collection("games").doc(gameID);

    this.init = async () => {
        const doc = await gameCollection.get()
        const data = await doc.data();
        const players: Array<string> = data.players;
        //@ts-ignore
        const uuid = await firebase.auth().currentUser.uid;

        if (players[0] === uuid) {
            player = "1";
        } else if (players[1] === uuid) {
            player = "2";
        }
        console.log("init completed");
        this.draw();

        turnSnapshot = gameCollection.onSnapshot(doc => {
            turn = doc.data().turn;
        });
    }

    this.draw = () => {
        const mainSnapshot = gameCollection.onSnapshot(async (doc) => {
            const data = await doc.data();
            document.getElementById("field").innerHTML = `     
            <button id="button1", onclick="field.place('button1')">${data.first}</button>|<button id="button2", onclick="field.place('button2')">${data.second}</button>|<button id="button3", onclick="field.place('button3')">${data.third}</button><br>
            <button id="button4", onclick="field.place('button4')">${data.fourth}</button>|<button id="button5", onclick="field.place('button5')">${data.fifth}</button>|<button id="button6", onclick="field.place('button6')">${data.sixth}</button><br>
            <button id="button7", onclick="field.place('button7')">${data.seventh}</button>|<button id="button8", onclick="field.place('button8')">${data.eight}</button>|<button id="button9", onclick="field.place('button9')">${data.ninth}</button>`
            //@ts-ignore
            document.getElementById("idText").value(gameID);

            if (data.won !== "") {
                if (data.won === "tie") {
                    document.getElementById("wonMessage").textContent = `Tie!`;
                    turnSnapshot();
                    mainSnapshot();
                    if (player === "1") {
                        await db.collection("games").doc(gameID).delete();
                        console.log("game deleted!");
                    }
                } else {
                    document.getElementById("wonMessage").textContent = `Player ${data.won} won!`;
                    turnSnapshot();
                    mainSnapshot();
                    if (player === "1") {
                        await db.collection("games").doc(gameID).delete();
                        console.log("game deleted!");
                    }
                }
            }
            if (data.turn === player) {
                document.getElementById("turnMessage").textContent = "Your turn!";
            } else {
                document.getElementById("turnMessage").textContent = "";
            }
        });
    };

    this.place = function (buttonId) {
        if (document.getElementById("wonMessage").textContent == "") {
            if (player === "1" && turn === "1") {
                if (document.getElementById(buttonId).textContent != "o") {
                    switch (buttonId) {
                        case "button1":
                            gameCollection.update({ first: "x" });
                            gameCollection.update({ turn: "2" });
                            break;

                        case "button2":
                            gameCollection.update({ second: "x" });
                            gameCollection.update({ turn: "2" });
                            break;

                        case "button3":
                            gameCollection.update({ third: "x" });
                            gameCollection.update({ turn: "2" });
                            break;

                        case "button4":
                            gameCollection.update({ fourth: "x" });
                            gameCollection.update({ turn: "2" });
                            break;

                        case "button5":
                            gameCollection.update({ fifth: "x" });
                            gameCollection.update({ turn: "2" });
                            break;

                        case "button6":
                            gameCollection.update({ sixth: "x" });
                            gameCollection.update({ turn: "2" });
                            break;

                        case "button7":
                            gameCollection.update({ seventh: "x" });
                            gameCollection.update({ turn: "2" });
                            break;

                        case "button8":
                            gameCollection.update({ eight: "x" });
                            gameCollection.update({ turn: "2" });
                            break;

                        case "button9":
                            gameCollection.update({ ninth: "x" });
                            gameCollection.update({ turn: "2" });
                            break;
                    }
                    this.check("1")
                }
            } else if (player == "2" && turn === "2") {
                if (document.getElementById(buttonId).textContent != "x") {
                    switch (buttonId) {
                        case "button1":
                            gameCollection.update({ first: "o" });
                            gameCollection.update({ turn: "1" });
                            break;

                        case "button2":
                            gameCollection.update({ second: "o" });
                            gameCollection.update({ turn: "1" });
                            break;

                        case "button3":
                            gameCollection.update({ third: "o" });
                            gameCollection.update({ turn: "1" });
                            break;

                        case "button4":
                            gameCollection.update({ fourth: "o" });
                            gameCollection.update({ turn: "1" });
                            break;

                        case "button5":
                            gameCollection.update({ fifth: "o" });
                            gameCollection.update({ turn: "1" });
                            break;

                        case "button6":
                            gameCollection.update({ sixth: "o" });
                            gameCollection.update({ turn: "1" });
                            break;

                        case "button7":
                            gameCollection.update({ seventh: "o" });
                            gameCollection.update({ turn: "1" });
                            break;

                        case "button8":
                            gameCollection.update({ eight: "o" });
                            gameCollection.update({ turn: "1" });
                            break;

                        case "button9":
                            gameCollection.update({ ninth: "o" });
                            gameCollection.update({ turn: "1" });
                            break;
                    }
                    this.check("2")
                }
            }
        }

    };

    this.check = function (player) {
        gameCollection.get().then(doc => {
            const data = doc.data();
            let first = data.first;
            let second = data.second;
            let third = data.third;
            let fourth = data.fourth;
            let fifth = data.fifth;
            let sixth = data.sixth;
            let seventh = data.seventh;
            let eighth = data.eighth;
            let ninth = data.ninth;

            let mark = "";
            let won = false;

            let all = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];
            let firstr = [first, second, third];
            let secondr = [fourth, fifth, sixth];
            let thirdr = [seventh, eighth, ninth];
            let vfirst = [first, fourth, seventh];
            let vsecond = [second, fifth, eighth];
            let vthird = [third, sixth, ninth];
            let diagonal1 = [first, fifth, ninth];
            let diagonal2 = [third, fifth, seventh];

            switch (player) {
                case "1":
                    mark = "x";
                    break;

                case "2":
                    mark = "o";
                    break;
            }

            if (firstr[0] === mark && firstr[1] === mark && firstr[2] === mark) {
                won = true;
            } else if (secondr[0] === mark && secondr[1] === mark && secondr[2] === mark) {
                won = true;
            } else if (thirdr[0] === mark && thirdr[1] === mark && thirdr[2] === mark) {
                won = true;
            } else if (diagonal2[0] === mark && diagonal2[1] === mark && firstr[2] === mark) {
                won = true;
            } else if (diagonal1[0] === mark && diagonal1[1] === mark && diagonal1[2] === mark) {
                won = true;
            } else if (vfirst[0] === mark && vfirst[1] === mark && vfirst[2] === mark) {
                won = true;
            } else if (vsecond[0] === mark && vsecond[1] === mark && vsecond[2] === mark) {
                won = true;
            } else if (vthird[0] === mark && vthird[1] === mark && vthird[2] === mark) {
                won = true;
            } else if (!all.includes("") && !all.includes("_")) {
                gameCollection.update({ won: "tie" });
                gameCollection.update({ turn: "3" });
            }

            if (won) {
                gameCollection.update({ won: player });
                gameCollection.update({ turn: "3" });
            }
        });
    };
};