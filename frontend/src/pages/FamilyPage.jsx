import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/Navbar/NavBar';
import { useState, useEffect } from 'react';

export default function FamilyPage() {
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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
        <h3 style={styles.header}>Account Settings</h3>
        <Link
          to="/delete-account"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.textDecoration = styles.linkHover.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Delete Account
        </Link>
        <Link
          to="/update-account"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.textDecoration = styles.linkHover.textDecoration)}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Update Account
        </Link>
      </div>
    </div>
  );
};