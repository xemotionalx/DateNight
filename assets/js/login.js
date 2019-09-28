// Stored Variables


// setup materialize componets
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

// Golbal variables
console.log('test');
console.log($);

// FireBase Config
var firebaseConfig = {
  apiKey: "AIzaSyDi7sAhzFxcoGeoae7z8VI1jbT-UB_kAJA",
  authDomain: "project-1-3f974.firebaseapp.com",
  databaseURL: "https://project-1-3f974.firebaseio.com",
  projectId: "project-1-3f974",
  storageBucket: "project-1-3f974.appspot.com",
  messagingSenderId: "1058372464183",
  appId: "1:1058372464183:web:c9c2c7d3da3e564fc019b2",
  measurementId: "G-H56C11S1CB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.database();
// update firestore settings
// db.settings({timestampsInSnapshots: true});


// Sign up
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener('submit', (event) => {

  event.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  // Test
  console.log(email);
  console.log(password);

  // sign up user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // Test
    console.log(cred);
     db.ref('/users').push({
       uid:cred.user.uid, 
       email: email
     });
    // const modal = document.querySelector('#modal-signup');
    // MSAssertion.Modal.getInstance(modal).close();
    signupForm.reset();
  });

});
// logout

const logout = document.querySelector("#logout")
logout.addEventListener('click', (event) => {

  event.preventDefault();

  auth.signOut().then(() => {

    console.log("user signed out");

  })

})

// Log in

const logInForm = document.querySelector("#login-form");
logInForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // get user info
  const email = logInForm['login-email'].value;
  const password = logInForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // Test
    console.log(cred.user);
    // close the login modal/reset
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    logInForm.reset();

  });


});

// Store Data

// const docRef = db.collection("samples").doc("homebody");           
const outputHeader = document.querySelector('#sample');
const inputText = document.querySelector('#newData');
const saveButton = document.querySelector("#saveButton");
//  Test

console.log("This is outputHeader:", outputHeader);
console.log("This is inputText:", inputText);
console.log("This is the saveButton", saveButton);

saveButton.addEventListener("click", function () {

  const texttoSave = inputText.value;
  //  Test
  console.log("I am going to save" + inputText + "to firebase");
  docRef.set({

    outputHeader: inputText.value
  }).then(function (error) {



  })

});


// Test















