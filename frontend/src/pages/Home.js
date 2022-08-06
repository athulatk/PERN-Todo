import React from 'react'
import Todos from '../components/Todos'
function Home() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (

        <div className='bg-gradient-to-r from-green-400 to-blue-500 min-h-screen'>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-4xl text-white my-5'>Todo List</h1>
                <div className='my-4'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Todo' className='px-2 py-2 rounded-lg outline-none mr-3' required />
                        <button className='bg-green-700 text-white px-3 py-2 rounded-lg' type='submit'>+ Add Todo</button>
                    </form>
                </div>
                <Todos />
            </div>
        </div>)
}

export default Home