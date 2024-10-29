import { useState } from "react";
import { MdTask } from "react-icons/md";
import './Tasks.css'
import TasksView from './TasksView'
import axios from 'axios'

export default function Tasks( { tasks, createTask, updateTask, deleteTask }) {
    const [newTask, setNewTask] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        if (newTask == "") return
        createTask({ task: newTask })
        setNewTask("")
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