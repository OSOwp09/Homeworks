import {getAuth} from "firebase/auth" // agregar esta linea +++++++++++

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBZSKIbP-VRP0EbYyrrb1q4GL3hpaB_6pw",
	authDomain: "prueba-9bb3a.firebaseapp.com",
	projectId: "prueba-9bb3a",
	storageBucket: "prueba-9bb3a.appspot.com",
	messagingSenderId: "796100080835",
	appId: "1:796100080835:web:bb5fef20d271bec3391e76",
	measurementId: "G-EZXJ21HL5Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // agregamos esta linea +++++++++++

//const analytics = getAnalytics(app); // comentamos esta linea -------

export{app,auth} // agregamos esta linea ++++++++++++
