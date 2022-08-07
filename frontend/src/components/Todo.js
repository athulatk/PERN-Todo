import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
function Todo({name,handleDelete,id}) {
    return (
        <div className='bg-white/[0.2] text-ipx-3 py-4 my-4 flex items-center justify-between rounded-xl'>
            <div>{name}</div>
            <div>
                <button><EditIcon /></button>
                <button onClick={()=>{handleDelete(id)}}><DeleteIcon /></button>
            </div>
        </div>
    )
}

export default Todo