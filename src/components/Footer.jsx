import React from 'react'
import {

   FaFacebookSquare,
   FaGithubSquare,
   FaInstagramSquare,
   FaTwitterSquare,   
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='text-gray-300 max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#7000df]'>PROJECT</h1>
      <p className='py-4 text-justify lg:w-[100%] text-sm sm:text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus Consequuntur sgdfd itaque quaerat architecto!</p>
      <div className='flex justify-between md:w-[50%] w-[200px]'>
         <FaFacebookSquare size={30} />
         <FaInstagramSquare size={30} />
         <FaGithubSquare size={30}/>
         <FaTwitterSquare size={30}/>
      </div>
      </div>
      <div className='lg:col-span-2 md:ml-6 flex justify-between mt-5 '>
        <div>
          <h6 className='font-medium text-gray-400 text-lg'>Solution</h6>
          <ul className='sm:text-lg text-sm'>
            <li className='py-1'>Home</li>
            <li className='py-1'>Company</li>
            <li className='py-1'>About</li>
            <li className='py-1'>Resources</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400 text-lg'>Support</h6>
          <ul className='sm:text-lg text-sm'>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documents</li>
            <li className='py-1'>Guides</li>
            <li className='py-1'>API Status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400 text-lg'>Company</h6>
          <ul className='sm:text-lg text-sm'>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Jobs</li>
            <li className='py-1'>Press</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400 text-lg'>Legal</h6>
          <ul className='sm:text-lg text-sm'>
            <li className='py-1'>Claim</li>
            <li className='py-1'>Policy</li>
            <li className='py-1'>Terms</li>
        
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
