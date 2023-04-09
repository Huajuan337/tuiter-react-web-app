import { createSlice } from "@reduxjs/toolkit";
// import tuits from '../tuits/tuits.json';
import { deleteTuitThunk, findTuitsThunk,createTuitThunk,updateTuitThunk } from "../../services/tuits-thunks";


const initialState = {
    tuits: [],
    loading: false,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState, 
    reducers: {},
    extraReducers: {
        [findTuitsThunk.pending]: (state, action) => {
            state.loading = true;
            state.tuits = [];
        },

        [findTuitsThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.tuits = payload;
        }, 
        [findTuitsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }, 
        [deleteTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.tuits = state.tuits.filter(tuit => tuit._id !== payload);
        }, 
        [deleteTuitThunk.fulfilled]: (state, action) => {
            state.loading = false;
            const tuitNdx = state.tuits.findIndex(tuit => tuit._id === action.payload);
            state.tuits.splice(tuitNdx, 1);
        },
        [createTuitThunk.fulfilled]:(state, { payload }) => {
            state.loading = false
            state.tuits.push(payload)
        },
        [updateTuitThunk.fulfilled]:(state, { payload }) => {
            state.loading = false
            const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
            }
        },
    }

});

export default tuitsSlice.reducer;
export const {createTuit, deleteTuit, updateTuit} = tuitsSlice.actions;