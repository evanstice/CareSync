import { Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import './Tasks.css'

export function TaskItem({ task, _id, completed, updateTask, deleteTask }) {
    return (
        <div className='single-task'>
            <Checkbox
                sx={{
                    color: 'white',
                    '&.Mui-checked': {
                        color: 'white',
                    },
                }}
                size='small'
                checked={completed}
                onChange={event => updateTask(_id, event.target.checked)}
            />
                <div className='task-title'>
                    {task}
                </div>
                <IconButton
                    sx={{color: 'white'}}
                    size="10"
                    onClick={() => deleteTask(_id)}>
                    <MoreVertIcon fontSize='small' />
                </IconButton>
        </div>
        );
        
}