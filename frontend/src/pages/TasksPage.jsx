import Tasks from '../components/Tasks/Tasks'
import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar/NavBar';

export default function TasksPage() {
    const [tasks, setTasks] = useState([])

    // GET (getTasks): load tasks from the backend
    useEffect(() => {
        console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
    
        // Get the JWT token from localStorage (or sessionStorage)
        const token = localStorage.getItem('token'); // Replace with the key you used to store the token

        if (token) {
            // If a token is available, include it in the Authorization header
            axios
                .get(`${import.meta.env.VITE_API_URL}/api/tasks`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Set the token in the Authorization header
                    }
                })
                .then((res) => {
                    console.log('Fetched tasks:', res.data.data);
                    setTasks(res.data.data);
                })
                .catch((error) => {
                    console.error('Error fetching tasks:', error.message);
                });
        } else {
            console.error('No token found. Please log in.');
        }
    }, []);
    

    // POST (createTask)
    function createTask(newTask) {
        axios
            .post(`${import.meta.env.VITE_API_URL}/api/tasks`, newTask)
            .then((res) => {
                setTasks((currTasks) => [...currTasks, res.data.data])
            })
            .catch((error) => console.error('Error creating task:', error.message))
    }

    // Send PUT request to backend API to update a specific task -- .then() handles response from the server
    function updateTask(id, updatedData) {
        axios
            .put(`${import.meta.env.VITE_API_URL}/api/tasks/${id}`, updatedData)
            .then((res) => {
                setTasks(currTasks =>
                    currTasks.map(task => {
                        if (task._id === id) {
                            return {...task, ...updatedData};
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
        <div className='navbar-wrapper'>
        <NavBar />
      </div>
    </>
    )
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['Authorization']
    const token = authHeader.split[' '][1]
    if (token == null) return res.sendStatus(401)
    
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if(err) return res.sendStatus(403)
            req.user = user
            next()
        })
}