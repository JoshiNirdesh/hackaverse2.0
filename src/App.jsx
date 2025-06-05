import React from 'react'
import Navbar from './samyak/nav/components/Navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Startup from './samyak/nav/pages/Startup'
import Deals from './samyak/nav/pages/Deals'
import Investor from './samyak/nav/pages/Investor'
import About from './samyak/nav/pages/About'
import Entrepreneur from './samyak/nav/pages/Entrepreneurbutton'
import InvestorButton from './samyak/nav/pages/Investorbutton'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/entrepreneur" element={<Entrepreneur />} />
        <Route path="/investorbutton" element={<InvestorButton />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
