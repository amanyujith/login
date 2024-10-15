import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Welcome from './Welcome'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
function App() {
  return <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
      </Routes>
    </Router>
   
  </div>
}

export default App
