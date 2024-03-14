import React from 'react';
import ServicesCard from './ServicesCard';
import cut from '../../image/services/cut.jpg';
import makeup from '../../image/services/makeup.jpg';
import manycure from '../../image/services/manycure.jpg';
import color from '../../image/services/color.jpg';

function Services() {
  return (
    <div className="services-sec">
      <h2>Services</h2>
      <div className="services-outer-container">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
}

export default Services;
