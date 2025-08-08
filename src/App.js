
import { Navigate, Route , Routes} from 'react-router-dom';
import './App.css';


import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import LogIn from './Components/LogIn';
import TodoList from './Components/TodoList';
import { useState } from 'react';



function App() {

  const [isloggedIn,setloggedIn] = useState(false);


  return (
    <div className="App">
          <Navbar/>
          
          <div className='App_container'>
            <Routes>
                 <Route path='/' element={<HomePage/>}></Route>
                <Route path='/login' element={<LogIn isloggedIn={isloggedIn} setloggedIn={setloggedIn}/>}/>
                       <Route path='/todolist' element={
                        isloggedIn ? (<TodoList/>):(<Navigate to="/login" replace/>)
                       }></Route>
            </Routes>
            </div>
    
    </div>
  );
}

export default App;
