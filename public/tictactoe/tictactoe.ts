let field;
let app;
let db;
const password = document.getElementById("game-password") as HTMLInputElement;
const idElement = document.getElementById("game-id") as HTMLInputElement;

document.addEventListener("DOMContentLoaded", event => {
    //@ts-ignore
    app = firebase.app();
    //@ts-ignore
    db = firebase.firestore();
});

async function create() {
    if (idElement.value !== "") {
        try {
            console.log("create");
            const game = db.collection("games");
            const gameDoc = await game.doc(idElement.value).get();

            if (await !gameDoc.exists) {
                await game.doc(idElement.value).set({
                    password: password.value,
                    first: "_",
                    second: "_",
                    third: "_",
                    fourth: "_",
                    fifth: "_",
                    sixth: "_",
                    seventh: "",
                    eight: "",
                    ninth: "",
                    players: [
                        //@ts-ignore
                        firebase.auth().currentUser.uid
                    ],
                    turn: "1",
                    won: ""
                })
                document.getElementById("login").innerHTML = "";
                field = new Game(db, idElement.value);
                field.init();
            } else {
                alert("this id is already in use!");
            }
        } catch (e) {
            console.log(e);
        }
    } else
        alert("You have to enter an ID!");

}

async function join() {
    try {
        const doc = await db.collection("games").doc(idElement.value).get()

        if (await doc.exists && password.value === doc.data().password) {
            if (doc.data().players.length < 2) {
                //@ts-ignore
                await db.collection("games").doc(idElement.value).update({ players: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid) });
                field = new Game(db, idElement.value);
                field.init();
                console.log("join");
                document.getElementById("login").innerHTML = ""; //delete login form
            } else {
                alert("The game is full!");
            }
        } else {
            alert("This or password is incorrect!");
        }
    } catch (e) {
        console.log(e);
    }
}   