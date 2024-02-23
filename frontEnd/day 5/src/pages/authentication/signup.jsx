// SignUp.js
import '../../assets/css/signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logImg from '../../assets/images/logImg.jpg';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  let navigate = useNavigate();
  const handleSignUpClick = () => {
    let path = '/';
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
    console.log('Signing up with:', formData);
    // Add your sign-up logic here
    // Reset form data after submission
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='signup-body'>
      <div className="signup-container2">
        <div className="simg2">
          <img className="ig2" src={logImg} alt="Signup" />
        </div>
        <div className='center2'>
          <h2 className='lh2'>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                className='linput2'
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Username'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                className='linput2'
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                className='linput2'
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Password'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword"></label>
              <input
                type="password"
                id="confirmPassword"
                className='linput2'
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder='Confirm Password'
                required
              />
            </div>
            <button type="submit" className='lbtt2'>Sign Up</button>
            <button type="submit" className='lbtt2' id='sbtt2' onClick={handleSignUpClick}>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
