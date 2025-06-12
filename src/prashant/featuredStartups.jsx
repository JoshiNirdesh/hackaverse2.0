import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import startupData from './startupData'
import './style.css'


function FeaturedStartups() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredStartups = startupData.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || s.category.includes(selectedCategory))
  )

  return (
    <div className="featured-section">
      

      <div className="filters">
        <input
          type="text"
          placeholder="Search startups..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="All">All Categories</option>
          <option value="AI/ML">AI/ML</option>
          <option value="HealthTech">HealthTech</option>
          <option value="SaaS">SaaS</option>
          <option value="EdTech">EdTech</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="CleanTech">CleanTech</option>
        </select>
      </div>
      <h2 className="headingg">⭐ Featured Startups</h2>

      <div className="card-container">
        {filteredStartups.map((startup, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div className="card-icon">{startup.icon}</div>
              <div className="card-name"><h3>{startup.name}</h3></div>
              
            </div>
            <div className="card-neck">
            <div className="badges">
              {startup.category.map((cat, i) => (
                <span key={i} className="badge">{cat}</span>
              ))}
            </div>
            <div className="card-star">★</div>
            </div>

            <p className="description">{startup.description}</p>
            <p><strong>Raised / Target:</strong> {startup.raised} / {startup.target}</p>
            <p><strong>Investors:</strong> {startup.investors}</p>
            <p><strong>Team Size:</strong> {startup.teamSize}</p>
            <p><strong>Location:</strong> {startup.location}</p>

            <div className="tags">
              {startup.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <Link to={`/startups/${startup.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <button className="details-btn">View Details</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedStartups
