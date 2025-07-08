


import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name:'data',
    initialState:{
        postse:[],
        selectedPost:null,
        count:0
        
    },
    reducers:{
        //actions
    increment:(state,action) => {
            state.count = state.count+1
        },
  decrement:(state,action) => {
            state.count = state.count-1
        }
    }
});
export const {increment, decrement} = counter.actions;
export default counter.reducer;