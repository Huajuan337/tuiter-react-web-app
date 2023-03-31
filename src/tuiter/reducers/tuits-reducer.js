import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpeg",
   };
   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits, 
    reducers: {
        // create a tuit 
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,   
                _id: new Date().getTime(),
            });
        },

        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        updateTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload._id);
            state[index] = action.payload;
        }
    }
});

export default tuitsSlice.reducer;
export const {createTuit, deleteTuit, updateTuit} = tuitsSlice.actions;