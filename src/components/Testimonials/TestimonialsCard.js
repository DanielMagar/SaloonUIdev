import double from '../../image/testimonials/double.png';
import { IoIosStar } from 'react-icons/io';

function TestimonialsCards({ objectData, value }) {
  return (
    <>
      {objectData.map((data, index) => (
        <div
          className="testimonials-card"
          style={{
            left: `${index * 340}px`,
            transform: `translateX(-${value}px)`,
          }}
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
