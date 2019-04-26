import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
var config = {
	apiKey: "AIzaSyACsgakuQUiLXXxN_seH1zN024Rrik_tqA",
	authDomain: "bento-starter-3cc9a.firebaseapp.com",
	databaseURL: "https://bento-starter-3cc9a.firebaseio.com",
	projectId: "bento-starter-3cc9a",
	storageBucket: "bento-starter-3cc9a.appspot.com",
	messagingSenderId: "506287278114"
};
firebase.initializeApp(config)
