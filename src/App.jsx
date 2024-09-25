
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import  Dashboard  from './Dashboard/Dashboard'

import { useState } from 'react'
import { Box } from '@mui/material'
import Sidebar from './Components/Sidebar'
import Submission from './Components/Submission'
import ProtectedRoute from './routes/ProtectedRoutes'
import AuthRoute from './routes/AuthRoute'



function App() {
  const [currentView, setCurrentView] = useState('home');


  return (
    <>

    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/payment" element={<Submission />}/>


     
      
      
    </Routes>

{/* <Routes>
      {/* Protected Routes of login Signup */}
        
        {/* <Route element={<AuthRoute />}>

        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login />}/>
          
        </Route>

         {/* Protected Routes of Dashboard screen */}

        {/* <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<Dashboard />}/>
          
        </Route>

        <Route path="/payment" element={<Submission />}/>
      </Routes> */} 

    
    </>
  )
}

export default App
