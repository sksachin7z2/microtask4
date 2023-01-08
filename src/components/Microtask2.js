import React from 'react'
import {HashLink as Linkh}from 'react-router-hash-link'
function Microtask2() {
  return (
    <div className='grid grid-cols-[20%_80%] h-[90vh]'>
      <div className='bg-blue-100 font-bold  ' style={{ overflowY: "scroll" }} >
        <div className='text-lg p-4'>
          Table of Contents
        </div>
        <hr className='h-[3px] bg-blue-400' />
      <Linkh to='/microtask2/#intro'>  <div className='p-4 font-bold'>
          Introduction
        </div></Linkh>
        <hr className='h-[3px] bg-blue-400' />
        <Linkh to='/microtask2/#il'>
        <div className=' p-4 font-bold'>
          Installation Locally
        </div>
        </Linkh>
        <Linkh to='/microtask2/#apie'>
       
        <hr className='h-[3px] bg-blue-400' />
        <div className='p-4 font-bold'>
          API Endpoints
        </div>
        </Linkh>
      
        <Linkh to='/microtask2/#auth'>
       
        <hr className='h-[3px] bg-blue-400' />
        <div className='p-4 font-bold'>
          Authentication
        </div>
        </Linkh>
        
        
        <hr className='h-[3px] bg-blue-400' />
        <div>
          <ol className='list-decimal  list-inside'>
       <Linkh to='/microtask2/#11'>    <li className='p-4'>
       To create new user (signup)
            </li></Linkh> 
            <Linkh to='/microtask2/#12'>
           
            <li className='p-4'>
            To login in the account
            </li> </Linkh>
            <Linkh to='/microtask2/#13'>
           
            <li className='p-4'>
            To get the user info
            </li> </Linkh>
            <Linkh to='/microtask2/#14'>
           
            <li className='p-4'>
            To delete the account
            </li> </Linkh>
            <Linkh to='/microtask2/#15'>
            <li className='p-4'>
            To update the account info
            </li></Linkh>
            
          
          </ol>
        </div>
        <hr className='h-[3px] bg-blue-400' />
      

        <Linkh to='/microtask2/#vis'>  <div  className='p-4 font-bold'>
          Visitor API
        </div></Linkh>
        <hr className='h-[3px] bg-blue-400' />
        <div>
          <ol className='list-decimal  list-inside'>
       <Linkh to='/microtask2/#21'>    <li className='p-4'>
       To get detail of the count of visitors
            </li></Linkh> 
            <Linkh to='/microtask2/#22'>
           
            <li className='p-4'>
            To count the visitors
            </li> </Linkh>
            <Linkh to='/microtask2/#23'>
           
            <li className='p-4'>
            To reset the Visiter counter
            </li> </Linkh>
            <Linkh to='/microtask2/#24'>
           
            <li className='p-4'>
            To delete the visitor counter
            </li> </Linkh>
            
          
          </ol>
        </div>
      </div>
      <div style={{ overflowY: "scroll" }}>
        <section>
          <div className='p-5'>
            <h1 id='intro' className='text-[2rem] font-bold   '>Introduction</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <div className='font-bold'>
              <p>This microservice provide Authentication and Visitor count APIs .</p>
              <p>The authentication system uses JSON WEB token and hashing of password with salt to provide reliable security.</p>
              <p>The visitor count system is a versatile visit counter with takes host name and record the count of the respective website in the Database</p>
              <p>
              The Database used is MONGO DB
              </p>
              <p>API is live</p>
              <a className='text-blue-900' href="https://pnxkhg.deta.dev" target="_blank" rel="noopener noreferrer">https://pnxkhg.deta.dev</a>
            </div>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />
        <section>
          <div className='p-5'>
            <h1 id='il' className='text-[2rem] font-bold   '>Installation Locally</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <ol className='list-decimal list-inside space-y-3'>
              <li className='font-bold'>Clone the repository <a href="https://github.com/sksachin7z2/microtask2" target='_blank' rel="noreferrer"><strong className='text-blue-500'>https://github.com/sksachin7z2/microtask2</strong></a></li>
              <li className='font-bold'>cd microtask2</li>
              <li className='font-bold'>npm run dev</li>

            </ol>
          </div>

        </section>
        <hr className='h-[2px] bg-gray-300' />

        <section>
          <div className='p-5'>
            <h1 id='apie' className='text-[2rem] font-bold   '>API Endpoints</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <h1 id='auth' className='text-[2rem] font-bold   '>Authentication</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <ol className='list-decimal list-inside space-y-3  font-medium'>

              <li id='11' className='font-bold'>To create new user (signup)</li>

              <div>
                <p>Method: POST</p>
                <p>Endpoint: '/api/auth/createUser'</p>


                <p> Body parameter(in JSON)</p>
                <ol className='list-decimal list-inside'>
                  <li>name</li>
                  <li>email</li>
                  <li>password</li>
                  

                </ol>

              </div>
             
              <li id='12' className='font-bold'>To login in the account</li>

              <div>
                <p>Method: POST</p>
                <p>Endpoint: '/api/auth/login'</p>


                <p> Body parameter(in JSON)</p>
                <ol className='list-decimal list-inside'>
                 
                  <li>email</li>
                  <li>password</li>
                 

                </ol>

              </div>
              <li id='13' className='font-bold'>To get the user info</li>

<div>
  <p>Method: POST</p>
  <p>Endpoint: '/api/auth/getuser'</p>


  <p> Header parameter</p>
  <ol className='list-decimal list-inside'>
    <li>auth-token</li>
    

  </ol>

</div>
<li id='14' className='font-bold'>To delete the account</li>

<div>
  <p>Method: DELETE</p>
  <p>Endpoint: "/api/auth/deleteuser"</p>


  <p> Header parameter</p>
  <ol className='list-decimal list-inside'>
    <li>auth-token</li>
    
  </ol>

</div>
<li id='15' className='font-bold'>To update the account info</li>

<div>
  <p>Method: PUT</p>
  <p>Endpoint: '/api/auth/updateuser'</p>


  <p> Header parameter</p>
  <ol className='list-decimal list-inside'>
    <li>auth-token</li>
  
  </ol>
  <p> Body parameter(in JSON)</p>
  <ol className='list-decimal list-inside'>
    <li>email</li>
    <li>name</li>
    <li>password</li>
  
  </ol>

</div>


            </ol>
          </div>
          <div className='p-5'>
            
            <h1 id='vis' className='text-[2rem] font-bold   '>Visitor API</h1>
            <hr className='h-[2px] bg-gray-300 my-3' />
            <ol className='list-decimal list-inside space-y-3  font-medium'>

              <li id='21' className='font-bold'>To get detail of the count of visitors</li>

              <div>
                <p>Method: POST</p>
                <p>Endpoint: '/api/vis/info'</p>


                <p> Body parameter(in JSON)</p>
                <ol className='list-decimal list-inside'>
                  <li>host</li>
                  
                  

                </ol>

              </div>
             
              <li id='22' className='font-bold'>To count the visitors</li>

              <div>
                <p>Method: POST</p>
                <p>Endpoint: '/api/vis/count'</p>


                <p> Body parameter(in JSON)</p>
                <ol className='list-decimal list-inside'>
                 
                  <li>host</li>
                 
                 

                </ol>

              </div>
              <li id='23' className='font-bold'>To reset the Visiter counter</li>

<div>
  <p>Method: PUT</p>
  <p>Endpoint: '/api/vis/reset'</p>


  <p> Body parameter (in JSON)</p>
  <ol className='list-decimal list-inside'>
    <li>host</li>
    

  </ol>

</div>
<li id='24' className='font-bold'>To delete the visitor counter</li>

<div>
  <p>Method: DELETE</p>
  <p>Endpoint: '/api/vis/delete'</p>


  <p>Body parameter (in JSON)</p>
  <ol className='list-decimal list-inside'>
    <li>host</li>
    
  </ol>

</div>



            </ol>
          </div>
        </section>
        <hr className='h-[2px] bg-gray-300' />

      </div>
    </div>
  )
}

export default Microtask2