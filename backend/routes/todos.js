const express=require('express')
const router=express.Router();
const todos=require('../controllers/todos')

router.get('/',todos.getTodos);
router.post('/',todos.addTodo);
router.put('/:id',todos.editTodo);
router.delete('/:id',todos.deleteTodo);

module.exports=router