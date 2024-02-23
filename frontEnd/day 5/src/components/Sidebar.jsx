import '../assets/css/sidebar.css';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const toggleSidebar = () => {
    document.getElementById('SBar').style.display = 'none';
  };

  let navigate = useNavigate();
  const handleClick = (dest) => {
    let path = `/${dest}`;
    navigate(path);
  };

  return (
    <div className='SBar' id='SBar'>

      <div id='scontainer' className='Scontainer'>
        <div id='bar'>
          <ul className='sblist'>
            {/* <div className='toggle-bttn2' id='toggle-bttn2'onClick={toggleSidebar}>Close</div> */}
            <li className='sbitem' onClick={() => handleClick('userDashboard')}>
              <div className='sidebar' onClick={toggleSidebar}>
                <ul className='sidebar-list'>
                  <li className='sidebar-item'>
                    <SpaceDashboardIcon className='sidebar-icon' />
                    <span className='sidebar-text'>Dashboard</span>
                  </li>
                </ul>
              </div>
            </li>
            <li className='sbitem' onClick={() => handleClick('loans')}>
              <div className='sidebar' onClick={toggleSidebar}>
                <ul className='sidebar-list'>
                  <li className='sidebar-item'>
                    <AccountBalanceIcon className='sidebar-icon' />
                    <span className='sidebar-text'>Loans and Schemes</span>
                  </li>
                </ul>
              </div></li>
              <li className='sbitem' onClick={() => handleClick('adminDash')}>
              <div className='sidebar' onClick={toggleSidebar}>
                <ul className='sidebar-list'>
                  <li className='sidebar-item'>
                    <SpaceDashboardIcon className='sidebar-icon' />
                    <span className='sidebar-text'>Admin Dashboard</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='stransparency' onClick={toggleSidebar}></div>
      </div>
    </div>
  );
}

export default Sidebar;
