import React from 'react';
import './Analytics.css';

const Analytics = () => {
  return (
    <div className="analytics">
      <h2>Data Analytics</h2>
      <p className="section-description">Comprehensive analysis of marine biodiversity data with interactive visualizations.</p>
      
      <div className="analytics-grid">
        <div className="chart-container">
          <h3>Species Distribution</h3>
          <div className="chart">
            <div className="chart-bar" style={{height: '80%', backgroundColor: '#006994'}}>
              <span>Diatoms</span>
            </div>
            <div className="chart-bar" style={{height: '65%', backgroundColor: '#0088a9'}}>
              <span>Dinoflagellates</span>
            </div>
            <div className="chart-bar" style={{height: '50%', backgroundColor: '#00bcd4'}}>
              <span>Copepods</span>
            </div>
            <div className="chart-bar" style={{height: '40%', backgroundColor: '#4dd0e1'}}>
              <span>Coccolithophores</span>
            </div>
          </div>
        </div>
        
        <div className="chart-container">
          <h3>Sample Locations</h3>
          <div className="map-placeholder">
            <i className="fas fa-map-marked-alt"></i>
            <p>Interactive World Map</p>
          </div>
        </div>
        
        <div className="metrics">
          <h3>Key Metrics</h3>
          <div className="metric">
            <span className="metric-value">12.7%</span>
            <span className="metric-label">Biodiversity Increase</span>
          </div>
          <div className="metric">
            <span className="metric-value">12.7°C</span>
            <span className="metric-label">Average Temperature</span>
          </div>
          <div className="metric">
            <span className="metric-value">7.4</span>
            <span className="metric-label">Average pH Level</span>
          </div>
        </div>
      </div>
      
      <div className="data-export">
        <h3>Export Data</h3>
        <p>Download analyzed data in various formats for further research</p>
        <div className="export-options">
          <button className="export-button">
            <i className="fas fa-file-csv"></i> CSV
          </button>
          <button className="export-button">
            <i className="fas fa-file-excel"></i> Excel
          </button>
          <button className="export-button">
            <i className="fas fa-file-pdf"></i> PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;