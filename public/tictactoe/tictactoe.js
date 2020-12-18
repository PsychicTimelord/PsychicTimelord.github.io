let field;
let app;
let db;
const password = document.getElementById("game-password");
document.addEventListener("DOMContentLoaded", event => {
    //@ts-ignore
    app = firebase.app();
    //@ts-ignore
    db = firebase.firestore();
});
function create() {
    try {
        const games = db.collection("games");
        //if (games.doc(password.value) === null) {
        games.doc(password.value).set({
            first: "_",
            second: "_",
            third: "_",
            fourth: "_",
            fifth: "_",
            sixth: "_",
            seventh: "",
            eight: "",
            ninth: "",
            players: "0",
            turn: "1",
            won: ""
        })
            .then(function () {
            console.log("create");
            document.getElementById("login").innerHTML = "";
            field = new Game(db, password.value);
            field.init();
        })
            .catch(function (error) {
            console.error("Error writing document: ", error);
        });
        // } else {
        //     console.log(games.doc(password.value));
        // }
    }
    catch (e) {
        console.log(e);
    }
}
function join() {
    console.log("join");
    document.getElementById("login").innerHTML = "";
    field = new Game(db, password.value);
    field.init();
}
