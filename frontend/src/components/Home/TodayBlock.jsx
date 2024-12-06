import React, { useState, useEffect } from 'react';
import { MdOutlineToday } from "react-icons/md";
import { format } from 'date-fns';
import TodayBlockView from './TodayBlockView'
import './Home.css';

export default function TodayBlock({tasks, createTask, updateTask, deleteTask}) {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = format(today, 'eeee, MMMM do, yyyy');
        setCurrentDate(formattedDate);
    }, []); 

    const [newTask, setNewTask] = useState("")

    return (
        <>
            <div className='today-block-bg'>
                <div className='welcome-block-title'><div className='today-icon'><MdOutlineToday/></div>Today</div>
                <div className='welcome-block-subtitle'>{currentDate}</div>
                <div className='today-view-wrapper'>
                <TodayBlockView
                    tasks={tasks}
                    createTask={createTask}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            </div>
            </div>
        </>
    );
}
