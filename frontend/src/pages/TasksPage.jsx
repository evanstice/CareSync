import Tasks from '../components/Tasks/Tasks'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function TasksPage() {
    const [tasks, setTasks] = useState([])

    // Load tasks from the backend
    useEffect(() => {
        console.log("VITE_API_URL:", import.meta.env.VITE_API_URL)
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/tasks`)
            .then((res) => {
                console.log('Fetched tasks:', res.data.data)
                setTasks(res.data.data)
            })
            .catch((error) => console.error('Error fetching tasks:', error.message))
    }, [])

    // POST (createTask)
    function createTask(newTask) {
        axios
            .post(`${import.meta.env.VITE_API_URL}/api/tasks`, newTask)
            .then((res) => {
                setTasks((currTasks) => [...currTasks, res.data.data])
            })
            .catch((error) => console.error('Error creating task:', error.message))
    }

    // PUT (updateTask)
    function updateTask(id, completed) {
        axios
            .put(`${import.meta.env.VITE_API_URL}/api/tasks/${id}`, { completed })
            .then((res) => {
                setTasks(currTasks =>
                    currTasks.map(task => {
                        if (task._id === id) {
                            return {...task, completed};
                        }
                        return task
                    })
                )
            })
            .catch((error) => console.error('Error updating task:', error.message))
    }

    // DELETE (deleteTask)
    function deleteTask(id) {
        axios
            .delete(`${import.meta.env.VITE_API_URL}/api/tasks/${id}`)
            .then(() => {
                setTasks(currTasks => {
                    return currTasks.filter(task => task._id !== id)
                })
            })
            .catch((error) => console.error('Error deleting task:', error.message))
    }

    return (
    <>
        <Tasks
            tasks={tasks}
            createTask={createTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
        />
    </>
    )
}