import React, { useState } from 'react'

import "./LogIn.css"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  
  const[input,setInput] = useState({
          email:'',
          password:""

  });

  const[form,setForm]=useState('');

  const navigate = useNavigate();

  function changeHandler(e){
      e.preventDefault();
    const{name,value} = e.target;
    
     setInput((prev)=>(
       {
        ...prev,
        [name]:value
       }
     ))
  }

  function submitHandler(event){
    event.preventDefault();

    if(input.email === '' || input.password === '')
    {
        toast.error("fill All the details");
        return;
    }else if(!input.email.endsWith("@gmail.com")){
            toast.error("Only gmail accepted")
            return;
    }else{
          setForm(input);
          toast.success("login Successfully..")

          setInput({
            email:"",
            password:""
          })

          navigate("/todolist");
    }

  }

  console.log(form);
  
  return (
    <div className='login_container'>
        <h1 className='login'>Log-In</h1>
            <form className='login_form' onSubmit={submitHandler}>
                <div className='login-input-container'>
                  <label htmlFor='login_email'>Email</label>
                  <input type='email' placeholder='enter your email'name='email'onChange={changeHandler} value={input.email}/>
                  </div>
                  <div className='login-input-container'>
                  <label htmlFor='login_password'>Password</label>
                  <input type='password' placeholder='enter your password' name='password' onChange={changeHandler} value={input.password}/>
                  </div>
                  <button className='login-btn'>Log-In</button>
            </form>
    </div>
  )
}
