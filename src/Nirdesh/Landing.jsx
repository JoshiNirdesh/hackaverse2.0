import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./landing.css";
import { AiFillBook } from "react-icons/ai";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);

  return (
    <>
      <div className="main">
        <div className="first-section" data-aos="fade-right">
          <div className="h1-content">
            <span className="paragraph-1">
              Trusted by 10,000+ investors worldwide
            </span>
            <div className="heading">
              <h1 className="heading-1">Where visionary startups</h1>
              <h1 className="heading-1">meet strategic capital</h1>
            </div>

            <div className="paragraph-2">
              <p>
                VentureX connects exceptional founders with the right investors
                through our
              </p>
              <p>
                AI-powered matching platform, accelerating growth and
                innovation.
              </p>
            </div>
            <button className="button-1">Start your journey</button>

            <div className="main-btm">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div className="bottom-1" key={index}>
                    <div className="btm1">+1500</div>
                    <div className="btm2">Active investor</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="main-second-section">
        <div className="second-section" data-aos="fade-up">
          <div className="second-content">
            <h1 className="second-heading">Dual-Sided Ecosystem</h1>
            <p className="second-content1">
              A platform designed to serve both startups seeking funding and
              investors looking
            </p>
            <p className="second-content1">for opportunities</p>
          </div>
        </div>

        <div className="second-content2">
          {/* Left Block */}
          <div className="sec-1" data-aos="fade-left">
            <div className="sec-1-con">
              <AiFillBook size={35} />
              <h2>For Visionary Startups</h2>
            </div>
            <p className="sec-1-par">
              Accelerate your growth trajectory with direct access to the right
              investors for your stage and vision.
            </p>

            <div className="con1">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div className="in1" key={index}>
                    <AiFillBook size={25} />
                    <div className="in1-con">
                      <p>AI-Powered Investor Discovery</p>
                      <p className="sec-1-par1">
                        Find investors who align with your vision and stage
                      </p>
                    </div>
                  </div>
                ))}
              <button className="sec-2-btn">Launch your fund</button>
            </div>
          </div>

          {/* Right Block */}
          <div className="sec-1" data-aos="fade-right">
            <div className="sec-1-con">
              <AiFillBook size={35} />
              <h2>For Visionary Startups</h2>
            </div>
            <p className="sec-1-par">
              Accelerate your growth trajectory with direct access to the right
              investors for your stage and vision.
            </p>

            <div className="con1">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div className="in1" key={index}>
                    <AiFillBook size={25} />
                    <div className="in1-con">
                      <p>AI-Powered Investor Discovery</p>
                      <p className="sec-1-par1">
                        Find investors who align with your vision and stage
                      </p>
                    </div>
                  </div>
                ))}
              <button className="sec-2-btn">Launch your fund</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
