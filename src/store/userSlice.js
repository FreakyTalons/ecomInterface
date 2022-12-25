import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    currentUser: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: () =>
    {
        setLoggedIn: (state) =>
        {
            state.loggedIn = !state.loggedIn
        };

        setCurrentUser: (state,action) =>
        {
            state.currentUser = action.payload
        }
    }
})

export default userSlice.reducer;