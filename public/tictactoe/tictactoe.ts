let field;

document.addEventListener("DOMContentLoaded", event => {
    //@ts-ignore
    const app = firebase.app();
    //@ts-ignore
    const db = firebase.firestore();

    field = new Game(db);
    field.init();
});

