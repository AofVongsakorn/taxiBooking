import React from 'react'
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className='flex items-center justify-between p-2 px-10 border-b-[1px] shadow-md' >
      <div className='flex gap-10 items-center'>
        <img src="/taxi.png"  
        alt='taxi'
        width={100}/>
        <div className='flex gap-6 font-medium'>
          <h2 className='hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all'>Home</h2>
          <h2 className='hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all'>History</h2>
          <h2 className='hover:bg-gray-100 p-2 cursor-pointer rounded-md transition-all'>Help</h2>
        </div>
      </div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Navbar