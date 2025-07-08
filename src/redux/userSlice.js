

import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
token:localStorage.getItem("token"),

    initialState:{
        authUser:null,
        otherUsers:null,
        selectedUser:null,
        onlineUsers:null,
        getTokens:null,
        removeToken:null,
    //  value:!!localStorage.getItem("token"),
    // tokens:localStorage.getItem("token"),
    },
    reducers:{
        // storetoken:(state,action)=>{

        //  state.value=localStorage.setItem("token",action.payload)
        // },
        // getToken:(state,action)=>{

        // const data= state.value=!!localStorage.getItem("token",action.payload)
        // console.log(data)
        // //state.getToken=localStorage.getItem("token",action.payload)
        // },
      setAuthUser:(state,action)=>{
            state.authUser = action.payload;
        },

        setRemoveToken:(state,action)=>{
        state.localStorage=localStorage.removeItem("token",action.payload)

        },
        setOtherUsers:(state, action)=>{
            state.otherUsers = action.payload;
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload;
        },
        setOnlineUsers:(state,action)=>{
            state.onlineUsers = action.payload;
        }
    }
});
export const {storetoken,getToken,setAuthUser,setOtherUsers,setSelectedUser,setOnlineUsers,setGetTokens,setRemoveToken} = userSlice.actions;
export default userSlice.reducer;


