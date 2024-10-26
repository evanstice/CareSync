import { Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import './Tasks.css'

function TasksView() {
    return (
        <div className='task-list-view'>
            <NewTask />
            <NewTask />
            <NewTask />
            <NewTask />
            <NewTask />
            <NewTask />
        </div>
    );
}

function NewTask() {
    return (
    <div className='single-task'>
        <Checkbox sx={{
                color: 'white',
                '&.Mui-checked': {
                    color: 'white',
                },
            }}
            size='small' />
            <div className='task-title'>Sample task here</div>
            <IconButton sx={{color: 'white'}} size="10">
                <MoreVertIcon fontSize='small' />
            </IconButton>
    </div>
    );
    
}

export default TasksView