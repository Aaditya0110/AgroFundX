// import React from 'react';
import '../assets/css/navbar.css';
// import Sidebar from './Sidebar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Navbar() {
  var flag2=true;
  const toggleSideBar=()=>{
    if(flag2==true){
      document.getElementById('nav-side').style.display='block';
      flag2=false;
    }
    else{
      flag2=true;
      document.getElementById('nav-side').style.display='none';
    }
  }
  var flag=true;
  const toggleProfile = () =>{
    if(flag==true){
      document.getElementById('h-profile').style.display='block';
      flag=false;
    }
    else{
      flag=true;
      document.getElementById('h-profile').style.display='none';
    }
  }
  let navigate =useNavigate();
  const handleProfileClick = () => {
    let path = '/profile';
    navigate(path);
  };
  return (
  <div className='n-body'>
    <div className='navbar'>
      <div className="navItems">
        <div className="side-button"  id='side-button'>
          <DensityMediumIcon  onClick={toggleSideBar}/>
        </div>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
          <AccountCircleIcon className="nav-item" id="acccircle" onClick={toggleProfile} />
        </ul>
      </div>
      <div className='h-profile' id='h-profile'>
        <ul className='hprofile-list'>
          <li className='hp-item' onClick={handleProfileClick}>View Profile</li>
          <li className='hp-item'>Logout</li>
        </ul>
      </div>
      </div>
      <div className='nav-side' id='nav-side'>
        <Sidebar/>
      </div>
      </div>
  );
}

export default Navbar;
