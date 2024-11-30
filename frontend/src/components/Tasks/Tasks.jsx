import { useState } from "react";
import { MdTask } from "react-icons/md";
import './Tasks.css'
import TasksView from './TasksView'
import axios from 'axios'
import OptionsMenu from './OptionsMenu'

export default function Tasks( { tasks, createTask, updateTask, deleteTask }) {
    const [newTask, setNewTask] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        if (newTask === "") return;
    
        const token = localStorage.getItem('token');
        createTask({ task: newTask }, token);
        setNewTask("");
    }
    
    
    return (
        <div className='background'>
            <div className='title'>
                <div className='title-icon'>
                    <MdTask />
                </div>
                <div className='title-text'>
                    Tasks
                </div>
            </div>
            <form onSubmit={handleSubmit} className='input-bar'>
                <div className='input-bar-type'>
                    <input
                        placeholder='Enter a task...'
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                    />
                </div>
                <div className='input-bar-button'>
                    <button type='submit'>
                        Add
                    </button>
                </div>
            </form>
            <div className='task-view-labels'>
                <div className='task-title-label'>
                    <div className='checkmark'>
                    ✓
                    </div>
                Task
                </div>
                <div className='task-date-label'>
                    Complete By
                </div>
                <div className='task-member-label'>
                    Assigned To
                </div>
                <div className='spacer'>
                    
                </div>
            </div>
            <div className='tasks-view-wrapper'>
                <TasksView
                    tasks={tasks}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    )
}