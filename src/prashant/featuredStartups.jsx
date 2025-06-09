import React, { useState } from 'react'
import './style.css'

const startups = [
  {
    name: 'TechFlow AI',
    icon: '🤖',
    category: ['AI/ML', 'Series A'],
    description: 'AI-powered workflow automation platform that helps enterprises streamline operations and increase productivity by 40%.',
    raised: '$2.5M',
    target: '$5M',
    investors: 45,
    teamSize: '12 people',
    location: 'San Francisco, CA',
    tags: ['Enterprise', 'Automation', 'SaaS']
  },
  {
    name: 'HealthTech Pro',
    icon: '🩺',
    category: ['HealthTech', 'Series A'],
    description: 'Telemedicine platform connecting rural patients with specialists, serving over 50,000 patients across 15 states.',
    raised: '$3.2M',
    target: '$7M',
    investors: 67,
    teamSize: '25 people',
    location: 'Boston, MA',
    tags: ['Healthcare', 'Telemedicine', 'B2B']
  },
  {
    name: 'DataViz Pro',
    icon: '📊',
    category: ['SaaS', 'Seed'],
    description: 'Advanced data visualization platform helping Fortune 500 companies make data-driven decisions faster.',
    raised: '$1.2M',
    target: '$3M',
    investors: 28,
    teamSize: '6 people',
    location: 'Seattle, WA',
    tags: ['Analytics', 'Enterprise', 'Data']
  },
  {
    name: 'GreenGrid',
    icon: '🌱',
    category: ['CleanTech', 'Seed'],
    description: 'Sustainable energy analytics for smart homes using AI and IoT to reduce power usage by 30%.',
    raised: '$800K',
    target: '$2.5M',
    investors: 19,
    teamSize: '10 people',
    location: 'Austin, TX',
    tags: ['GreenTech', 'IoT', 'B2C']
  },
  {
    name: 'EduNet',
    icon: '📚',
    category: ['EdTech', 'Series B'],
    description: 'Hybrid e-learning platform for underprivileged students with personalized AI tutors.',
    raised: '$4.5M',
    target: '$10M',
    investors: 88,
    teamSize: '30 people',
    location: 'New York, NY',
    tags: ['Education', 'AI', 'Social Impact']
  },
  {
    name: 'SecureChain',
    icon: '🔐',
    category: ['Cybersecurity', 'Series A'],
    description: 'Decentralized identity protection and fraud detection system powered by blockchain.',
    raised: '$2M',
    target: '$6M',
    investors: 34,
    teamSize: '18 people',
    location: 'Denver, CO',
    tags: ['Blockchain', 'Security', 'Enterprise']
  }
]

function FeaturedStartups() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredStartups = startups.filter(s =>
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
      <h2 class="headingg">⭐ Featured Startups</h2>

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

            <button className="details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedStartups
