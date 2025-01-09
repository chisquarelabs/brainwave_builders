import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const physicianEmail = "physician@gmail.com";
  const physicianPassword = "physician123";
  const userEmail = "user@gmail.com";
  const userPassword = "user123";


  if (!localStorage.getItem('physician')) {
    localStorage.setItem('physician', JSON.stringify({ email: physicianEmail, password: physicianPassword }));
  }

  if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify({ email: userEmail, password: userPassword }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if (!username || !password) {
      setError('Both fields are required');
      return;
    }


    const storedAdmin = JSON.parse(localStorage.getItem('physician') || '{}');
    const storedPhysician = JSON.parse(localStorage.getItem('user') || '{}');


    if (
      (username === storedAdmin.email && password === storedAdmin.password) ||
      (username === storedPhysician.email && password === storedPhysician.password)
    ) {

      localStorage.setItem('loggedInUser', JSON.stringify({ email: username }));
      setError('');
      console.log('Login successful!');

      if (username === storedAdmin.email) {
        navigate('/'); 
      } else {
        navigate('/appointment'); 
      }
    } else {
      setError('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="text-white">Login</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control"
              />
              <button type="button" onClick={togglePasswordVisibility} className="show-password-btn">
                {showPassword ? 'Hide Password' : 'Show Password'}
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 mt-3">Login</button>
        </form>

        <div className="text-center mt-4">
          <span className="text-white">Don't have an account? </span>
          <Link to="/signup">
            <button className="btn btn-secondary py-2 px-4">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
