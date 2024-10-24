import Tasks from './components/Tasks';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import NavBar from './components/NavBar';
// need to make .jsx files for medications and integrate

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;