
import React, { useState } from 'react'
//import { BiSearchAlt2 } from "react-icons/bi";
//import OtherUsers from './OtherUsers';
import axios from "axios";
//import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import OtherUsers from './OtherUsers';
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice';
import { setMessages, } from '../redux/messageSlice';
import { setRemoveToken } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
//import { setMessages } from '../redux/messageSlice';
//import { BASE_URL } from '..';
 
const Sidebar = () => {
    const [search, setSearch] = useState("");
    const {otherUsers} = useSelector(store=>store.user);
    console.log(otherUsers)
    const dispatch = useDispatch();
        const navigate=useNavigate()
   // const navigate = useNavigate();
const logoutHandler = async () => {
        try {
            const res = await axios.get(`https://chatapp-backend1-1.onrender.com/app/auth/logout`);
            navigate("/login");
            alert(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    }
 
    const searchSubmitHandler = (e) => {
        e.preventDefault();
       const conversationUser = otherUsers?.find((user)=> user.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversationUser){
            dispatch(setOtherUsers([conversationUser]));
        }else{
            toast.error("User not found!");
        }
    }
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <form onSubmit={searchSubmitHandler} action="" className='flex items-center gap-2'>
                <input
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className='input input-bordered rounded-md' type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='btn bg-zinc-700 text-white'>
                    <p className='w-6 h-6 outline-none flex justify-center'>Search </p>
                </button>
            </form>
            <div className="divider px-3"></div> 
            <OtherUsers/>
            <div className='mt-2'>
                <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar
