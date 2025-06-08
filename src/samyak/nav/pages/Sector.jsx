import React, { useState } from 'react';
import '../pages/css/Sector.css'; // Assuming you have a CSS file for styling

const Sector = () => {
  const sectors = [
    'Agriculture & Food',
    'Education',
    'Healthcare',
    'Technology',
    'Tourism',
    'Manufacturing',
    'Finance',
    'Construction',
    'Retail',
    'Energy'
  ];

  const [selectedSectors, setSelectedSectors] = useState([]);
  const [error, setError] = useState('');

  const toggleSector = (sector) => {
    if (selectedSectors.includes(sector)) {
      setSelectedSectors(selectedSectors.filter(s => s !== sector));
      setError('');
    } else {
      if (selectedSectors.length >= 3) {
        setError('You can select up to 3 sectors only.');
      } else {
        setSelectedSectors([...selectedSectors, sector]);
        setError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSectors.length === 0) {
      setError('Please select at least one sector.');
      return;
    }

    console.log('Selected sectors:', selectedSectors);
    // TODO: Proceed with navigation or API submission
  };

  return (
    <div className='background'>

      <div className="registration-form">
        <h2>Preferred Sectors (Select up to 3)</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group sector-buttons">
            {sectors.map((sector, index) => (
              <button
                type="button"
                key={index}
                className={`sector-btn ${selectedSectors.includes(sector) ? 'selected' : ''}`}
                onClick={() => toggleSector(sector)}
              >
                {sector}
              </button>
            ))}
          </div>

          {error && <p className="error">{error}</p>}
          
            
           <div className="button-group">
  <button className="next-btn1">Previous</button>
  <button type="submit" className="next-btn">Register Now</button>
</div>

          <p className="login-link">Already Registered? <a href="#">Click Me</a></p>
        </form>
      </div>

    </div>
  );
};

export default Sector;
