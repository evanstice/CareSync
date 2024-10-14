import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const createAccountClick = () => {
    // Password validation: must contain a number and a capital letter
    if (!username) {
      setMessage('Invalid username');
    } else if (!(password.match(/[0-9]/) && password.match(/[A-Z]/))) {
      setMessage('Password needs one number and one capital letter.');
    } else {
      // Navigate to home on successful account creation
      navigate('/home');
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
    message: {
      color: 'red',
    },
  };

  return (
    <div>
      <h1 style={styles.h1}>CareSync</h1>
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
    </div>
  );
};

export default CreateAccount;