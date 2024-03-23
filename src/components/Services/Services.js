import React, { useState } from 'react';
import ServicesCard from './ServicesCard';
import services from './servicesData';

function Services() {
  const [currentPage, setCurrentPage] = useState(1);

  const change1 = () => setCurrentPage(1);
  const change2 = () => setCurrentPage(2);

  const startIndex = (currentPage - 1) * 4;
  const visibleServices = services.slice(startIndex, startIndex + 4);

  return (
    <div className="services-sec">
      <h2>Services</h2>

      <div className="services-outer-container">
        {visibleServices.map((data) => (
          <ServicesCard
            image={data.image}
            name={data.service[0].name}
            servicesList={data.service[1].servicesList}
          />
        ))}
      </div>
      <div className="dots">
        <div
          className="dot"
          style={{
            backgroundColor: currentPage === 1 ? 'rgb(247, 51, 165)' : '',
          }}
          onClick={change1}
        ></div>
        <div
          className="dot"
          style={{
            backgroundColor: currentPage === 2 ? 'rgb(247, 51, 165)' : '',
          }}
          onClick={change2}
        ></div>
      </div>
    </div>
  );
}

export default Services;
