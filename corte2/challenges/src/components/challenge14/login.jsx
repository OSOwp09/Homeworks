import { useState, useEffect, useMemo } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
	loginAuth,
	logoutAuth,
	logWithGoogleAuth,
} from "../../store/slices/auth/Thunks";
import { login, logout, authSlice } from "../../store/slices/auth/AuthSlice";
import { auth } from "../../firebase/config";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [currentUser, setCurrentUser] = useState("");
	const [isLoged, setIsLoged] = useState(false);
	const dispatch = useDispatch();

	const checkAuth = () => {
		console.log();
	};

	const checkAuthMemo = useMemo(() => checkAuth(), [auth.name])
	
	console.log(auth.currentUser.uid);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (!user) return dispatch(logout());
			dispatch(login({ email: user.email }));
			setCurrentUser(`User: ${auth.currentUser.email}`);
			setIsLoged(true);
		});

		auth.currentUser
			? (setIsLoged(true), setCurrentUser(`User: ${auth.currentUser.email}`))
			: (setIsLoged(false), setCurrentUser("Log in"));
	}, []);

	const handleLogout = async () => {
		try {
			dispatch(logoutAuth());
			setCurrentUser("Log in");
			setIsLoged(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginAuth(email, password));
	};

	const handleLoginWithGoogle = () => {
		try {
			dispatch(logWithGoogleAuth());
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<h2>{currentUser}</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				{!isLoged ? <button type="submit">Login</button> : null}
			</form>
			{!isLoged ? (
				<button onClick={handleLoginWithGoogle}>Login with Google</button>
			) : null}
			{isLoged ? <button onClick={handleLogout}>Logout</button> : null}
		</>
	);
}

export default LoginForm;
