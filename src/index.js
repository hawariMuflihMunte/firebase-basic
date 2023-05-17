import * as firebase from '../firebase';

const signInButton = document.getElementById('signin-button');
const signOutButton = document.getElementById('signout-button');

const {
  auth,
  authentication
} = firebase;

signInButton.addEventListener('click', () => {
  const provider = new authentication.GoogleAuthProvider()
    authentication.signInWithPopup(auth, provider)
      .then((result) => {

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = authentication.GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = authentication.GoogleAuthProvider.credentialFromError(error);
      })
});

signOutButton.addEventListener('click', () => {
  auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error(`Sign-out error: ${error}`);
      })
});

// Attach the onAuthStateChanged listener when your app initializes
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    // Perform actions for authenticated user
    console.log('User is signed in:', user.uid);
    console.log(user.displayName)
    // Update UI, redirect, fetch user data, etc.

    document.body.innerHTML = `
      <h1>${user.displayName}</h1>
      <button id="signout-button">Sign Out</button>
    `;

    document.querySelector('#signout-button').addEventListener('click', () => {
      auth.signOut()
          .then(() => {
            console.log('User signed out');
          })
          .catch((error) => {
            console.error(`Sign-out error: ${error}`);
          })
    });

  } else {
    // User is signed out
    // Perform actions for non-authenticated user
    console.log('User is signed out');
    // Update UI, redirect, etc.
  }
});
