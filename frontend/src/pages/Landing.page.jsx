import React from 'react';
import Footer from '../components/footer/Footer.component';
import Header from '../components/header/Header.component';
const LandingPage = () => {
  return (
    <div style={styles.container}>
      <Header />
      <header style={styles.header}>
        <h1 style={styles.heading}>E-Waste Recycling Solutions</h1>
        <p style={styles.subHeading}>
          Responsible and eco-friendly e-waste disposal for a sustainable future
        </p>
        <button style={styles.ctaButton}>Get Started</button>
      </header>

      <section style={styles.servicesSection}>
        <h2 style={styles.sectionHeading}>Our Services</h2>
        <div style={styles.servicesList}>
          <div style={styles.serviceItem}>
            <h3>Recycling E-Waste</h3>
            <p>
              We recycle old electronics and devices to minimize harmful
              environmental impact.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3>Secure Data Disposal</h3>
            <p>
              Safely dispose of your electronics with our secure data wiping and
              destruction services.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3>Collection Services</h3>
            <p>
              Convenient collection of e-waste from your home or office, helping
              you reduce your carbon footprint.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: '#333',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#e8f5e9'
  },
  header: {
    backgroundColor: '#2e7d32',
    color: 'white',
    padding: '50px 20px'
  },
  heading: {
    fontSize: '48px',
    marginBottom: '10px'
  },
  subHeading: {
    fontSize: '20px',
    marginBottom: '20px'
  },
  ctaButton: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#388e3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  servicesSection: {
    padding: '40px 20px',
    backgroundColor: '#f1f8e9'
  },
  sectionHeading: {
    fontSize: '36px',
    marginBottom: '20px'
  },
  servicesList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  serviceItem: {
    width: '30%',
    minWidth: '250px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  ctaSection: {
    padding: '40px 20px',
    backgroundColor: '#2e7d32', // Consistent dark green background
    color: 'white'
  }
};

export default LandingPage;
