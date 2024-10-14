import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing user data or tokens)
    navigate('/login'); // Redirect to login after logging out
  };

  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
    },
    button: {
      float: 'right',
      fontSize: '100%',
    },
    h1: {
      backgroundColor: 'aquamarine',
      fontSize: '400%',
      padding: '20px',
    },
    h2: {
      backgroundColor: 'mediumseagreen',
      fontSize: '300%',
      padding: '20px',
      margin: '20px 0',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleLogout}>Logout</button>
      <h1 style={styles.h1}>CareSync</h1>

      <h2 style={styles.h2}>
        <Link to="/all-tasks" style={styles.link}>All Tasks</Link>
      </h2>

      <h2 style={styles.h2}>
        <Link to="/medication-tracker" style={styles.link}>Medication Tracker</Link>
      </h2>

      <h2 style={styles.h2}>
        <Link to="/task-manager" style={styles.link}>Task Manager</Link>
      </h2>
    </div>
  );
};

export default Home;