import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartCount : 0,
    currentProd : 0,
}

const dispDeetsSlice = createSlice({
    name: "dispDeets",
    initialState,
    reducers: () =>
    {
        setCartCount: (state, action) =>
        {
            state.cartCount = state.cartCount+action.payload
        };

        setCurrentProd: (state,action) =>
        {
            state.currentProd = action.payload
        }
    }
})

export default dispDeetsSlice.reducer;