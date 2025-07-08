
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
//import { setOtherUsers } from '../redux/userSlice';
import { setOtherUsers } from '../redux/userSlice';
const useGetOtherUsers = () => {
    const dispatch = useDispatch();

         useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`https://chatapp-backend1-1.onrender.com/app/auth/get`);
                // store
                console.log("other users -> ",res);
                dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    }, [])


}      

export default useGetOtherUsers
