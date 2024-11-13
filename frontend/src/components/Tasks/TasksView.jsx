import { TaskItem } from './TaskItem'
import './Tasks.css'

// tasks, updateTask, and deleteTask are taken as "props"
// --> passes list of tasks to the function and creates a TaskItem for each one
export default function TasksView({ tasks=[], updateTask, deleteTask }) {
    console.log('TasksView tasks passed in prop:', tasks)
    return (
        <div className='task-list-view'>
            {tasks.map(task => {
                return (
                    <TaskItem
                        {...task}
                        key={task._id}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                )
            })}
        </div>
    )
}