import React from 'react';
import ServicesCard from './ServicesCard';
import services from './servicesData';

// Image from Firebase storage

function Services() {
  return (
    <div className="services-sec">
      <h2>Services</h2>

      <div className="services-outer-container">
        {services.map((data) => (
          <ServicesCard
            image={data.image}
            name={data.service[0].name}
            servicesList={data.service[1].servicesList}
          />
        ))}
        {/* <ServicesCard image={makeup} name="makeup" />
        <ServicesCard image={manicure} name="manicure" />
        <ServicesCard image={color} name="color" />
        <ServicesCard image={color} name="color" /> */}
      </div>
      <div className="dots">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
      </div>
    </div>
  );
}

export default Services;
