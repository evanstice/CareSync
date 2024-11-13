import Login from './components/Login/Login';
import CreateAccount from './components/CreateAccount/CreateAccount';
import TasksPage from './pages/TasksPage';
import HomePage from './pages/HomePage'
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </Router>
  );
}
export default App;
