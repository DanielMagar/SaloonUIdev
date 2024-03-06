import nick from '../../image/testimonials/nick.jpg';
import { IoIosStar } from 'react-icons/io';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-heading">
        <h1>Testimonials </h1>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-card">
          <div className="testimonials-pic">
            <img src={nick} alt="nick" />
          </div>
          <div className="testimonials-name">
            <h3>NICK</h3>
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
        </div>

        {/* 2nd */}

        <div className="testimonials-card">
          <div className="testimonials-pic">
            <img src={nick} alt="nick" />
          </div>
          <div className="testimonials-name">
            <h3>NICK</h3>
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
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
