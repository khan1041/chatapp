

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// //import { postslice } from "./PostsSlice";
// import counter from './counterSlice'
// import userdata from './userSlice'
// import messageid from './messageSlice'
// import socketmessage from './socketSlice'
// import locastore from './localstorage'
// //import mypost from './conterslice'
// const store = configureStore({
//     reducer:{
//         count:counter,
//         user:userdata,
//          store:locastore,
//         message:messageid,
//          socket:socketmessage
//     }})
// export default store;


import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { postslice } from "./PostsSlice";
import counter from './counterSlice'
import userdata from './userSlice'
import messageid from './messageSlice'
import socketmessage from './socketSlice'
//import mypost from './conterslice'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage'
 const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

 const rootReducer = combineReducers({
        user:userdata,
        message:messageid,
        socket:socketmessage
  
 })
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export default store;


