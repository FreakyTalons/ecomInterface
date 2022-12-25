import configureStore from "@reduxjs/toolkit";
import dispDeetsReducer from "./dispDeetsSlice";
import userReducer from "./userSlice";
import productsListReducer from "./productsListSlice";
export const store = configureStore({
    reducer:{
        productsList : productsListReducer,
        user : userReducer,
        dispDeets : dispDeetsReducer,
    },
});