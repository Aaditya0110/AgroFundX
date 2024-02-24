import './assets/css/App.css';
import SignUp from './pages/authentication/signup.jsx';
import Login from './pages/authentication/login.jsx'; 
import Home from './pages/user/home.jsx';
import Profile from './pages/user/profile.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import UserDashboard from './pages/user/userDashboard.jsx';
import { useLocation } from 'react-router-dom';
import Loans from './pages/user/loans.jsx';
import AdminDash from './pages/admin/admin-dash.jsx';
import LoanApproval from './pages/admin/lone-approvel.jsx';
import DetailedLoanInfo from './pages/user/detailed-loan.jsx';
import Footer from './components/footer.jsx';

const Navi = () => {
  const location = useLocation();
  if (location.pathname !== '/' && location.pathname !== '/signup') {
    return (
      <>
        <Navbar/>
        {/* <Sidebar/> */}
      </>
    )
  } else {
    return null;
}
}
// const Foot = () => {
//   const location2 = useLocation();
//   if (location2.pathname !== '/' && location2.pathname !== '/signup') {
//     return (
//       <>
//         <Footer/>
//         {/* <Sidebar/> */}
//       </>
//     )
//   } else {
//     return null;
// }
// }

function App() {
  return (
    <>
    <Router>
    <Navi/>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/signup' exact element={<SignUp/>}/>
        <Route path='/' exact element={<Login />} />
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/profile' exact element={<Profile/>}/>
        <Route path='/navbar' exact element={<Navbar/>}/>
        <Route path='/sidebar' exact element={<Sidebar/>}/>
        <Route path='/userDashboard' exact element={<UserDashboard/>}/>
        <Route path='/loans' exact element={<Loans/>}/>
        <Route path='/adminDash' exact element={<AdminDash/>}/>
        <Route path='/loneApproval' exact element={<LoanApproval/>}/>
        <Route path='/detailedLoanDetails' exact element={<DetailedLoanInfo/>}/>
        
      </Routes>
    </Router>
    <Footer/>
    </>
  );

  
}

export default App;
