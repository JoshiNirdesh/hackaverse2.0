import React, { useState } from 'react';
import './css/signin.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://hackathon2-0.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful!');
        if (formData.remember) {
          // Store email or token in localStorage if desired
          // localStorage.setItem('email', formData.email);
        }
        // Redirect or do something
        // navigate('/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="background">
      <div className="signin-registration-form">
        <h2>Sign In</h2>
        <p>Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit}>
          <div className="signin-form-group">
            <div className="signin-form-labels">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="signin-form-labels">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="signin-options">
  <label className="remember-me">
    <input
      type="checkbox"
      name="remember"
      checked={formData.remember}
      onChange={handleChange}
    />Remember Me
  </label>
  <a href="#" className="forgot-password">Forgot Password?</a>
</div>



          {error && <p className="error">{error}</p>}

          <div className="button-group">
            <button type="submit" className="next-btn">Sign In</button>
          </div>

          <p className="login-link">Don't have an account? <a href="#">Register here</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
