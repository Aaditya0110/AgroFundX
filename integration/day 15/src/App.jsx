import './assets/css/App.css';
import SignUp from './pages/authentication/signup.jsx';
import Login from './pages/authentication/login.jsx'; 
import Home from './pages/user/home.jsx';
import Profile from './pages/user/profile.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import UserDashboard from './pages/user/userDashboard.jsx';
import { useLocation } from 'react-router-dom';
import Loans from './pages/user/loans.jsx';
import AdminDash from './pages/admin/admin-dash.jsx';
import LoanApproval from './pages/admin/lone-approvel.jsx';
import DetailedLoanInfo from './pages/user/detailed-loan.jsx';
import Footer from './components/footer.jsx';
import ScrollToTop from './components/reusers/ScrollToTop.jsx';

const Navi = () => {
  const location = useLocation();
  if (location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/home') {
    return <Navbar />;
  } else {
    return null;
  }
};

const Foot = () => {
  const location2 = useLocation();
  if (location2.pathname !== '/' && location2.pathname !== '/signup') {
    return <Footer />;
  } else {
    return null;
  }
};
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; 
};


function App() {
  
  return (
    <>
      <Router>
        <Navi/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/home'element={<Home/>}/>
          <Route path='/profile'element={isAuthenticated() ? <Profile /> : <Navigate to='/'></Navigate>}/>
          <Route path='/navbar' element={<Navbar />}/>
          <Route path='/sidebar' element={<Sidebar />}/>
          <Route path='/userDashboard' element={isAuthenticated() ? <UserDashboard /> : <Navigate to='/'></Navigate>}/>
          <Route path='/loans' element={<Loans />}/>
          <Route path='/adminDash' element={<AdminDash />}/>
          <Route path='/loneApproval' element={<LoanApproval />}/>
          {/* <Route path='/detailedLoanDetails' element={<DetailedLoanInfo />}/> */}
          <Route path="/detailedLoanDetails/:id" element={<DetailedLoanInfo />}/>
        </Routes>
        <Foot/>
      </Router>
    </>
  );
}

export default App;

