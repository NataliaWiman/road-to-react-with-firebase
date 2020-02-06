import app from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCIJZDwu0aGjzUNbJwFk2n07hj-HnBtQrw",
  authDomain: "road-to-react-with-fireb-8d199.firebaseapp.com",
  databaseURL: "https://road-to-react-with-fireb-8d199.firebaseio.com",
  projectId: "road-to-react-with-fireb-8d199",
  storageBucket: "road-to-react-with-fireb-8d199.appspot.com",
  messagingSenderId: "278804727343",
  appId: "1:278804727343:web:700c02a38f3cee459828da"
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
