const express=require('express')
const cors=require('cors')
const auth=require('./routes/auth')
const todos=require('./routes/todos')
const app=express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.use('/auth',auth);
app.use('/todos',todos)

app.listen(5000, () => {
    console.log(`App listening on port 5000`)
})
