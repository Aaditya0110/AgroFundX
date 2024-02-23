import { useState, useEffect } from 'react';
import '../../assets/css/login.css';
import logImg from '../../assets/images/logImg.jpg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check for window size on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call for authentication (replace with actual API call)
      await fakeLoginRequest(formData.username, formData.password);
      navigate('/home'); // Redirect to home page on successful login
    } catch (error) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='body1'>
      <div className={`login-container ${isSmallScreen ? 'small-screen' : ''}`}>
        <div className='simg'>
          <img className='ig' src={logImg} alt='Login' />
        </div>
        <div className='center'>
          <h3 className='lh'>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username'></label>
              <input
                type='text'
                id='username'
                className='linput'
                name='username'
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Username'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'></label>
              <input
                type='password'
                className='linput'
                placeholder='Password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <p className='fpass'>Forgot Password</p>
            <button type='submit' className='lbtt' disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button type='button' className='lbtt' onClick={() => navigate('/signup')} disabled={loading}>
              Sign Up
            </button>
            {error && <p className='error-message'>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

// Function to simulate login request (replace with actual API call)
const fakeLoginRequest = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'demo' && password === 'password') {
        resolve();
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export default Login;
