import React from 'react'
import Todo from './Todo'
import axios from 'axios'
function Todos({todos}) {
  const handleDelete = (id)=>{
    axios.delete(`http://localhost:5000/todos/${id}`)
    .then(res=>{
      console.log('d')
        const id=res.data.todo_id
        todos.filter(todo=>todo.todo_id!=id);
    })
}
  return (
    <div className='bg-stone-400 w-2/6 bg-inherit'>
        {todos.map((item)=>(<Todo key={item.todo_id} id={item.todo_id} name={item.todo} handleDelete={handleDelete}/>))}
    </div>
  )
}

export default Todos