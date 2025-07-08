
import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

function HomePage() {

    const {authUser}=useSelector(store=>store.user)
    console.log(authUser)
  
  return (
    <div>
  
 {authUser?<div className='flex gap-9 sm:h-[450px] overflow-scroll md:h-[550px] rounded-lg  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
<Sidebar/>
<div className=' sm:h-[450px] h-[550px] bg-amber-200 overflow-scroll'>
   <MessageContainer/>

</div>
  </div>:<Login/>
 
 }

  </div>
 




  )
}

export default HomePage
