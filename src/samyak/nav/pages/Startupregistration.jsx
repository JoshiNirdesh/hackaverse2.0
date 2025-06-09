import React, { useState } from 'react';
import './css/investorregistration.css';

const StartupRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    role: 'startup',
    companyName: '',
    industry: '',
    fundingStage: '',
    companyDescription: '',
    website: '',
    foundedYear: '',
    teamSize: '',
    location: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email required';
    if (!formData.password || formData.password.length < 6) errs.password = 'Minimum 6 characters';
    if (!formData.confirmPassword.trim()) errs.confirmPassword = 'Please confirm password';
    else if (formData.confirmPassword !== formData.password) errs.confirmPassword = 'Passwords do not match';
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Phone number required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name required';
    if (!formData.industry.trim()) errs.industry = 'Industry required';
    if (!formData.fundingStage.trim()) errs.fundingStage = 'Funding stage required';
    if (!formData.companyDescription.trim()) errs.companyDescription = 'Description required';
    if (!formData.website.trim()) errs.website = 'Website required';
    if (!formData.foundedYear.trim() || isNaN(formData.foundedYear)) errs.foundedYear = 'Valid year required';
    if (!formData.teamSize.trim()) errs.teamSize = 'Team size required';
    if (!formData.location.trim()) errs.location = 'Location required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    const { confirmPassword, ...submissionData } = formData;

    try {
      const res = await fetch('https://hackathon2-0.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Startup registration successful!');
      } else {
        alert(`Failed: ${data.message || 'Unknown error'}`);
      }
    } catch (err) {
      alert('Submission error: ' + err.message);
    }
  };

  return (
    <div className="background">
      <div className="registration-form">
        <h2>Startup Registration</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <div className="form-labels">
              <label>First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-labels">
              <label>Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-labels">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="form-labels">
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-labels">
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <div className="form-labels">
              <label>Phone Number:</label>
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="form-labels">
              <label>Company Name:</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
              {errors.companyName && <p className="error">{errors.companyName}</p>}
            </div>
            <div className="form-labels">
              <label>Industry:</label>
              <input type="text" name="industry" value={formData.industry} onChange={handleChange} />
              {errors.industry && <p className="error">{errors.industry}</p>}
            </div>
            <div className="form-labels">
              <label>Funding Stage:</label>
              <input type="text" name="fundingStage" value={formData.fundingStage} onChange={handleChange} />
              {errors.fundingStage && <p className="error">{errors.fundingStage}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="form-labels">
              <label>Website:</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange} />
              {errors.website && <p className="error">{errors.website}</p>}
            </div>
            <div className="form-labels">
              <label>Founded Year:</label>
              <input type="number" name="foundedYear" value={formData.foundedYear} onChange={handleChange} />
              {errors.foundedYear && <p className="error">{errors.foundedYear}</p>}
            </div>
            <div className="form-labels">
              <label>Team Size:</label>
              <input type="text" name="teamSize" value={formData.teamSize} onChange={handleChange} />
              {errors.teamSize && <p className="error">{errors.teamSize}</p>}
            </div>
          </div>
          <div className="form-group">
            <div className="form-labels">
              <label>Location:</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
              {errors.location && <p className="error">{errors.location}</p>}
            </div>
            <div className="form-labels">
              <label>Company Description:</label>
              <textarea name="companyDescription" value={formData.companyDescription} onChange={handleChange} />
              {errors.companyDescription && <p className="error">{errors.companyDescription}</p>}
            </div>
        </div>

          <div className="button-group">
            <button type="submit" className="next-btn">Register Startup</button>
          </div>

          <p className="login-link">Already Registered? <a href="#">Login here</a></p>
        </form>
      </div>
    </div>
  );
};

export default StartupRegistration;
