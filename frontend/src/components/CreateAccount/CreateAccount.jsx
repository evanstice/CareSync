import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import mongoose from "mongoose";

export default function CreateAccount() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const createAccountClick = () => {
    // Password validation: must contain a number and a capital letter
    if (!username || !password.match(/[0-9]/) || !password.match(/[A-Z]/)) {
      setMessage(
        !username
          ? 'Invalid username'
          : 'Password needs one number and one capital letter.'
      );
    } 
    else if(password != re_password) {
      setMessage("Passwords do not match.")
    }
    else {
      const user = users.find(u => u.username === username);  
      if(user) {
        setMessage('Username already exists')
      }
      else{
      createUser({username, password});
      navigate('/home');
      }
    }
  };

    // GET (getUsers): load users from the backend
    useEffect(() => {
      console.log("VITE_API_URL:", import.meta.env.VITE_API_URL)
      axios
          .get(`${import.meta.env.VITE_API_URL}/api/users`)
          .then((res) => {
              console.log('Fetched users:', res.data.data)
              setUsers(res.data.data)
          })
          .catch((error) => console.error('Error fetching users:', error.message))
  }, [])

  function createUser(userData) {
    axios
    .post(`${import.meta.env.VITE_API_URL}/api/users`, userData)
    .then(response => {
    // Handle successful response
    console.log('Account created:', response.data);
  })
  .catch((error) => {
  })
};

  const styles = {
    container: {
      margin: 'auto',
      padding: '20px',
      backgroundColor: 'white',
      border: '30px solid mediumseagreen',
      width: '250px',
      textAlign: 'center',
    },
    h1: {
      backgroundColor: 'aquamarine',
      fontSize: '400%',
      padding: '20px',
    },
    input: {
      width: '250px',
      height: '25px',
      margin: 'auto',
      marginBottom: '10px',
    },
    button: {
      width: '250px',
      height: '35px',
      backgroundColor: 'lightgray',
      marginTop: '20px',
    },
    message: {
      color: 'red',
    },
  };

  return (
    <div style={styles.container}>
      <h3>Create Account</h3>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <p>Password must have 1 Capital Letter and 1 number.</p>
        <input
          type="password"
          placeholder= "Password"
          value={re_password}
          onChange={(e) => setRePassword(e.target.value)}
          style={styles.input}
        />
        <p>Please re-enter your password.</p>
        <input
          type="button"
          value="Create Account"
          onClick={createAccountClick}
          style={styles.button}
        />
        <p style={styles.message}>{message}</p>
      </form>
    </div>
  );
}