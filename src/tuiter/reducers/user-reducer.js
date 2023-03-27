import { createSlice } from "@reduxjs/toolkit";
import user from "../profile/profile.json";

const userSlice = createSlice({
    name: "user",
    initialState: user, 
    reducers: {
        updateUser: (state, action) => {
            // state.user = action.payload;
            // return state;
            state = {...state, ...action.payload}
            return state;   // need to return the new state 
        }   
    }
});

export default userSlice.reducer;
export const {updateUser} = userSlice.actions;