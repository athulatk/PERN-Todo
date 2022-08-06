import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function Todo() {
    return (
        <div className='bg-white px-3 py-4 my-4 flex items-center justify-between rounded-xl'>
            <div>Todo name</div>
            <div>
                <button><EditIcon /></button>
                <button><DeleteIcon /></button>
            </div>
        </div>
    )
}

export default Todo