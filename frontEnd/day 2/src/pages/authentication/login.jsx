import '../../assets/css/login.css'
import  { useState } from 'react';
import logImg from '../../assets/images/logImg.jpg'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  let navigate =useNavigate();
  const handleSignUpClick = () => {
    let path = '/signup';
    navigate(path);
  };
  const handleLoginClick = () => {
    let path = '/home';
    navigate(path);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className='body1'>
    <div className="login-container">
        <div className='simg'>
            <img className='ig' src={logImg}/>
        </div>
        <div className='center'>
      <h3 className='lh'>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            className='linput'
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder='UserName'
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            className='linput'
            placeholder='Password'
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <p className='fpass'>Forgot Password</p>
        <button type="submit" className='lbtt' onClick={handleLoginClick}>Login</button>
        <button type="submit" className='lbtt' onClick={handleSignUpClick}>Sign Up</button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
