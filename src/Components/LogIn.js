import React from 'react'

import "./LogIn.css"

export default function LogIn() {
  return (
    <div className='login_container'>
        <h1 className='login'>Log-In</h1>
            <form className='login_form'>
                <div className='login-input-container'>
                  <label htmlFor='login_email'>Email</label>
                  <input type='email' placeholder='enter your email'/>
                  </div>
                  <div className='login-input-container'>
                  <label htmlFor='login_password'>Password</label>
                  <input type='password' placeholder='enter your password'/>
                  </div>
                  <button className='login-btn'>Log-In</button>
            </form>
    </div>
  )
}
