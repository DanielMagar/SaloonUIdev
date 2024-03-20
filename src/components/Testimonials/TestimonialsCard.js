import React, { useState, useEffect } from 'react';
import { IoIosStar } from 'react-icons/io';
const double =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fdouble.png?alt=media&token=f442658e-97d9-4687-b770-5751ff8516ba';

function TestimonialsCards({ objectData, value }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getCardStyles = (index) => {
    let styles = {
      left: `${index * 340}px`,
      transform: `translateX(-${value}px)`,
    };

    // Adjust styles for tablets (max-width: 1200px)
    if (windowWidth <= 1200) {
      styles.left = `${index * 310}px`;
      styles.transform = `translateX(-${value}px)`;
    }

    // Adjust styles for small tab (max-width: 768px)
    if (windowWidth <= 768) {
      styles.left = `${index * 280}px`;
      styles.transform = `translateX(-${value}px)`;
    }
    // Adjust styles for mobile (max-width: 564px)
    if (windowWidth <= 564) {
      styles.left = `${index * 280}px`;
      styles.transform = `translateX(-${value}px)`;
    }

    return styles;
  };

  return (
    <>
      {objectData.map((data, index) => (
        <div
          className="testimonials-card"
          // style={{
          //   left: `${index * 340}px`,
          //   transform: `translateX(-${value}px)`,

          ////// DIRECT MEDIA QUERY NOT WORKING  //////
          //   // Responsive styling for screens smaller than or equal to 1200px (tablet)
          //   '@media screen and (max-width: 1200px)': {
          //     left: `${index * 210}px`,
          //     transform: `translateX(-${value - 100}px)`,
          //   },

          //   // Responsive styling for screens smaller than or equal to 768px (mobile)
          //   '@media screen and (max-width: 768px)': {
          //     left: `${index * 280}px`,
          //     transform: `translateX(-${value - 150}px)`,
          //   },
          // }}
          style={getCardStyles(index)}
        >
          <div className="testimonials-pic">
            <img src={data.image} alt="nick" />
          </div>
          <div className="testimonials-name">
            <h3>{data.name}</h3>
          </div>
          <div className="rating">
            <i>
              <IoIosStar size={15} />
            </i>
            <i>
              <IoIosStar size={25} />
            </i>
            <i>
              <IoIosStar size={35} />
            </i>
            <i>
              <IoIosStar size={25} />
            </i>
            <i>
              <IoIosStar size={15} />
            </i>
          </div>
          <div className="testimonials-sub">
            <h3>Fasntastic Product</h3>
          </div>
          <div className="testimonials-review">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              perferendis ipsum perspiciatis
            </p>
          </div>
          <div className="testimonials-qoute">
            <img src={double} alt="qoute symbol" />
          </div>
        </div>
      ))}
    </>
  );
}

export default TestimonialsCards;
