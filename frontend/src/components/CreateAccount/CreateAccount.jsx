import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CreateAccount() {
  const [users, setUsers] = useState([]);
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
      const user = users.find(u => u.username === username);
      if (user) {
        setMessage('Username already exists');
      } else {
        createUser({ username, password });
        navigate('/home');
      }
    }
  };

  // GET (getUsers): load users from the backend
  useEffect(() => {
    console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((res) => {
        console.log('Fetched users:', res.data.data);
        setUsers(res.data.data);
      })
      .catch((error) => console.error('Error fetching users:', error.message));
  }, []);

  function createUser(userData) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/users`, userData)
      .then(response => {
        // Handle successful response
        console.log('Account created:', response.data);
        setMessage('Account created successfully!');
      })
      .catch((error) => {
        setMessage('Error: Failed to create account');
      });
  }

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'cornflowerblue',
      margin: '0',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    container: {
      padding: '30px',
      backgroundColor: '#ffffff',
      border: '1px solid #ddd',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      width: '300px',
      textAlign: 'center',
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#4caf50',
      fontWeight: '600',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'border-box',
      fontSize: '14px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      marginTop: '15px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    backLink: {
      fontSize: '14px',
      color: '#4caf50',
      textDecoration: 'none',
      marginTop: '10px',
      cursor: 'pointer',
      display: 'inline-block',
    },
    backLinkHover: {
      textDecoration: 'underline',
    },
    message: {
      color: message === 'Account created successfully!' ? '#5cb85c' : '#d9534f',
      fontSize: '14px',
      marginTop: '10px',
    },
    passwordHint: {
      fontSize: '12px',
      color: '#777',
      marginTop: '-5px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h3 style={styles.header}>Create Account</h3>
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
          <p style={styles.passwordHint}>
            Password must have 1 capital letter and 1 number.
          </p>
          <button
            type="button"
            onClick={createAccountClick}
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Create Account
          </button>
          {message && <p style={styles.message}>{message}</p>}
        </form>
        <div
          style={styles.backLink}
          onClick={() => navigate('/login')}
          onMouseOver={(e) => (e.target.style.textDecoration = styles.backLinkHover.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Back to Login
        </div>
      </div>
    </div>
  );
}
