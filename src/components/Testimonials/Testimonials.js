import TestimonialsCard from './TestimonialsCard';
import nick from '../../image/testimonials/nick.jpg';
import kay from '../../image/testimonials/kay.jpg';
import amar from '../../image/testimonials/amar.jpg';
import mick from '../../image/testimonials/mick.jpg';
import rin from '../../image/testimonials/rin.jpg';
import sara from '../../image/testimonials/sara.jpg';
import { useState } from 'react';

function Testimonials() {
  const objectData = [
    { image: nick, name: 'nick' },
    { image: kay, name: 'kay' },
    { image: amar, name: 'amar' },
    { image: mick, name: 'mick' },
    { image: rin, name: 'rin' },
    { image: sara, name: 'sara' },
  ];

  const [btnvalue, setbtnvalue] = useState(0);

  function rscroll() {
    setbtnvalue(1020);
  }
  function lscroll() {
    setbtnvalue(0);
  }

  return (
    <section className="testimonials">
      <div className="testimonials-heading">
        <h1>Testimonials </h1>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-left-arrow">
          <p onClick={lscroll}> &lt;</p>
        </div>
        <div className="testimonials-slider">
          <TestimonialsCard objectData={objectData} value={btnvalue} />
        </div>
        <div className="testimonials-right-arrow">
          <p onClick={rscroll}>&gt;</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
