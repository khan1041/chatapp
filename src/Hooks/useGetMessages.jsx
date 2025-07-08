
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';
import axios from 'axios';
function useGetMessages() {

const dispatch = useDispatch();

    const token=useSelector((state)=>state.user.tokens)
      console.log(token)
    const {selectedUser} = useSelector(store=>store.user);
console.log(selectedUser)

     useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`https://chatapp-backend1-1.onrender.com/app/auth/getm/${selectedUser?._id}`,{
      
                });
                dispatch(setMessages(res.data))
            } catch (error) {

                console.log(error);
            }
        }
        fetchMessages();
    }, [selectedUser?._id,setMessages]);





  return (
    <div>
      
    </div>
  )
}

export default useGetMessages
