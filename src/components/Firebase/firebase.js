import app from "firebase/app";

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
  }
}

export default Firebase;
