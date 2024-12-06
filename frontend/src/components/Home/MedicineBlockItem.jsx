import { Checkbox, IconButton } from '@mui/material';
import React, { useState } from 'react'
import './Home.css'


// Props passed into MedicineItem component from MedicineView.jsx
export function TodayBlockItem({ medications=[], updateMedication, deleteMedication}) {
    const [isOpen, setIsOpen] = useState(false);
    const [editedTask, setEditedTask] = useState(medications);
    //const [editedFamilyMember, setEditedFamilyMember] = useState(familyMember);
    //const [editedNeedByDate, setEditedNeedByDate] = useState(needByDate);


    function handleCheckboxToggle(event) {
        const newCompletedStatus = event.target.checked;
        updateMed(_id, {
            med: editedTask,
            //familyMember: editedFamilyMember,
            //needByDate: editedNeedByDate,
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