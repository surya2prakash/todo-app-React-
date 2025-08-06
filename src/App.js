
import { Route , Routes} from 'react-router-dom';
import './App.css';


import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import LogIn from './Components/LogIn';
import TodoList from './Components/TodoList';



function App() {
  return (
    <div className="App">
          <Navbar/>
          
          <div className='App_container'>
            <Routes>
                 <Route path='/' element={<HomePage/>}></Route>
                 <Route path='/login' element={<LogIn/>}/>
                 <Route path='/todolist' element={<TodoList/>}/>
            </Routes>
            </div>
    
    </div>
  );
}

export default App;
