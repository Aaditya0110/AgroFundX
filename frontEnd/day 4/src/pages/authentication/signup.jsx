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
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signing up with:', formData);
      // Add your sign-up logic here
      // Reset form data after submission
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
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
              <input
                type="text"
                className={`linput2 ${errors.username && 'is-invalid'}`}
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Username'
                required
              />
              {errors.username && <p className="error-message">{errors.username}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                className={`linput2 ${errors.email && 'is-invalid'}`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email'
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`linput2 ${errors.password && 'is-invalid'}`}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Password'
                required
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`linput2 ${errors.confirmPassword && 'is-invalid'}`}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder='Confirm Password'
                required
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
            <button type="submit" className='lbtt2'>Sign Up</button>
            <button type="button" className='lbtt2' id='sbtt2' onClick={() => navigate('/')}>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
