import React from 'react';
import '../styles/Overview.css';

const Overview = () => {
  return (
    <div className="course-landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">

          <div className='iit' style={{ border: "2px solid #FFA50B", width: "250px", padding: "10px", fontSize: "small", borderRadius:"20px" }}>
            <h3 style={{ textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"small", gap:"10px" }}><img style={{width:"20px"}} src='/images/cap.png'alt='cap'/>  An IIT Delhi Alumni Initiative</h3>
          </div>

          <div className="hero-text-wrapper">
            <h1>
              Become an Expert in the field of <span style={{ color: '#992E9D' }}>Data Science with 6 Courses</span>
            </h1>
            <p>
              A specially crafted Tech Kickstarter, <span style={{ fontWeight: "bold" }}>with 5+ extensive online courses.</span>
            </p>
            
            <div class="extra" style={{marginTop:"-10px"}}>
                  <div class="course-hero">
                    <div class="course-hero-container">
                      <button>Personal Mentorship</button>
                      <button>Internship Assistance</button>
                      <button>Industry Certified Courses</button>
                    </div>
                  </div>
                </div>

            <div className="hero-buttons">
              <button>Enroll Now</button>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics-section">
        <div className="statistics-container">
          <div className="stat-card">
            <span>24</span>
            <p>Courses</p>
          </div>
          <div className="stat-card">
            <img src='ngfdf.png' alt='dhf'/>
            <span>30k+</span>
            <p>Learners</p>
          </div>
          <div className="stat-card">
            <span>100k+</span>
            <p>Doubts Solved</p>
          </div>
          <div className="stat-card">
            <span>10k+</span>
            <p>Student Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
