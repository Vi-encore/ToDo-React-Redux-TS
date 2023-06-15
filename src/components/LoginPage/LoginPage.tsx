import React from 'react'
import { Route } from 'react-router-dom'
import checkLogin from '../functions/checkLogin'

export default function LoginPage() {
  return (
    <div className='loginPage'>
      <div className='loginPage__box'>
        <h1 className='loginPage__header'>Login form</h1>
        <form
          className='loginPage__form'
          onSubmit={e => {
            e.preventDefault()
            checkLogin(e.target[0].value)
          }}
        >
          <label className='loginPage__label' htmlFor='login'>
            Email
          </label>
          <input name='login' type='login' className='loginPage__input'></input>
          <input
            type='submit'
            value='Submit'
            className='btn loginPage__submit'
          ></input>
        </form>
      </div>
    </div>
  )
}
