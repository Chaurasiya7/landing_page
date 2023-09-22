import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

function Navbar() {
  const [nav,setNav] =useState('')

  const handleNav =()=>{
    setNav(!nav)
  }
  return (
    <div className='text-white flex  justify-between items-center h-24 mx-auto max-w-[1200px] px-7'>
      <h1 className='w-full text-3xl font-bold text-[#7000df]'>PROJECT</h1>
      <ul className='md:flex hidden'>
         <li className='p-4 font-bold text-lg'>Home</li>
         <li className='p-4 font-bold text-lg'>Company</li>
         <li className='p-4 font-bold text-lg'>About</li>
         <li className='p-4 font-bold text-lg'>Resources</li>
         <li className='p-4 font-bold text-lg'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
       
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] border-r md:hidden border-r-gray-800 h-full bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#7000df] mx-7 mt-7'>PROJECT</h1>
      <ul className='p-4  '>
         <li className='p-4 border-b border-gray-600 '>Home</li>
         <li className='p-4 border-b border-gray-600 '>Company</li>
         <li className='p-4 border-b border-gray-600 '>About</li>
         <li className='p-4 border-b border-gray-600 '>Resources</li>
         <li className='p-4  '>Contact</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
