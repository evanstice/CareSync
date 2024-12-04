import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import WelcomeBlock from '../components/Home/WelcomeBlock'
import TodayBlock from '../components/Home/TodayBlock'
import ContentWrapper from '../components/Home/ContentWrapper';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing user data or tokens)
    navigate('/login'); // Redirect to login after logging out
  };

  const items = [<WelcomeBlock key="1" />, <TodayBlock key="2" />];

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