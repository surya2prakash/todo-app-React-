import React from 'react'
import './SignUp.css'

export default function SignUp() {
  return (
    <div className='sign-main'>
        <h1 className='sign'>Sign-Up</h1>
        <form className='sign-form'>
        <div className='sign_input_container'>   
        <label htmlFor='firstName'>First Name </label>
        <input type='text' placeholder='first name' id='firstName' />
        </div> 
         <div className='sign_input_container'>   
         <label htmlFor='lastName'>Last Name </label>
        <input type='text' placeholder='last name'  id='lastName'/>
        </div> 
         <div className='sign_input_container'>    
          <label htmlFor='sign-email'>Email </label>
          <input type='email' placeholder='enter email..'id='sign-email' />
          </div>
           <div className='sign_input_container'>   
           <label htmlFor='sign-password'>Password </label>
        <input type='password' placeholder='enter password'  id='sign-password' />
        </div> 
         <div className='sign_input_container'> 
          <label htmlFor='confirmPass'>Confirm Password </label>
          <input type='password' placeholder='confirm password' id='confirmPass'/>
          </div> 
          <button className='sign-btn'>Sign Up</button>
          </form>
    </div>
  )
}
