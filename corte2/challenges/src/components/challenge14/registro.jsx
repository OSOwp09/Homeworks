import { async } from "@firebase/util";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import { useForm } from "../../hooks/useForm";
import { logout, register } from "../../store/slices/auth/AuthSlice";
import { registerAuth } from "../../store/slices/auth/Thunks";

export const Registro = () => {
    const dispatch = useDispatch()

    const {email, password, onInputChange, formState} = useForm({
        email:'prueba@gmail.com',
        password:'123456'
    })

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(formState);
        dispatch(registerAuth(email, password, email))
    }

    //para mantener al usuario actual logeado se usa onAuthStateChange
    useEffect(()=>{
        onAuthStateChanged(auth, async(user)=>{
            if (!user) return dispatch(logout())

            dispatch(register({email: user.email}))
        })
    },[])

    console.log(auth.currentUser);

    //--------------------------------------------------

    return(
    <>
        <h1>Registro</h1>  
        <hr />
        <form onSubmit={(event)=>onSubmit(event)}>
            <input name='email' type="email" onChange={(event) => onInputChange(event)} value={email}/>
            <input name='password' type="password"  onChange={(event) => onInputChange(event)} value={password}/>
        
            <button type="submit"> Registro </button>
        </form>
    </>
    )
}