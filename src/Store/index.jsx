import { configureStore } from "@reduxjs/toolkit";
import burgerSliceReducer from "./BurgerMenu";

const store = configureStore({
    reducer:{
        burger: burgerSliceReducer,
    }
})

export default store;