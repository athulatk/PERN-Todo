const getTodos = (req,res)=>{
    res.send('Get todos')
}

const addTodo = (req,res)=>{
    console.log(req.body)
    res.send("Added")
}

const editTodo = (req,res)=>{
    console.log(req.body)
}

const deleteTodo = (req,res)=>{
    console.log(req.body)
}

module.exports={getTodos,addTodo,editTodo,deleteTodo}