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
      createUser({username, password});
    }
  };

  function createUser(userData) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users`, userData)
      .then(response => {
        console.log('Account created:', response.data);
        setMessage('Account created successfully!');
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server error:', error.response.status, error.response.data);
        setMessage(`Error: ${error.response.data.message || 'Failed to create account.'}`);
      }
      else {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error('No response from server:', error.request);
        setMessage('Error: No response from server.');
      }
    });
  }

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