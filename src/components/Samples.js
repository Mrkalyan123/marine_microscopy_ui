import React from 'react';
import './Samples.css';

const Samples = () => {
  const sampleData = [
    {
      id: 1,
      name: "Coastal Plankton",
      date: "2023-08-15",
      location: "Pacific Ocean",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      organisms: 247,
      species: 12
    },
    {
      id: 2,
      name: "Deep Sea Microbes",
      date: "2023-08-10",
      location: "Atlantic Ocean",
      image: "https://images.unsplash.com/photo-1589492477827-5c6cdcb9d354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      organisms: 183,
      species: 9
    },
    {
      id: 3,
      name: "Coral Reef Biodiversity",
      date: "2023-08-05",
      location: "Caribbean Sea",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      organisms: 421,
      species: 18
    }
  ];

  return (
    <div className="samples">
      <h2>Marine Samples Database</h2>
      <p className="section-description">Explore our collection of marine biodiversity samples from various locations and ecosystems.</p>
      
      <div className="samples-grid">
        {sampleData.map(sample => (
          <div key={sample.id} className="sample-card">
            <div className="sample-image">
              <img src={sample.image} alt={sample.name} />
              <div className="sample-overlay">
                <button className="view-button">View Analysis</button>
              </div>
            </div>
            <div className="sample-info">
              <h3>{sample.name}</h3>
              <p><i className="fas fa-calendar"></i> {sample.date}</p>
              <p><i className="fas fa-map-marker-alt"></i> {sample.location}</p>
              <div className="sample-stats">
                <div className="stat">
                  <span className="value">{sample.organisms}</span>
                  <span className="label">Organisms</span>
                </div>
                <div className="stat">
                  <span className="value">{sample.species}</span>
                  <span className="label">Species</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="samples-actions">
        <button className="action-button">
          <i className="fas fa-plus"></i> Add New Sample
        </button>
        <button className="action-button secondary">
          <i className="fas fa-download"></i> Export Data
        </button>
      </div>
    </div>
  );
};

export default Samples;