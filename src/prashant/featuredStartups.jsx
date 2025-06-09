
const startups = [
  {
    name: 'TechFlow AI',
    category: ['AI/ML', 'Series A'],
    description: 'AI-powered workflow automation platform that helps enterprises streamline their operations and increase productivity by 40%.',
    raised: '$2.5M',
    target: '$5M',
    investors: 45,
    teamSize: '12 people',
    location: 'San Francisco, CA',
    tags: ['Enterprise', 'Automation', 'SaaS']
  },
  {
    name: 'HealthTech Pro',
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
    category: ['SaaS', 'Seed'],
    description: 'Advanced data visualization platform helping Fortune 500 companies make data-driven decisions faster.',
    raised: '$1.2M',
    target: '$3M',
    investors: 28,
    teamSize: '6 people',
    location: 'Seattle, WA',
    tags: ['Analytics', 'Enterprise', 'Data']
  }
]

function FeaturedStartups() {
  return (
    <div className="featured-section">
      <h2> Featured Startups</h2>
      <div className="card-container">
        {startups.map((startup, index) => (
          <div key={index} className="card">
            <h3>{startup.name}</h3>
            <div className="badges">
              {startup.category.map((cat, i) => (
                <span key={i} className="badge">{cat}</span>
              ))}
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
