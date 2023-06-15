import { useState } from 'react'
// import '../styles/App.scss'
import { Routes, Route } from 'react-router-dom'
import LoginPage from 'components/LoginPage/LoginPage'
import Dashboard from 'components/Dashboard/Dashbord'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
