import { createAsyncThunk, createSlice } from  "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    value: [],
    error: "",
}

export const fetchData = createAsyncThunk("store/fetchData", async () => {
    const response = await axios
      .get("http://localhost:5000/products");
    return response.data.data;
  });

  const productsListSlice = createSlice({
    name: "productsList",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => 
        {
            state.loading = false;
            state.value = action.payload;
            state.error = "";
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.value = [];
            state.error = action.error.message;
        });
    },
  });

  export default productsListSlice.reducer;