import '../assets/css/sidebar.css';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const toggleSideBar = () => {
    const navSide = document.getElementById('nav-side');
    navSide.style.display = navSide.style.display === 'block' ? 'none' : 'block';
  };

  let navigate = useNavigate();

  const role = localStorage.getItem('role');

  const handleClick = (dest) => {
    let path = `/${dest}`;
    navigate(path);
  };

  return (
    <div className='SBar' id='SBar'>
      <div id='scontainer' className='Scontainer'>
        <div id='bar'>
          <ul className='sblist'>
            {role === 'USER' && (
              <li className='sbitem' onClick={() => handleClick('userDashboard')}>
                <div className='sidebar' onClick={toggleSideBar}>
                  <ul className='sidebar-list'>
                    <li className='sidebar-item'>
                      <SpaceDashboardIcon className='sidebar-icon' />
                      <span className='sidebar-text'>Dashboard</span>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            {role === 'ADMIN' && (
              <li className='sbitem' onClick={() => handleClick('adminDash')}>
                <div className='sidebar' onClick={toggleSideBar}>
                  <ul className='sidebar-list'>
                    <li className='sidebar-item'>
                      <SpaceDashboardIcon className='sidebar-icon' />
                      <span className='sidebar-text'>Admin Dashboard</span>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className='sbitem' onClick={() => handleClick('loans')}>
              <div className='sidebar' onClick={toggleSideBar}>
                <ul className='sidebar-list'>
                  <li className='sidebar-item'>
                    <AccountBalanceIcon className='sidebar-icon' />
                    <span className='sidebar-text'>Loans and Schemes</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='stransparency' onClick={toggleSideBar}></div>
      </div>
    </div>
  );
}

export default Sidebar;
