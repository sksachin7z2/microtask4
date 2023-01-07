import React from 'react'
import {HashLink as Linkh}from 'react-router-hash-link'
function Microtask1() {
  return (
    <div className='grid grid-cols-[20%_80%] h-[90vh]'>
      <div className='bg-blue-100 font-bold  ' style={{ overflowY: "scroll" }} >
        <div className='text-lg p-4'>
          Table of Contents
        </div>
        <hr className='h-[3px] bg-blue-400' />
      <Linkh to='/microtask3/#intro'>  <div className='p-4 font-bold'>
          Introduction
        </div></Linkh>
        <hr className='h-[3px] bg-blue-400' />
        <Linkh to='/microtask3/#il'>
        <div className=' p-4 font-bold'>
          Installation Locally
        </div>
        </Linkh>
        <Linkh to='/microtask3/#apie'>
       
        <hr className='h-[3px] bg-blue-400' />
        <div className='p-4 font-bold'>
          API Endpoints
        </div>
        </Linkh>
        <hr className='h-[3px] bg-blue-400' />

        <Linkh to='/microtask3/#rev'>
       
        {/* <hr className='h-[3px] bg-blue-400' /> */}
        <div className='p-4 font-bold'>
          Reverse Location API
        </div>
        </Linkh>
        
        <hr className='h-[3px] bg-blue-400' />
        <div>
          <ol className='list-decimal  list-inside'>
       <Linkh to='/microtask3/#1'>    <li className='p-4'>
       To get the address
            </li></Linkh> 
            
           
          </ol>
        </div>
      </div>
      <div style={{ overflowY: "scroll" }}>
        <section>
          <div className='p-5'>
            <h1 id='intro' className='text-[2rem] font-bold   '>Introduction</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <div className='font-bold'>
            This microservice provide location address for given latitude and longitude in query
            </div>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />
        <section>
          <div className='p-5'>
            <h1 id='il' className='text-[2rem] font-bold   '>Installation Locally</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <ol className='list-decimal list-inside space-y-3'>
              <li className='font-bold'>Clone the repository <a href="https://github.com/sksachin7z2/microtask3" target='_blank' rel="noreferrer"><strong className='text-blue-500'>https://github.com/sksachin7z2/microtask3</strong></a></li>
              <li className='font-bold'>cd microtask3</li>
              <li className='font-bold'>npm run dev</li>

            </ol>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />

        <section>
          <div className='p-5'>
            <h1 id='apie' className='text-[2rem] font-bold   '>API Endpoints</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <h1 id='rev' className='text-[2rem] font-bold   '>Reverse Location API</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <ol className='list-decimal list-inside space-y-3  font-medium'>

              <li id='1' className='font-bold'>To get the address</li>

              <div>
                <p>Method: GET</p>
                <p>Endpoint: '/api/location/getAdd?lat=[latitude]&lon=[longitude]'</p>

              </div>
             
            </ol>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />

      </div>
    </div>
  )
}

export default Microtask1