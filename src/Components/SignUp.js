import React, { useState } from 'react'
import './SignUp.css'
import { toast } from 'react-toastify';

export default function SignUp() {

   const [input , setInput] = useState({
      firstName:"",
      lastName:"",
      signEmail:"",
      signPassword:"",
      confirmPass:""
   });

   const[form,setForm] = useState('');

   function changeHandler(event){
    event.preventDefault();

       const {name,value} = event.target;
        setInput((prev)=>({
          //purana wala bhi save karo + letest ko bhi add kro
          ...prev,
          [name]:value
        }))
   }

   function submitHandler(event){
    event.preventDefault();

    if(input.firstName === '' || input.lastName === '' || input.signPassword ==='' || input.confirmPass === '' || input.signEmail === '')
     {
      toast.error("fill the Input Details"); 
      return;
     }else if(!input.signEmail.endsWith("@gmail.com"))
      {
        toast.error("only gmail allowed.");
        return;
      }else if(input.signPassword !== input.confirmPass)
        {
          toast.error('Password Not match');
          return;
        }else{
          setForm(input);
          toast.success("SignUp successfull");

          setInput({
            firstName:"",
            lastName:"",
            signEmail:"",
            signPassword:"",
            confirmPass:""
          })
        }     
   }

   console.log(form);

  return (
    <div className='sign-main'>
        <h1 className='sign'>Sign-Up</h1>
        <form className='sign-form' onSubmit={submitHandler}>
        <div className='sign_input_container'>   
        <label htmlFor='firstName'>First Name </label>
        <input type='text' placeholder='first name' id='firstName' onChange={changeHandler} name='firstName' value={input.firstName} />
        </div> 
         <div className='sign_input_container'>   
         <label htmlFor='lastName'>Last Name </label>
        <input type='text' placeholder='last name'  name='lastName' onChange={changeHandler} id='lastName' value={input.lastName} />
        </div> 
         <div className='sign_input_container'>    
          <label htmlFor='sign-email'>Email </label>
          <input type='email' placeholder='enter email..'id='sign-email' onChange={changeHandler} name='signEmail' value={input.signEmail} />
          </div>
           <div className='sign_input_container'>   
           <label htmlFor='sign-password'>Password </label>
        <input type='password' placeholder='enter password'  id='sign-password' onChange={changeHandler} name='signPassword' value={input.signPassword} />
        </div> 
         <div className='sign_input_container'> 
          <label htmlFor='confirmPass'>Confirm Password </label>
          <input type='password' placeholder='confirm password' id='confirmPass' onChange={changeHandler} name='confirmPass' value={input.confirmPass}/>
          </div> 
          <button className='sign-btn'>Sign Up</button>
          </form>
    </div>
  )
}
