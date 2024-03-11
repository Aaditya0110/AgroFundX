import { useState, useEffect } from 'react';
import '../../assets/css/home.css';
import ImageSlider from '../../components/imageslider';
import Navbar from '../../components/navbar';
import { getRoleWithUsername, getUserIdByUsername, getUsersIdByUsername } from '../../apis/Auth';
// import { getAllUsers } from '../../apis/admin/admin';
// import { getUserById, updateUser,getLoan } from '../../apis/user/Users';
// import { deleteUser } from '../../apis/user/Users';
// import { getLoansUsers,getLoans,deleteLoans } from '../../apis/user/Loans';

function Home() {

  const [isScrolled, setIsScrolled] = useState(false);
  // console.log(getLoans());
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isTop = scrollTop === 0;
      setIsScrolled(!isTop);
    };

    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // Fetch user ID based on role
    const role = localStorage.getItem('role');
  
    if (role === 'USER') {
      getUsersIdByUsername(localStorage.getItem('username'))
        .then(id => {
          localStorage.setItem('UsersId', id);
          console.log('User ID stored in local storage:', id);
        })
        .catch(error => console.error('Error fetching user ID:', error));
    }
  }, []);
  
  useEffect(() => {
    // Fetch user ID and store in local storage
    getUserIdByUsername(localStorage.getItem('username'))
      .then(id => {
        // Store user ID in local storage
        localStorage.setItem('userId', id);
        console.log('User ID stored in local storage:', id);
        
        // Fetch user's role based on user ID
        getRoleWithUsername(localStorage.getItem('username'))
          .then(role => {
            // Store user's role in local storage
            localStorage.setItem('role', role);
            console.log('User role stored in local storage:', role);
          })
          .catch(error => console.error('Error fetching user role:', error));
      })
      .catch(error => console.error('Error fetching user ID:', error));
  }, []);

  
  return (
    <div className="home-body">
      <div className='as'>
        <div className={`static-body ${isScrolled ? 'fade-out' : ''}`} id='static-body'>
          Welcome To The Site
        </div>
      </div>
      <div className="home">
        <Navbar />
        <div className='home-content'>
          <ImageSlider />
          <div className='g-info'>
            <div className="info-item">
              <h2>130037</h2>
              <p>Regd. Beneficiary</p>
            </div>
            <div className="info-item">
              <h2>107527</h2>
              <p>No. of Applications</p>
            </div>
            <div className="info-item">
              <h2>₹ 54,398 Cr</h2>
              <p>Loan Amt. of Received Appls.</p>
            </div>
            <div className="info-item">
              <h2>215992</h2>
              <p>User</p>
            </div>
            <div className="info-item">
              <h2>34</h2>
              <p>State/UTs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
