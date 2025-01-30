import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Custom CSS for additional styling

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* SEO Meta Tags */}
      <meta name="description" content="Best Employee Management System - Track, manage, and organize employees efficiently." />
      <meta name="keywords" content="Employee Management, HR System, Business, Organization" />
      <meta name="author" content="Your Company Name" />
      <meta property="og:title" content="Employee Management System" />
      <meta property="og:description" content="Manage employees efficiently with our modern Employee Management System." />

      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1 className="display-4">Welcome to Employee Management System</h1>
          <p className="lead">Manage your employees efficiently with ease.</p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate("/employees")}>
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features text-center">
        <div className="container">
          <h2>Why Choose Our System?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <h3>Employee Tracking</h3>
                <p>Keep records of all employees in one place.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <h3>Secure & Reliable</h3>
                <p>Ensure data security with our system.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <h3>Easy to Use</h3>
                <p>Simple UI for seamless management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials text-center">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <blockquote>"This system transformed our HR operations!" - HR Manager</blockquote>
          <blockquote>"Easy to use and saves so much time!" - Small Business Owner</blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center">
        <p>© 2025 Employee Management System | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
