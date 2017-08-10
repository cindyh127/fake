function checkIfLoggedIn() {
    var database = firebase.database()

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('User signed in')
            console.log(user)
            
            // document.getElementById('sharelocationbutton')
            // .setAttribute('style','display: inline-block; visibility: visible') 

            var userId = user.uid
            var displayName = user.displayName

            var userRef = database.ref('/loggedInUsers').child(userId)
                //.child(displayName)
            userRef.set({
                displayName: displayName,
            })

            // var login = document.getElementById('login-button')
            // login.innerHTML = "Log Out"
            // login.setAttribute('onclick', '{signOut()}')

            // var photoURL = user.photoURL
            // document.getElementById('google-small-pic')
            //     .setAttribute('src', photoURL)

        }
        else {
            // var login = document.getElementById('login-button')
            // login.innerHTML = "Log In"
            // login.setAttribute('onclick', '{signInWithGoogle()}')
            // document.getElementById('sharelocationbutton')
            // .setAttribute('style','display: none; visibility: hidden')
        }
    })

}

window.onload = function() {
    checkIfLoggedIn()
}

function signInWithGoogle() {
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider


    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(function(data) {
            console.log(data)
            var newUrl = "/profile"
            window.location.href = newUrl
            checkIfLoggedIn()
        })
        .catch(function(error) {
            console.log(error)
        })
}