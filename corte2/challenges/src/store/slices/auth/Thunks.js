import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import { authSlice, register } from "./AuthSlice";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const registerAuth = (email, password, name) => {
	//const {auth} = authSlice(state => state.auth)
	return async (dispatch) => {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		if (response) {
			await updateProfile(auth.currentUser, {
				displayName: name.split("@")[0],
				photoURL: "",
			});

			const { email } = response.user;
			dispatch(register({ email }));
		} else {
			throw new Error("register failed");
		}
	};
};

export const loginAuth = (email, password) => {
	return async (dispatch) => {
		try {
			const response = await signInWithEmailAndPassword(auth, email, password);

			// Update the auth state with user information
			if (response.user) {
				const { uid, email, displayName, photoURL } = response.user;

				dispatch(
					authSlice.actions.login({
						uid,
						email,
						displayName,
						photoUrl: photoURL,
					})
				);
			}
		} catch (error) {
			// Handle login error
			console.error("Login error:", error);
			throw new Error("Login failed");
		}
	};
};

export const logoutAuth = () => {
	return async (dispatch) => {
		try {
			// sign out the user
			await auth.signOut();

			// dispatch the logout action
			dispatch(authSlice.actions.logout());
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const logWithGoogleAuth = () => {
	return async (dispatch) => {
		const provider = new GoogleAuthProvider();

		try {
			const result = await signInWithPopup(auth, provider);
			const { displayName, email, photoURL, uid } = result.user;
			await updateProfile(auth.currentUser, { displayName, photoURL });
			dispatch(login({ uid, email, displayName, photoURL }));
		} catch (error) {
			console.log(error.message);
		}
	};
};
