import React, { useState, useEffect } from 'react';
import '../../assets/css/home.css';
import ImageSlider from '../../components/imageslider';
import Navbar from '../../components/navbar';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
