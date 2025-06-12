import React from 'react'
import { useParams, Link } from 'react-router-dom'
import startupData from '../startupData'
import './StartupDetail.css'

function StartupDetail() {
  const { slug } = useParams()

  // Find the matching startup based on the slug
  const startup = startupData.find(
    s => s.name.toLowerCase().replace(/\s+/g, '-') === slug
  )

  if (!startup) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Startup not found</h2>
        <Link to="/startups" className="back-link">← Back to Startups</Link>
      </div>
    )
  }

  const parseMoney = str => parseFloat(str.replace(/[^0-9.]/g, '').replace(/,/g, ''));

const completionPercent = Math.round(
  (parseMoney(startup.raised) / parseMoney(startup.target)) * 100
);


  return (
    <div className="startup-detail">
      <Link to="/startups" className="back-link">← Back to Startups</Link>

      <div className="detail-header">
        <div className="startup-icon">{startup.icon}</div>
        <h1 className="startup-name">
          {startup.name} <span className="star">★</span>
        </h1>
        <p className="subtitle">{startup.description}</p>

        <div className="detail-tags">
          {startup.category.map((cat, i) => (
            <span key={i} className="badge">{cat}</span>
          ))}
        </div>

        <div className="location-info">
          {startup.location} • {startup.teamSize}
        </div>
      </div>

      <div className="funding-info">
        <div>
          <strong>{startup.raised}</strong><br />Raised
        </div>
        <div>
          <strong>{startup.target}</strong><br />Target
        </div>
        <div>
          <strong>{startup.investors}</strong><br />Investors
        </div>
        <div>
          <strong>{completionPercent}%</strong><br />Complete
        </div>
      </div>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${completionPercent}%` }}
        />
      </div>

      <div className="about-section">
        <h2>About {startup.name}</h2>
        <p>{startup.description}</p>
        <p><strong>Tags:</strong> {startup.tags.join(', ')}</p>
      </div>
    </div>
  )
}

export default StartupDetail
