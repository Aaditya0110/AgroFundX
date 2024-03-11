import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logImg from '../../assets/images/logImg.jpg';
import '../../assets/css/login.css';
import { login } from '../../apis/Auth';

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
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
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
      const result = await login(formData.username, formData.password);
      // console.log(getUserIdByUsername("Nit"));
      
      if (result.error) {
        throw new Error('Invalid username or password');
      }
      localStorage.setItem('token', result.data);
      localStorage.setItem('username', formData.username);
      navigate('/home');
    } catch (error) {
      setError(error.message); 
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

export default Login;
