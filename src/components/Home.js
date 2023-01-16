import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="container m-[21vw_auto]">
    <div className='my-5 flex justify-center'>
        
        <div>
        <div className='text-center  font-bold text-[3.5rem] text-red-600'>#HostelDevta</div>
        <div className='text-center font-bold text-[1.5rem] my-[2rem]'>
          This is the documentation site of all<br/> API and Microservices build in the Development phase
        </div>
        <div className='grid grid-cols-3 my-[5rem]'>
            <div className='text-center'>
               <Link to='/microtask1'> <button className='rounded p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold '>Microtask1</button></Link>
            </div>
            <div className='text-center'>
            <Link to='/microtask2'> <button className='rounded p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold '> Microtask2</button></Link>
            </div>
            <div className='text-center'>
            <Link to='/microtask3'> <button className='rounded p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold '>Microtask3</button></Link>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Home