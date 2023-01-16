import React,{useState} from 'react'
import {HashLink as Linkh}from 'react-router-hash-link'

function Microtask1() {
  const [active, setActive] = useState(false)
  return (
    <>
  
    <div className='grid md:grid-cols-[20%_80%] h-[100vh]  '>
     <div className='md:hidden text-white fixed top-0 p-[2.85vh_3.2vw]' onClick={()=>{setActive(!active)}}> <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></div>
 {  active&&  <div className='bg-blue-100 font-bold fixed h-[100vh] w-[100vw]' style={{ overflowY: "scroll" }} onClick={()=>{setActive(!active)}}>
        <div className='text-lg p-4'>
          Table of Contents
        </div>
        <hr className='h-[3px] bg-blue-400' />
      <Linkh to='/microtask1/#intro'>  <div className='p-4 font-bold'>
          Introduction
        </div></Linkh>
        <hr className='h-[3px] bg-blue-400' />
        <Linkh to='/microtask1/#il'>
        <div className=' p-4 font-bold'>
          Installation Locally
        </div>
        </Linkh>
        <Linkh to='/microtask1/#apie'>
       
        <hr className='h-[3px] bg-blue-400' />
        <div className='p-4 font-bold'>
          API Endpoints
        </div>
        </Linkh>
        
        <hr className='h-[3px] bg-blue-400' />
        <div>
          <ol className='list-decimal  list-inside'>
       <Linkh to='/microtask1/#1'>    <li className='p-4'>
              To store the user info in dummy db
            </li></Linkh> 
            <Linkh to='/microtask1/#2'>
           
            <li className='p-4'>
              To get the information of a particular userName
            </li> </Linkh>
            <Linkh to='/microtask1/#3'>
           
            <li className='p-4'>
              To get the information of all user
            </li> </Linkh>
            <Linkh to='/microtask1/#4'>
           
            <li className='p-4'>
              To update info of a particular userName
            </li> </Linkh>
            <Linkh to='/microtask1/#5'>
            <li className='p-4'>
              To remove info of a particular userName
            </li></Linkh>
            <Linkh to='/microtask1/#6'>
           
            <li className='p-4'>
            To remove all entries
            </li> </Linkh>
          
          </ol>
        </div>
      </div>}
      <div className='bg-blue-100 font-bold  hidden md:block' style={{ overflowY: "scroll" }} >
        <div className='text-lg p-4'>
          Table of Contents
        </div>
        <hr className='h-[3px] bg-blue-400' />
      <Linkh to='/microtask1/#intro'>  <div className='p-4 font-bold'>
          Introduction
        </div></Linkh>
        <hr className='h-[3px] bg-blue-400' />
        <Linkh to='/microtask1/#il'>
        <div className=' p-4 font-bold'>
          Installation Locally
        </div>
        </Linkh>
        <Linkh to='/microtask1/#apie'>
       
        <hr className='h-[3px] bg-blue-400' />
        <div className='p-4 font-bold'>
          API Endpoints
        </div>
        </Linkh>
        
        <hr className='h-[3px] bg-blue-400' />
        <div>
          <ol className='list-decimal  list-inside'>
       <Linkh to='/microtask1/#1'>    <li className='p-4'>
              To store the user info in dummy db
            </li></Linkh> 
            <Linkh to='/microtask1/#2'>
           
            <li className='p-4'>
              To get the information of a particular userName
            </li> </Linkh>
            <Linkh to='/microtask1/#3'>
           
            <li className='p-4'>
              To get the information of all user
            </li> </Linkh>
            <Linkh to='/microtask1/#4'>
           
            <li className='p-4'>
              To update info of a particular userName
            </li> </Linkh>
            <Linkh to='/microtask1/#5'>
            <li className='p-4'>
              To remove info of a particular userName
            </li></Linkh>
            <Linkh to='/microtask1/#6'>
           
            <li className='p-4'>
            To remove all entries
            </li> </Linkh>
          
          </ol>
        </div>
      </div>
      <div style={{ overflowY: "scroll" }} className="py-[11vh]">
        <section>
          <div className='p-5'>
           
            <h1  className='text-[2rem] font-bold   '>Microtask1</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <h1 id='intro' className='text-[2rem] font-bold   '>Introduction</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <div className='font-bold'>
              This API is used to store, get, update and delete temporary user information in a dummy/temporary database
              <p>API is live</p>
              <a className='text-blue-900' href="https://p80o5n.deta.dev" target="_blank" rel="noopener noreferrer">https://p80o5n.deta.dev</a>
            </div>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />
        <section>
          <div className='p-5'>
            <h1 id='il' className='text-[2rem] font-bold   '>Installation Locally</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <ol className='list-decimal list-inside space-y-3'>
              <li className='font-bold'>Clone the repository <a href="https://github.com/sksachin7z2/microtask1" target='_blank' rel="noreferrer"><strong className='text-blue-500'>https://github.com/sksachin7z2/microtask1</strong></a></li>
              <li className='font-bold'>cd microtask1</li>
              <li className='font-bold'>npm run dev</li>

            </ol>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />

        <section>
          <div className='p-5'>
            <h1 id='apie' className='text-[2rem] font-bold   '>API Endpoints</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <ol className='list-decimal list-inside space-y-3  font-medium'>

              <li id='1' className='font-bold'>To store the user info in dummy db</li>

              <code>
                <p>Method: POST</p>
                <p>Endpoint: '/api/user/usercreate'</p>


                <p> Body parameter(in JSON)</p>
                <ol className='list-decimal list-inside'>
                  <li>name</li>
                  <li>email</li>
                  <li>userName </li>
                  <li>phone</li>
                  <li>city</li>

                </ol>

              </code>
             
              <li id='2' className='font-bold'>To get the information of a particular userName</li>

              <code>
                <p>Method: POST</p>
                <p>Endpoint: '/api/user/getuser'</p>


                <p> Body parameter(in JSON)</p>
                <ol className='list-decimal list-inside'>
                 
                  <li>userName </li>
                 

                </ol>

              </code>
              <li id='3' className='font-bold'>To get the information of all user</li>

<code>
  <p>Method: GET</p>
  <p>Endpoint: '/api/user/getall'</p>


  <p> Body parameter(in JSON)</p>
  <ol className='list-decimal list-inside'>
    <li>None</li>
    

  </ol>

</code>
<li id='4' className='font-bold'>To update info of a particular userName</li>

<code>
  <p>Method: PUT</p>
  <p>Endpoint: '/api/user/update/[userName]'</p>


  <p> Body parameter(in JSON)</p>
  <ol className='list-decimal list-inside'>
    <li>name</li>
    <li>email</li>
    <li>userName </li>
    <li>phone</li>
    <li>city</li>

  </ol>

</code>
<li id='5' className='font-bold'>To remove info of a particular userName</li>

<code>
  <p>Method: DELETE</p>
  <p>Endpoint: '/api/user/remove/[userName]'</p>


  <p> Body parameter(in JSON)</p>
  <ol className='list-decimal list-inside'>
    <li>None</li>
  
  </ol>

</code>
<li id='6' className='font-bold'>To remove all entries</li>

<code>
  <p>Method: DELETE</p>
  <p>Endpoint: '/api/user/removeall'</p>


  <p> Body parameter(in JSON)</p>
  <ol className='list-decimal list-inside'>
    <li>None</li>
  
  </ol>

</code>

            </ol>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />
<section>

</section>
      </div>
    </div>
    </>
  )
}

export default Microtask1