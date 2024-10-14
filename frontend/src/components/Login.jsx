import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signInClick = () => {
    // Example: Check if the username and password are valid
    if (username && password) {
      navigate('/home'); // Redirect to Home after sign-in
    } else {
      alert('Please enter valid credentials');
    }
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
    link: {
      fontSize: '13px',
    },
  };

  return (
    <div>
      <h1 style={styles.h1}>CareSync</h1>
      <div style={styles.container}>
        <h3>Sign In</h3>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <br />
          <input
            type="button"
            value="Sign In"
            onClick={signInClick}
            style={styles.button}
          />
        </form>
        <Link to="/create-account" style={styles.link}>
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;