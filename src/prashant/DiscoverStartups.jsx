
import featuredStartups from './prashant/featuredStartups'
import './styles.css'

function DiscoverStatus() {
  return (
    <div className="DiscoveStartups">
      <h1 className="title">Discover Startups</h1>
      <p className="subtitle">Explore high-potential startups seeking investment</p>
      <featuredStartups />
    </div>
  )
}

export default DiscoverStatus
