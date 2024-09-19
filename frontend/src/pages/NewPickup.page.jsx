import React, { useState } from 'react';
import Footer from '../components/footer/Footer.component';
import AuthHeader from '../components/header/AuthHeader.component';
import EWastePickupForm from '../components/pickup/EwastePickup.component';
import PickupLocationMap from '../components/pickup/PickupLocation.component';

const EWastePickupFlow = () => {
  const [currentStep, setCurrentStep] = useState('form');
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
    setCurrentStep('map');
  };

  return (
    <div>
      <AuthHeader />
      {currentStep === 'form' && (
        <EWastePickupForm onSubmit={handleFormSubmit} />
      )}
      {currentStep === 'map' && <PickupLocationMap formData={formData} />}
      <Footer />
    </div>
  );
};

export default EWastePickupFlow;