
import Navbar from "../../components/navbar";
import '../../assets/css/home.css';
import ImageSlider from '../../components/imageslider';

function Home(){
    
    return(
        <div className="home-body">
            <div className="home">
                <Navbar/>
                <div className='home-content'>
                <ImageSlider/>
                {/* <ImageSlider/> */}
                </div>
            </div>
        </div>
    )
}

export default Home;
