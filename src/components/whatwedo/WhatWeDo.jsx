import React from 'react';
import './whatwedo.scss';

const WhatWeDo = () => {
  const handleLearnMoreClick = () => {
    alert('More details about our services coming soon!');
  };

  return (
    <div className='what-we-do'>
      <header>
        <div className='header-content'>
          <h1>Welcome to Our Business</h1>
          <p>
            We provide creative solutions that make your business stand out.
          </p>
        </div>
      </header>

      <div className='services'>
        <h2>What We Do</h2>
        <div className='service-container'>
          <div className='service-card'>
            <i className='icon fas fa-chart-line'></i>
            <h3>Business Strategy</h3>
            <p>Helping businesses develop effective strategies for success.</p>
          </div>
          <div className='service-card'>
            <i className='icon fas fa-paint-brush'></i>
            <h3>Creative Design</h3>
            <p>
              Bringing your ideas to life through innovative design solutions.
            </p>
          </div>
          <div className='service-card'>
            <i className='icon fas fa-mobile-alt'></i>
            <h3>Mobile Development</h3>
            <p>Building responsive, user-friendly mobile applications.</p>
          </div>
        </div>
      </div>

      <dic className='cta'>
        <h2>Why Choose Us?</h2>
        <button id='learnMoreBtn' onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </dic>
    </div>
  );
};

export default WhatWeDo;
