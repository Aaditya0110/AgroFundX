
import '../../assets/css/home.css';
import ImageSlider from '../../components/imageslider';

function Home(){
    
    return(
        <div className="home-body">
            <div className="home">
                {/* <Navbar/> */}
                <div className='home-content'>
                <ImageSlider/>
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
                {/* <ImageSlider/> */}
                </div>
            </div>
        </div>

    )
}

export default Home;
