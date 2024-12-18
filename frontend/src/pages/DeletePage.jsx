import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from '../components/Navbar/NavBar';

export default function DeletePage() {
  const [users, setUsers] = useState([])
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

    // Deletes account on button click
    const deleteOnClick = () => {
      const token = localStorage.getItem('token')
      console.log("Token:", token)
      const [header, payload, signature] = token.split('.')
      const decodedPayload = JSON.parse(atob(payload));
    if(decodedPayload) {
      deleteUser(decodedPayload._id);
      navigate('/login');
    }
    else {
        setMessage("Cannot find Account");
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

// Delete users
function deleteUser(id) {
  axios
      .delete(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
      .catch((error) => { 
        console.error('Error deleting user:', error.message);
        setMessage('Failed to delete account.');
      })
}

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#33364B',
      margin: '0',
    },
    container: {
      padding: '30px',
      backgroundColor: '#ffffff',
      border: '2px solid #4caf50',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      width: '300px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#4caf50',
    },
    text: {
        fontSize: '14px',
        marginBottom: '20px',
        color: '#4caf50',
      },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    link: {
      fontSize: '14px',
      color: '#4caf50',
      textDecoration: 'none',
      display: 'block',
      marginTop: '10px',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    message: {
      color: 'red',
    },
  };

  return (
    <div style={styles.body}>
    <div className='navbar-wrapper'>
        <NavBar />
    </div>
      <div style={styles.container}>
        <h3 style={styles.header}>Delete Account</h3>
        <p style={styles.text}>Please enter your password to delete account</p>
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
           <button
            type="button"
            onClick={deleteOnClick}
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Delete Account
          </button>
          <p style={styles.message}>{message}</p>
      </div>
    </div>
  );
};