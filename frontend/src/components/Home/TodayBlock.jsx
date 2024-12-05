import React, { useState, useEffect } from 'react';
import { MdOutlineToday } from "react-icons/md";
import { format } from 'date-fns';
import './Home.css';
import TasksView from '../Tasks/TasksView';

function TodayBlock() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = format(today, 'eeee, MMMM do, yyyy');
        setCurrentDate(formattedDate);
    }, []); 

    return (
        <>
            <div className='today-block-bg'>
                <div className='welcome-block-title'><div className='today-icon'><MdOutlineToday/></div>Today</div>
                <div className='welcome-block-subtitle'>{currentDate}</div>
                <TasksView
                    // tasks={tasks}
                    // updateTask={updateTask}
                    // deleteTask={deleteTask}
                    
                    // needs to be implemented with database:
                    // only tasks AND medications from today that are assingened to person logged in should show
                />
            </div>
        </>
    );
}
