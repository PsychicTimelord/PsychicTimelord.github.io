document.addEventListener("DOMContentLoaded", event => {
    //@ts-ignore
    const auth = firebase.auth();

    auth.signInAnonymously()
        .then(() => {
            // Signed in..
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`)
            // ...
        })

    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log("Signed in: " + user.uid);
            // ...
        } else {
            // User is signed out
            console.log("Signed out: " + user.uid);
            // ...
        }
    });

});