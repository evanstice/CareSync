import { TaskItem } from './TaskItem'
import './Tasks.css'

// tasks, updateTask, and deleteTask are taken as "props"
// --> passes list of tasks to the function and creates a TaskItem for each one
export default function TasksView({ tasks=[], updateTask, deleteTask }) {
    console.log('Tasks array fetched from DB:', tasks)
    return (
        <div className='task-list-view'>
            {tasks.map(task => {
                return (
                    <TaskItem
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