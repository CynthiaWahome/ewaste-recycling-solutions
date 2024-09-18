import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer.component';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>404 - Page Not Found</h1>
        <p style={styles.subHeading}>
          Oops! It looks like this page has been recycled.
        </p>
      </header>

      <section style={styles.contentSection}>
        <p style={styles.message}>
          Don't worry, we're still committed to recycling e-waste, not web
          pages!
        </p>
        <p style={styles.message}>
          Let's get you back on track to a more sustainable future.
        </p>
        <button onClick={handleGoHome} style={styles.ctaButton}>
          Return to Home
        </button>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    color: '#E0E0E0',
    textAlign: 'center',
    backgroundColor: '#1c1c1c', // Dark background to match the footer
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: '#333',
    color: '#FF9800', // Accent color
    padding: '60px 20px',
    borderBottom: '2px solid #FF9800'
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#ffffff'
  },
  subHeading: {
    fontSize: '20px',
    marginBottom: '20px',
    color: '#E0E0E0'
  },
  contentSection: {
    padding: '40px 20px',
    backgroundColor: '#2b2b2b',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#E0E0E0'
  },
  ctaButton: {
    padding: '12px 25px',
    fontSize: '18px',
    backgroundColor: '#FF9800',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
};

export default PageNotFound;
