import React from 'react';
import ServicesCard from './ServicesCard';

// Image from Firebase storage
const cut =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fcut.jpg?alt=media&token=9d49a655-ee55-45a5-8e56-c00255694377';
const makeup =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fmakeup.jpg?alt=media&token=b26aa54b-67f8-4814-9437-8fa7f2d2b1fc';
const manicure =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fmanycure.jpg?alt=media&token=6a983db7-3ca6-456a-9d37-8471871f1c3f';
const color =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fcolor.jpg?alt=media&token=340626cf-f00f-4e9b-93e6-06e79a64de65';

function Services() {
  return (
    <div className="services-sec">
      <h2>Services</h2>

      <div className="services-outer-container">
        <ServicesCard image={cut} name="cut" />
        <ServicesCard image={makeup} name="makeup" />
        <ServicesCard image={manicure} name="manicure" />
        <ServicesCard image={color} name="color" />
      </div>
    </div>
  );
}

export default Services;
