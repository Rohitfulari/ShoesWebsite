import React from "react";
import "./About.css";

const About = () => {
  return (
  <>
  
      <header>
        <h1>ӄʀɨֆɦ</h1>
      </header>

      <nav className="navbar">
        
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/reg">Login</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      
    <div className="about-container">

      <section className="about-section">
        <img src="https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHwwfDB8fHww" alt="Welcome" style={{marginTop:"5%"}}/>
        <div className="about-section-text">
          <h2>Welcome to KRISH STORE</h2>
          <p>
            At <strong>KRISH STORE</strong>, we’re passionate about bringing you the finest footwear that combines style, comfort, and quality.
            Our mission is to help you step out in confidence, no matter the occasion.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-text">
          <h2>Who We Are</h2>
          <p>
            We are a team of shoe enthusiasts dedicated to curating a collection of trendy, durable, and affordable footwear.
            From casual sneakers to formal shoes, we have something for everyone.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Who We Are" style={{marginTop:"5%"}} />
      </section>

      <section className="about-section">
        <img src="https://images.unsplash.com/photo-1569664665343-eb9b3948bdbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzJTIwc3RvcmV8ZW58MHwwfDB8fHww" alt="Our Promise" style={{marginTop:"5%"}}/>
        <div className="about-section-text">
          <h2>Our Promise</h2>
          <ul>
            <li>
              <strong>Unmatched Quality</strong>: We partner with trusted brands and manufacturers to ensure every shoe meets our high standards.
            </li>
            <li>
              <strong>Affordable Prices</strong>: Style shouldn’t break the bank. We’re committed to offering the best value for your money.
            </li>
            <li>
              <strong>Customer Satisfaction</strong>: Your happiness is our top priority. Our customer support team is always here to help.
            </li>
          </ul>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
