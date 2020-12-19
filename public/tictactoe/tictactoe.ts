let field;
let app;
let db;
const password = document.getElementById("game-password") as HTMLInputElement;
const id = document.getElementById("game-id") as HTMLInputElement;

document.addEventListener("DOMContentLoaded", event => {
    //@ts-ignore
    app = firebase.app();
    //@ts-ignore
    db = firebase.firestore();
});

function create() {
    try {
        const game = db.collection("games");
        game.doc(id.value).get().then(doc => {
            if (!doc.exists) {
                game.doc(id.value).set({
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
                    .then(function () {
                        console.log("create");
                        document.getElementById("login").innerHTML = "";
                        field = new Game(db, id.value);
                        field.init();
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
            } else {
                alert("this id is already in use!");
            }
        });
    } catch (e) {
        console.log(e);
    }
}

function join() {
    try {
        db.collection("games").doc(id.value).get().then(doc => {
            if (doc.exists && password.value === doc.data().password) {
                if (doc.data().players.length < 2) {
                    //@ts-ignore
                    db.collection("games").doc(id.value).update({ players: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid) });
                    field = new Game(db, id.value);
                    field.init();
                    console.log("join");
                    document.getElementById("login").innerHTML = ""; //delete login form
                } else {
                    alert("The game is full!");
                }
            } else {
                alert("This or password is incorrect!");
            }
        });
    } catch (e) {
        console.log(e);
    }
}   