import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/navbar.css';
import Sidebar from './Sidebar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Navbar() {
  const navigate = useNavigate();
  const toggleSideBar = () => {
    const navSide = document.getElementById('nav-side');
    navSide.style.display = navSide.style.display === 'block' ? 'none' : 'block';
  };

  const toggleProfile = () => {
    const hProfile = document.getElementById('h-profile');
    hProfile.style.display = hProfile.style.display === 'block' ? 'none' : 'block';
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleNavClick = (dest) => {
    navigate(`/${dest}`);
  };

  return (
    <div className='n-body'>
      <div className='navbar'>
        <div className='navItems'>
          <div className='side-button' id='side-button' onClick={toggleSideBar}>
            <DensityMediumIcon />
          </div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to="/home" onClick={() => handleNavClick('home')}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" onClick={() => handleNavClick('about')}>About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/services" onClick={() => handleNavClick('services')}>Services</Link>
            </li>
            <li className='nav-item'>
              <Link to="/portfolio" onClick={() => handleNavClick('portfolio')}>Portfolio</Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact" onClick={() => handleNavClick('contact')}>Contact</Link>
            </li>
            <AccountCircleIcon className='nav-item' onClick={toggleProfile} />
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
        <Sidebar />
      </div>
    </div>
  );
}

export default Navbar;
