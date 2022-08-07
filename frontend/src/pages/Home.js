import {useState,useEffect} from 'react'
import axios from 'axios'
import Todos from '../components/Todos'
function Home() {
    const [todos,setTodos]=useState([])
    const [inputTodo,setInputTodo]=useState('')
    useEffect(() => {
      axios.get('http://localhost:5000/todos')
      .then(res=>{
        setTodos(res.data)
      })
    }, [todos])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/todos',{
            user_id:'180287',
            content:inputTodo
        })
        .then(res=>{
            setTodos([...todos,res.data])
            setInputTodo('')
        })
    }
    return (
        // <div className='bg-gradient-to-r from-green-400 to-blue-500 min-h-screen'>
        <div className='bg-[#2C3333] min-h-screen'>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-4xl text-white my-5'>Todo List</h1>
                <div className='my-4'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Todo' className='px-2 py-2 rounded-lg outline-none mr-3' onChange={(e)=>{setInputTodo(e.target.value)}} value={inputTodo} required />
                        <button className='bg-green-700 text-white px-3 py-2 rounded-lg' type='submit'>+ Add Todo</button>
                    </form>
                </div>
                <Todos todos={todos} setTodos={setTodos}/>
            </div>
        </div>)
}

export default Home