import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment } from './redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

import Signup from './Auth/Singup'
import Login from './Auth/Login'
import Sidebar from './components/Sidebar'
import UserAuth from './Hooks/UserAuth'
import HomePage from './components/HomePage'
import io from 'socket.io-client'
import OtherUsers from './components/OtherUsers'
import { setSocket } from './redux/socketSlice'
import { setOnlineUsers } from './redux/userSlice'


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },

])



function App() {
const dispatch=useDispatch()
  const {socket} = useSelector(store=>store.socket);

//const [socket,setSocket]=useState("")
const {authUser}=useSelector((store)=>store.user)
console.log(authUser)


useEffect(()=>{

   if(authUser){
      const socketio = io(`https://chatapp-backend1-1.onrender.com`, {
          query:{
            userId:authUser._id
          }
      });
      dispatch(setSocket(socketio));



      socketio?.on('getOnlineUsers', (onlineUsers)=>{
        dispatch(setOnlineUsers(onlineUsers))
      });
      return () => socketio.close();
    }else{
      if(socket){
        socket.close();
        dispatch(setSocket(null));
      }
    }



},[authUser])



  return (

    <>

<div className='p-4 w-full h-screen   flex justify-center items-center '>
 <RouterProvider router={router}/>

</div>
<UserAuth/>
    </>
  )
}

export default App
