


import React from 'react'
import {useSelector} from "react-redux";
import useGetOtherUsers from '../Hooks/useGetOtherUsers';
import Login from '../Auth/Login';
import Sidebar from './Sidebar';
import UsersShow from './UsersShow';


const OtherUsers = () => {
    // my custom hook
    useGetOtherUsers()
   const {otherUsers} = useSelector(store=>store.user);
   console.log(otherUsers)
  //  if (!otherUsers) return; // early return in react
     
    return (
        <div className='overflow-auto flex-1'>
         {
                otherUsers?.map((user)=>{
                    return (
                        <UsersShow key={user._id} user={user}/>
                    )
                })
            } 
        </div>
    )
}

export default OtherUsers



