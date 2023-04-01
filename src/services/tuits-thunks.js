import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as service from './tuits-service.js'


// createAsyncThunk function can wrap an asynchronous HTTP function so that 
// it can interact with a Redux reducer to store data from a remote server into a local redux store.
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', 
    async () => {
        return await service.findTuits();    // thunk invokes service function, returned promise is resolved
                                      // returned data goes in redux action.payload
})


export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tid) => {
        await service.deleteTuit(tid);
        return tid;   // thunk returns tid to reducer
})


export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit; 
    }
)


export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) => {
        await service.updateTuit(tuit);
        return tuit; 
})
