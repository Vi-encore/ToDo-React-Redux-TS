// import { createContext, useContext, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'
function setlogin(login: string) {
  localStorage.setItem('login', login)
}

function deleteLogin() {
  localStorage.clear()
}

export default function checkLogin(login: string) {
  console.log(login)

  const getLogin = localStorage.getItem('login')
  //   const navigate = useNavigate()
  //   let login: object = document.getElementById('#loginPage__input')?.nodeValue
  //   console.log(login)

  if (getLogin) {
    console.log('hi')
    localStorage.clear()
  } else {
    setlogin(login)
  }
}
