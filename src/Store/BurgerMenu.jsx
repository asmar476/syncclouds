import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
}

const burgerSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers:{
        openBurger:(state)=>{
            state.open = !state.open;
        }
    }
})

export const burgerSliceAction   = burgerSlice.actions;
export default burgerSlice.reducer;