import React, { useState } from 'react';

const Startupregistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
    nid: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your API call or form handling logic here
  };

  return (
    <div className="startup-reg-container">
      <h2>Startup Registration</h2>
      <form onSubmit={handleSubmit} className="startup-reg-form">
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>

        <label>
          Gender:
          <div className="gender-options">
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
          </div>
        </label>

        <label>
          National ID (NID):
          <input type="text" name="nid" value={formData.nid} onChange={handleChange} required />
        </label>

        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Startupregistration;
