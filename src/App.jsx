import React from 'react'
import { useState } from "react";
import "./App.css";
import Landing from "./Nirdesh/Landing";
import Navbar from './samyak/nav/components/Navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Startups from './samyak/nav/pages/Startups'
import Deals from './samyak/nav/pages/Deals'
import Investors from './samyak/nav/pages/Investors'
import About from './samyak/nav/pages/About'
import Loginbutton from './samyak/nav/pages/Loginbutton'
import Registerbutton from './samyak/nav/pages/Registerbutton'
import InvestorRegistration from './samyak/nav/pages/Investorregistration';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/investor" element={<Investors />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Loginbutton />} />
            <Route path="/register" element={<Registerbutton />} />
            <Route path="/register/investor" element={<InvestorRegistration />} />
            {/* <Route path="/register/startup" element={<Start />} /> */}
        </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
