import React from "react";
import "./landing.css";
import "animate.css/animate.min.css";

const Landing = () => {
  return (
    <>
      <div className="main animate__animated animate__fadeInRight animate__slow">
        <div className="first-section">
          <div className="h1-content">
            <span className="paragraph-1">
              Trusted by 10,000+ investors worldwide
            </span>
            <div className="heading ">
              <h1 className="heading-1">Where visionary startups</h1>
              <h1 className="heading-1">meet strategic capital</h1>
            </div>

            <p className="paragraph-2">
              <p>
                VentureX connects exceptional founders with the right investors
                through our
              </p>
              <p>
                AI-powered matching platform, accelerating growth and
                innovation.
              </p>
            </p>
            <button className="button-1">Start you journey</button>

            <div className="main-btm">
              <div className="bottom-1">
                <div className="btm1">+1500</div>
                <div className="btm2">Active investor</div>
              </div>
              <div className="bottom-1">
                <div className="btm1">+1500</div>
                <div className="btm2">Active investor</div>
              </div>
              <div className="bottom-1">
                <div className="btm1">+1500</div>
                <div className="btm2">Active investor</div>
              </div>
              <div className="bottom-1">
                <div className="btm1">+1500</div>
                <div className="btm2">Active investor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
