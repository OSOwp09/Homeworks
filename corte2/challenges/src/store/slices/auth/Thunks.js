import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { authSlice } from "./AuthSlice";

export const registerAuth = (email, password) => {
    //const {auth} = authSlice(state => state.auth)
	return async (dispatch) => {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		if (response) {
			await updateProfile(auth.currentUser, {
				displayName: "camilo",
				photoURL: "",
			});

            const {email} = response.user
            dispatch(register({email}))

		}else{
            throw new Error('register failed')
        }
	};
};

export const loginAuth = (email, password) => {
    return async (dispatch)=>{
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        if (response) {
            
        }else{
            throw new Error('login failed')
        }
    }
}