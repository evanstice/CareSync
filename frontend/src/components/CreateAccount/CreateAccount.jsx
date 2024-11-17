import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import mongoose from "mongoose";

export default function CreateAccount() {
  const [newUser, setNewUser] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    } else {
      createUser({ username, password });
    }
  };



  function createUser(userData) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users`, userData)
      .then((res) => {
        setNewUser((currUser) => [...currUser, res.data.data]);
        setMessage('Account created successfully!');
        //navigate('/home');
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error('Server error:', error.response.data);
          setMessage(`Error: ${error.response.data.message || 'Failed to create account.'}`);
        } else if (error.request) {
          // Request was made but no response received
          console.error('No response from server:', error.request);
          setMessage('Error: No response from server.');
        } else {
          // Something else went wrong
          console.error('Unexpected error:', error.message);
          setMessage(`Error: ${error.message}`);
        }
      });
  }
  

  
/*
  // POST request to create a user
  function createUser(userData) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users`, userData)
      .then((res) => {
        setNewUser((currUser) => [...currUser, res.data.data]);
        setMessage('Account created successfully!');
        //navigate('/home'); // Navigate to home on success
      })
      .catch((error) => {
        console.error('Error creating user:', error.message);
        setMessage('Failed to create account. Please try again.');
      });
  }
      */

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
        <p>Max 20 characters</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <p>Password must have 1 Capital Letter and 1 number. Max 20 characters</p>
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