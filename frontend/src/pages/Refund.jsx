import React from 'react';
import '../styles/Refund.css';

const Refund = () => {
  return (
    <div className="refund-offer">
      <div className="header">
        <h1>Don't miss out on this <span className="highlight">limited-time opportunity</span> to learn for <span className="highlight">Free!</span></h1>
      </div>
      <div className="offer-box">
        <div className="offer-details">
          <div className="seats-left">20 Seats Left</div>
          <div className="refund-offer-text">100% Refund Offer 😎</div>
          <div className="time-left">Offer ends in: 10:00 Mins</div>
        </div>
      </div>
      <div className="steps">
        <h3>How does it work?</h3>
        <div className="step-container">
          <div className="step">
            <div className="step-number">Step 1</div>
            <div className="step-details">
              <h4>Enroll into your favorite course for only ₹1,499</h4>
              <p>Start Learning with Lifetime Course Access.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">Step 2</div>
            <div className="step-details">
              <h4>Complete Course & Assignments within 2 Years!</h4>
              <p>Finish the course within 2 Years to Qualify for Refund.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">Step 3</div>
            <div className="step-details">
              <h4>Receive 100% Refund upon completion</h4>
              <p>Upon Course Completion within 2 Years, Get Your ₹1,499 Back.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
