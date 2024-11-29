import { configureStore } from "@reduxjs/toolkit";
import mahasiswaReducer from "./slices/mahasiswaSlice";



const store = configureStore({
    reducer:{
        mahasiswaReducer,
    }
});

export default store; 