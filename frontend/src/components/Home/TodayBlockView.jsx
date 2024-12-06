import { useState } from "react";
import { MdTask } from "react-icons/md";
import { TodayBlockItem } from './TodayBlockItem'
import './Home.css'

export default function TodayBlockView({ tasks=[]},updateTask, deleteTask) {
    console.log('Tasks array fetched from DB:', tasks)
    return (
        <div className='today-block-view'>
            {tasks.map(task => {
                return (
                    <TodayBlockItem
                        {...task} // spreads all properties of task objects
                        key={task._id}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                )
            })}
        </div>
    )
}