import React from 'react'
import {HashRouter as Router,
Routes,Route} from 'react-router-dom'

import Microtask1 from './components/Microtask1'
import Microtask2 from './components/Microtask2'
import Microtask3 from './components/Microtask3'
import Home from './components/Home'
function App() {
  return (
    <Router>
   
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/microtask1' element={<Microtask1/>}/>
        <Route exact path='/microtask2' element={<Microtask2/>}/>
        <Route exact path='/microtask3' element={<Microtask3/>}/>

      </Routes>
    </Router>
  )
}

export default App