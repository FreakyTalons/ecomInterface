import configureStore from "@reduxjs/toolkit";
import productsListReducer from "./productsListSlice";
export const store = configureStore({
    reducer:{
        productsList : productsListReducer,
    },
});