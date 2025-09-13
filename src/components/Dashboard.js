import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="hero">
        <h1>Marine Biodiversity AI Analysis</h1>
        <p>Advanced AI-powered microscopy system for marine organism identification and analysis</p>
        <button className="cta-button">Get Started</button>
      </div>
      
      <div className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-microscope"></i>
            <h3>AI Microscopy</h3>
            <p>Automated identification of plankton and microorganisms with deep learning algorithms</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chart-bar"></i>
            <h3>Real-time Analytics</h3>
            <p>Instant analysis and visualization of marine biodiversity data</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-database"></i>
            <h3>Sample Database</h3>
            <p>Comprehensive storage and management of marine biological samples</p>
          </div>
        </div>
      </div>
      
      <div className="stats-overview">
        <h2>System Overview</h2>
        <div className="stats-grid">
          <div className="stat">
            <span className="number">10,000+</span>
            <span className="label">Samples Analyzed</span>
          </div>
          <div className="stat">
            <span className="number">200+</span>
            <span className="label">Species Identified</span>
          </div>
          <div className="stat">
            <span className="number">99.3%</span>
            <span className="label">Accuracy Rate</span>
          </div>
          <div className="stat">
            <span className="number">24/7</span>
            <span className="label">Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;