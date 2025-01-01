import React from "react";
import "./Contact.css";

const Contact = () => {
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
      
    
    <div className="contact-container">
      

      <section className="contact-section">
        <img src="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Contact Us"  style={{marginTop:"5%"}}/>
        <div className="contact-section-text">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? We’re here to help. Reach out to us through any of the methods below, and our team will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <img src=""  style={{marginLeft:"5%"}}/>
        <div className="contact-section-text">
          <h2>Contact Details</h2>
          <ul>
            <li>
              <strong>Email:</strong> support@yourwebsite.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Address:</strong> 123 Shoe Lane, Fashion City, USA
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-section">
        <img src="https://images.pexels.com/photos/6684795/pexels-photo-6684795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Feedback"style={{marginTop:"5%"}} />
        <div className="contact-section-text" style={{marginLeft:"10%"}}>
          <h2>We Value Your Feedback</h2>
          <p>
            Your opinions and suggestions help us improve. Share your thoughts with us at any time. We look forward to hearing from you!
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
