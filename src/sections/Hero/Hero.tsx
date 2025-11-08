import React from 'react';
import { Button } from '../../components/Button';
import './Hero.scss';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-label="Hero section">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Build Amazing Products with Our Platform
          </h1>
          <p className="hero__subtitle">
            Streamline your workflow, boost productivity, and create exceptional
            digital experiences with our cutting-edge solution.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg" onClick={scrollToContact}>
              Get Started
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToFeatures}>
              Learn More
            </Button>
          </div>
        </div>
        <div className="hero__illustration" aria-hidden="true">
          <div className="hero__shape hero__shape--1"></div>
          <div className="hero__shape hero__shape--2"></div>
          <div className="hero__shape hero__shape--3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
