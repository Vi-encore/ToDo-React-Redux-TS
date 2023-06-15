// import { createContext, useContext, useMemo } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// import { useState } from 'react'
// import { redirect } from 'react-router-dom'
// import Dashboard from '../../components/Dashboard/Dashboard'

// import { Link } from 'react-router-dom'
function setLogin(login: string) {
  localStorage.setItem('login', login)
}

function deleteLogin() {
  localStorage.clear()
}

export default function checkLogin(login: string) {
  const isLogin = localStorage.getItem('login')
  //   const navigate = useNavigate()

  if (!isLogin) {
    console.log('no')
    setLogin(login)
    return <div>Help</div>
    // return <Dashboard />
  } else {
    console.log('yes')
    localStorage.clear()
    return <Navigate to='/dashboard' replace={true} />
  }
}
