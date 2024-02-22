import './assets/css/App.css';
import SignUp from './pages/authentication/signup.jsx';
import Login from './pages/authentication/login.jsx'; 
import Home from './pages/user/home.jsx';
import Profile from './pages/user/profile.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/signup' exact element={<SignUp/>}/>
        <Route path='/' exact element={<Login />} />
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/profile' exact element={<Profile/>}/>
        
        <Route path='/navbar' exact element={<Navbar/>}/>
        
        <Route path='/sidebar' exact element={<Sidebar/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
