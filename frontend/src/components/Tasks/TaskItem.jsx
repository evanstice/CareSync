import { Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react'
import './Tasks.css'
import './OptionsMenu'
import OptionsMenu from './OptionsMenu';

export function TaskItem({ task, _id, completed, updateTask, deleteTask }) {
    const [isOpen, setIsOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

    const handleButtonClick = (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    setMenuPosition({ x: buttonRect.left, y: buttonRect.bottom });
    setIsOpen(!isOpen);
  };
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
                <div className='need-by-date'>
                    12-24-2024
                </div>
                <div className='family-member'>
                    Evan
                </div>
                <div className='task-options-button'>
                <IconButton
                    sx={{color: 'white'}}
                    size="10"
                    onClick={handleButtonClick}>
                    <MoreVertIcon fontSize='small' />
                </IconButton>
                {isOpen && (
                    <div style={{
                        position: 'absolute',
                        left: menuPosition.x - 110,
                        top: menuPosition.y - 120,
                        padding: '10px',
                    }}>
                        <div className='disable-bg' onClick={handleButtonClick}><OptionsMenu /></div>
                    </div>
                )}
                </div>
        </div>
        );
        
}