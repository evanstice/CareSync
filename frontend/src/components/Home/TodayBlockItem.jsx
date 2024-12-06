import { Checkbox, IconButton } from '@mui/material';
import React, { useState } from 'react'
import './Home.css'


// Props passed into TaskItem component from TasksView.jsx
export function TodayBlockItem({ task, _id, completed, familyMember, needByDate, updateTask, deleteTask}) {
    const [isOpen, setIsOpen] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const [editedFamilyMember, setEditedFamilyMember] = useState(familyMember);
    const [editedNeedByDate, setEditedNeedByDate] = useState(needByDate);


    function handleCheckboxToggle(event) {
        const newCompletedStatus = event.target.checked;
        updateTask(_id, {
            task: editedTask,
            familyMember: editedFamilyMember,
            needByDate: editedNeedByDate,
            completed: newCompletedStatus
        });
    }

    // If not editing, display the task like normal
    return (
         <div className='single-task'>
            <Checkbox
                sx={{
                    color: 'white',
                    '&.Mui-checked': {
                        color: 'white',
                    },
                }}
                size="small"
                checked={completed}
                onChange={handleCheckboxToggle}
            />
            <div className='task-title'>{task}</div>
        </div>
    );     
}