

import React from 'react'
import useGetMessages from '../Hooks/useGetMessages'
import { useSelector } from 'react-redux';
import Message from './Message';
import useGetRealTimeMessage from '../Hooks/useGetRealTimeMessage';

function Messages() {
useGetMessages()
useGetRealTimeMessage()
const data=useSelector((state)=>state)
console.log(data)
 const { messages } = useSelector(store => store.message);
console.log(messages)

  return (
    <div>
       <div className=' px-4 overflow-clip'>
       
       

       
           {
               messages && messages?.map((message) => {
                    return (
                       <Message key={message._id} message={message}/>
                    )
                })
            } 

        </div>
    </div>
  )
}

export default Messages
