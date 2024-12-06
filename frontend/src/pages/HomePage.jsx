import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar/NavBar';
import WelcomeBlock from '../components/Home/WelcomeBlock'
import TodayBlock from '../components/Home/TodayBlock'
import Tasks from '../components/Tasks/Tasks'
import ContentWrapper from '../components/Home/ContentWrapper';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing user data or tokens)
    navigate('/login'); // Redirect to login after logging out
  };

  const [tasks, setTasks] = useState([])
  const [medications, setMedications] = useState([])

    // GET (getTasks): load tasks from the backend
    useEffect(() => {
        console.log("VITE_API_URL:", import.meta.env.VITE_API_URL)
        const token = localStorage.getItem('token');
        getTasks(token);
        getMedications(token);
    }, [])
    
    function getTasks(token) {
        axios
        // Sends a request with the token
        .get(`${import.meta.env.VITE_API_URL}/api/tasks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log('Fetched tasks:', res.data.data)
            setTasks(res.data.data)
        })
        .catch((error) => console.error('Error fetching tasks:', error.message))
    }

    function getMedications(token) {
        axios
        .get(`${import.meta.env.VITE_API_URL}/api/medications`, {
            headers: {
                Authorization: `Bearer ${token}` // Make sure 'Bearer' is included
            }
        })
        .then((res) => {
            console.log('Fetched Medications:', res.data.data)
            setMedications(res.data.data)
        })
        .catch((error) => console.error('Error fetching Medications:', error.message))
    }
    // POST (createTask)
    function createTask(newTask, token) {
        console.log("token:", token)
        axios
            // Sends request with token
            .post(`${import.meta.env.VITE_API_URL}/api/tasks`, newTask, {
                headers: {
                    Authorization: `Bearer ${token}` // Include 'Bearer' token for authorization
                }
            })
            .then((res) => {
                console.log('Created task:', res.data.data);
                setTasks((currTasks) => [...currTasks, res.data.data]);
            })
            .catch((error) => console.error('Error creating task:', error.message));
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

  const items = [<WelcomeBlock key="1" />, <TodayBlock tasks={tasks}
    createTask={createTask}
    updateTask={updateTask}
    deleteTask={deleteTask} key="2" />];

  return (
    <>
      <div className="App">
        <ContentWrapper items={items} />
      </div>
      <div className='navbar-wrapper'>
        <NavBar />
      </div>
    </>
  );
};

export default Home;