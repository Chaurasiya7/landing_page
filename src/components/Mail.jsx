import React from 'react'

function Mail() {
  return (
    <div className='w-full py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3' >
      <div className='lg:col-span-2 flex flex-col items-center md:items-start'>
         <h1 className='text-[19px] sm:text-2xl md:text-4xl font-bold py-2'>Want tips & tricks to optimixe your flow?</h1>
         <p className='md:text-lg text-sm mb-4'>Sign up to our newsletter and stay up to data.</p>
      </div>
      <div>
         <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
            <input className=' p-3 w-[90%] flex  rounded-md text-black ' type="email" placeholder='Enter Email' />
            <button className="bg-[#7000df] text-black py-2 rounded-lg px-7 font-medium ml-4 text-lg  my-4 w-[200px] ">Notify Me</button>

            </div>
            <p className='flex flex-col items-center md:items-start'>We care bout the protection of your data. Read our <span className='text-[#9a37fd]'>Privacy Policy</span></p>
         </div>
      </div>
      
      </div>
    </div>
  )
}

export default Mail
