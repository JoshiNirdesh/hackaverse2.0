import React from 'react'
import { useState } from "react";
import "./App.css";
import Landing from "./Nirdesh/Landing";
import Navbar from './samyak/nav/components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Startups from './prashant/DiscoverStartups' 
import StartupDetail from './prashant/details/StartupDetail'
import Deals from './samyak/nav/pages/Deals'
import Investors from './samyak/nav/pages/Investors'
import About from './samyak/nav/pages/About'
import Signinbutton from './samyak/nav/pages/Loginbutton'
import Registerbutton from './samyak/nav/pages/Registerbutton'
import InvestorRegistration from './samyak/nav/pages/Investorregistration';
import Startupregistration from './samyak/nav/pages/Startupregistration';

function App() {
  return (
    <div className="App">
    <BrowserRouter>     
      <Navbar />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/startups/:slug" element={<StartupDetail />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/investor" element={<Investors />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signinbutton />} />
            <Route path="/register" element={<Registerbutton />} />
            <Route path="/register/investor" element={<InvestorRegistration />} />
            <Route path="/register/startup" element={<Startupregistration />} />
            {/* <Route path="/register/startup" element={<Start />} /> */}
        </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
