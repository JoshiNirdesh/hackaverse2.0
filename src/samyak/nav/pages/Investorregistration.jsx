import React, { useState } from 'react';
import '../pages/css/Investorregistration.css';


const InvestorRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    nid: '',
    phone: '',
    address: '',
    role: 'investor',
    gender: '',
    budget: '',
    professionalBackground: '',
    expertise: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';

    if (!formData.email) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Email is invalid';
    }

    if (!formData.password) {
      errs.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }

    if (!formData.nid.trim()) errs.nid = 'NID is required';

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      errs.phone = 'Phone number must be 10 to 15 digits';
    }

    if (!formData.address.trim()) errs.address = 'Address is required';

    if (!formData.gender) errs.gender = 'Gender is required';

    if (!formData.budget) {
      errs.budget = 'Budget is required';
    } else if (isNaN(formData.budget) || Number(formData.budget) <= 0) {
      errs.budget = 'Budget must be a positive number';
    }

    if (!formData.professionalBackground.trim())
      errs.professionalBackground = 'Professional background is required';

    if (!formData.expertise.trim()) errs.expertise = 'Expertise is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch('https://hackathon2-0.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registration successful!');
        // reset or redirect here
      } else {
        alert(`Registration failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      alert('Error submitting form: ' + error.message);
    }
  };

  return (
    <div className="registration-form">
      <h2>Investor Registration</h2>
      <form onSubmit={handleSubmit} noValidate>
        
        <div className="form-group">
           <div className="form-labels">
          <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-labels">
          <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        </div>
        

        <div className="form-labels">
          <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        </div>
        </div>
        


        
          <div className="form-group">
            <div className="form-labels">
              <label>NID:</label>
              <input
                type="text"
                name="nid"
                placeholder="National ID Number"
                value={formData.nid}
                onChange={handleChange}
              />
            {errors.nid && <p className="error">{errors.nid}</p>}
          </div>
        
          <div className="form-labels">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        

          <div className="form-labels">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Your address"
                value={formData.address}
                onChange={handleChange}
              />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
        </div>
        
        <div className="form-group">
          <div className="form-labels">
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="error">{errors.gender}</p>}
          </div>
        

          <div className="form-labels">
            <label>Budget:</label>
            <input
              type="number"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleChange}
          />
          {errors.budget && <p className="error">{errors.budget}</p>}
        </div> 
               
          <div className="form-labels">
            <label>Expertise:</label>
            <input
              type="text"
              name="expertise"
              placeholder="Areas of expertise"
              value={formData.expertise}
              onChange={handleChange}
            />
          {errors.expertise && <p className="error">{errors.expertise}</p>}
          </div>
        </div>

        <div className="form-group">
          <div className="form-labels">
            <label>Professional Background:</label>
            <textarea
              name="professionalBackground"
              placeholder="Your professional background"
              value={formData.professionalBackground}
              onChange={handleChange}
            />
            {errors.professionalBackground && (
            <p className="error">{errors.professionalBackground}</p>
          )}
          </div>
        </div>
        

        <button className="next-btn" type="submit">NEXT</button>
          <p className="login-link">Already Registered? <a href="#">Click Me</a></p>
      </form>
    </div>
  );
};

export default InvestorRegistration;
