import React from "react";
import { MdTask } from "react-icons/md";
import './Tasks.css'
import TasksView from './TasksView'
function Tasks() {
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
            <div className='input-bar'>
                <div className='input-bar-type'>
                    <input placeholder='Enter a task...'/>
                </div>
                <div className='input-bar-button'>
                    <button>
                        Add
                    </button>
                </div>
            </div>
            <div className='tasks-view-wrapper'>
                <TasksView />
            </div>
        </div>
    )
}

export default Tasks