import React,{useState} from 'react'
import {HashLink as Linkh}from 'react-router-hash-link'

function Microtask1() {
  const [active, setActive] = useState(false)
  return (
    <>
    
    <div className='grid md:grid-cols-[20%_80%] h-[100vh]'>
        <div className='md:hidden text-white fixed  top-0 p-[2.85vh_3.2vw]' onClick={()=>{setActive(!active)}}> <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></div>
     {active&& <div className='bg-blue-100 font-bold fixed top-0 h-[100vh] w-[100vw] pb-[11vh]' style={{ overflowY: "scroll" }} onClick={()=>{setActive(!active)}} >
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
        <Linkh to='/microtask3/#il'>
       
        <hr className='h-[3px] bg-blue-400' />
        <div className='p-4 font-bold'>
          API Endpoints
        </div>
        </Linkh>
        <hr className='h-[3px] bg-blue-400' />

        <Linkh to='/microtask3/#il'>
       
        {/* <hr className='h-[3px] bg-blue-400' /> */}
        <div className='p-4 font-bold'>
          Reverse Location API
        </div>
        </Linkh>
        
        <hr className='h-[3px] bg-blue-400' />
        <div>
          <ol className='list-decimal  list-inside'>
       <Linkh to='/microtask3/#il'>    <li className='p-4'>
       To get the address
            </li></Linkh> 
       <Linkh to='/microtask3/#il'>    <li className='p-4'>
       To get the Coordinates
            </li></Linkh> 
            
           
          </ol>
        </div>
      </div>}
      <div className='bg-blue-100 font-bold hidden md:block ' style={{ overflowY: "scroll" }} >
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
            
            <Linkh to='/microtask3/#1'>    <li className='p-4'>
       To get the Coordinates
            </li></Linkh> 
          </ol>
        </div>
      </div>
      <div style={{ overflowY: "scroll" }} className="py-[11vh]">
        <section>
          <div className='p-5'>
            
          <h1  className='text-[2rem] font-bold   '>Microtask3</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <h1 id='intro' className='text-[2rem] font-bold   '>Introduction</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <div className='font-bold'>
            This microservice provide location address for given latitude and longitude in query
            <p>API is live</p>
              <a className='text-blue-900' href="https://t09a36.deta.dev" target="_blank" rel="noopener noreferrer">https://t09a36.deta.dev</a>
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

              <code>
                <p>Method: GET</p>
                <p>Endpoint: '/api/location/getAdd?lat=[latitude]&lon=[longitude]'</p>

              </code>
              <li id='1' className='font-bold'>To get the Coordinates</li>

              <code>
                <p>Method: GET</p>
                <p>Endpoint: '/api/location/getCoor?country=[country]&state=[state]&district=[district]&city=[city]&locality=[locality]'</p>
                  <p>Example</p>
                  <p style={{overflowWrap:"anywhere"}}>https://t09a36.deta.dev/api/location/getCoor?country=India&state=Assam&district=Kamrup&city=Guwahati&locality=Maligaon</p>
              </code>
             
            </ol>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />

      </div>
    </div>
    </>
  )
}

export default Microtask1