import React from 'react'
import './Navbar.css'
import { useLocation, useNavigate} from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate();
    const loaction = useLocation();

    const isloaction = loaction.pathname === '/login';
  return (
    <div className='nav-main'>
         <h2>Todo App</h2>
         {
            !isloaction && ( <button className='nav-logIn' onClick={()=>{navigate("/login")}}>logIn</button>) 

         }
        

    </div>
  )
}
