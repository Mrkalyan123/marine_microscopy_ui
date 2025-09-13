import React, { useRef } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Samples from './components/Samples';
import Analytics from './components/Analytics';
import Contact from './components/Contact';

function App() {
  const dashboardRef = useRef(null);
  const samplesRef = useRef(null);
  const analyticsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <i className="fas fa-water"></i>
          <span>MarineBio AI</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection(dashboardRef)}>Dashboard</button>
          <button onClick={() => scrollToSection(samplesRef)}>Samples</button>
          <button onClick={() => scrollToSection(analyticsRef)}>Analytics</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </nav>
      </header>

      <main>
        <section ref={dashboardRef}>
          <Dashboard />
        </section>
        
        <section ref={samplesRef}>
          <Samples />
        </section>
        
        <section ref={analyticsRef}>
          <Analytics />
        </section>
        
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;