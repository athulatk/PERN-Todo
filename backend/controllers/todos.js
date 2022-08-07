const {pool} = require('../db')

const getTodos = async (req,res)=>{
    try{
        const query=await pool.query("SELECT * FROM todos WHERE user_id='180287'");
        res.send(query.rows)
    }
    catch(error){
        res.error(error)
    }
    
}

const addTodo = async (req,res)=>{
        try{
            const {user_id,content} = req.body
            const query=await pool.query("INSERT INTO todos(user_id,todo) values($1,$2) RETURNING *",[user_id,content]);
            res.send(query.rows[0])
        }
        catch(error){
            res.error(error)
        }
        
 
}

const editTodo = (req,res)=>{
    console.log(req.body)
}

const deleteTodo = async (req,res)=>{
    try{
        const query=await pool.query("DELETE FROM todos WHERE todo_id=$1 RETURNING *",[req.params.id])
        res.send(query.rows[0])
    }
    catch(e){

    }
}

module.exports={getTodos,addTodo,editTodo,deleteTodo}