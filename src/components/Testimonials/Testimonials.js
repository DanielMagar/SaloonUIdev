import TestimonialsCard from './TestimonialsCard';
import nick from '../../image/testimonials/nick.jpg';
import kay from '../../image/testimonials/kay.jpg';
import amar from '../../image/testimonials/amar.jpg';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-heading">
        <h1>Testimonials </h1>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-left-arrow">
          <p> &lt;</p>
        </div>
        <TestimonialsCard image={nick} name="nick" />
        <TestimonialsCard image={kay} name="kay" />
        <TestimonialsCard image={amar} name="amar" />
        <div className="testimonials-right-arrow">
          <p>&gt;</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
