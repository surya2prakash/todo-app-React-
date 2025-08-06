import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function TodoList() {

    const [input,setInput]= useState({
        task:"",
        TaskDate:""
    });

    

    const[todolist,setTodolist] = useState([]);
   
    function changeHandler(e){
        e.preventDefault();

      const  {name,value} = e.target ;

        setInput((prev)=>(
            {
                ...prev,
                [name]:value
            }
        ))

    }
 
    function submitHandler(event){
          event.preventDefault();
          
          if(input.task === '' || input.TaskDate === ''){
               toast.error("Fill the task and date");
               return;
          }
          
        

      const newTask ={
          task:input.task,
          date:input.TaskDate,
          id:Date.now()
      };
        setTodolist((prev)=>[...prev,newTask]);

      toast.success("Task is added");
                setInput({
                    task:'',
                    TaskDate:''
                })

    

            };

      console.log(todolist);


  return (
    <div className='main_todo'>
            <form className='' onSubmit={submitHandler}>
                 <input type='text' placeholder='write task' name='task'value={input.task} onChange={changeHandler}/>
                 <input type='date' name='TaskDate' value={input.TaskDate} onChange={changeHandler}/>
                 <button>Add</button>
                  </form>

            <div className='ShowTask'>
                {
                     todolist.length === 0 ?(<p>No task</p>):(
                         
                             todolist.map((task)=>(
                                <div key={task.id}>
                                      <div>{task.task}</div>
                                 <div>{task.date}</div>
                                 </div>
                                
                                
                          )

                          )
                         
                     )
                }
            </div>
           
    </div>
  )
}

