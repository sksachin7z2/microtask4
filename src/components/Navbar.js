import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar({notify}) {
  // const [message, setMessage] = useState("");
    const [active, setActive] = useState(false);
   
    
  
  return (
    <div>

         <nav>
           <div className='fixed w-[100vw] h-[10vh] flex justify-between items-center bg-gray-800 '>
            <div className='flex items-center'>
              <Link to="/"> <div className='text-lg font-bold text-white px-16 md:px-7'>
                  Documentation
              </div></Link>
            <ul className='flex  space-x-2'>
            <Link to="/"> <li>
                 <div className='hidden  lg:block font-bold text-white hover:text-[#7171d5] rounded-md p-1 m-2 cursor-pointer'>
                  Home
                  </div>
                  
                </li></Link>
             
               </ul>
            </div>
               <div className='hidden lg:flex'>
               <ul className='flex  space-x-2'>
            <Link to="/microtask1"> <li>
                 <div className='hidden  lg:block font-bold text-white hover:text-[#7171d5] rounded-md p-1 m-2 cursor-pointer'>
                  Microtask1
                  </div>
                  
                </li></Link>
            <Link to="/microtask2"> <li>
                 <div className='hidden  lg:block font-bold text-white hover:text-[#7171d5] rounded-md p-1 m-2 cursor-pointer'>
                  Microtask2
                  </div>
                  
                </li></Link>
            <Link to="/microtask3"> <li>
                 <div className='hidden  lg:block font-bold text-white hover:text-[#7171d5] rounded-md p-1 m-2 cursor-pointer'>
                  Microtask3
                  </div>
                  
                </li></Link>
             
               </ul>
               </div>
               <div className="sm:block  lg:hidden px-7 space-x-3 ">
                
                <button className='btn-primary text-white' onClick={()=>{setActive(!active)}}><svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></button>
               </div>
           </div>{active&&<div className=' w-[100vw] bg-gray-800  '>
          <ul className='pt-[4rem]'>
                <li>
                 <Link to='/'> <div className=' font-bold text-white hover:text-[#7171d5] rounded-md p-2 mx-2 cursor-pointer'>
                  Home
                  </div></Link>
                  
                </li>
                
            <Link to="/microtask1"> <li>
                 <div className=' font-bold text-white hover:text-[#7171d5] rounded-md p-2 m-2 cursor-pointer'>
                  Microtask1
                  </div>
                  
                </li></Link>
            <Link to="/microtask2"> <li>
                 <div className=' font-bold text-white hover:text-[#7171d5] rounded-md p-2 m-2 cursor-pointer'>
                  Microtask2
                  </div>
                  
                </li></Link>
            <Link to="/microtask3"> <li>
                 <div className=' font-bold text-white hover:text-[#7171d5] rounded-md p-2 m-2 cursor-pointer'>
                  Microtask3
                  </div>
                  
                </li></Link>
             
               
              
               </ul>
             
              
                
               
           </div>}
        </nav>
    </div>
  )
}

export default Navbar