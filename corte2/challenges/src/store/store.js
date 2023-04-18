import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/AuthSlice";
import counterReducer from "../components/challenge13/counterSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        
    },
    reducer: counterReducer
})