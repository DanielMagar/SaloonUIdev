import TestimonialsCard from './TestimonialsCard';
import { useState } from 'react';

// Image from Firebase storage
const amar =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Famar.jpg?alt=media&token=ce3106ce-f445-4462-840f-fad6198d5aae';

const kay =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fkay.jpg?alt=media&token=b32e8308-5d97-4cd6-b932-c867abe3a31e';

const mick =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fmick.jpg?alt=media&token=980fbafb-fb4c-47aa-8aba-d1d507f9f951';

const nick =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fnick.jpg?alt=media&token=0729598f-f3bb-417b-b371-c169b81013ae';

const rin =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Frin.jpg?alt=media&token=2dea6467-a386-425c-b1f6-4f5e4ead6d18';

const sara =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fsara.jpg?alt=media&token=4b3a9439-3e24-45c7-824a-1dff1f31bdd4';

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

  // forward crausel
  function rscroll() {
    setbtnvalue(1020);

    // for tablet
    if (window.innerWidth <= 1200) {
      setbtnvalue(920);
    }

    // for small tablet
    if (window.innerWidth <= 768) {
      if (btnvalue === 0) {
        setbtnvalue(560);
      }
      if (btnvalue === 560) {
        setbtnvalue(1120);
      }
      if (btnvalue === 1120) {
        setbtnvalue(1120);
      }
    }

    // for small tablet
    if (window.innerWidth <= 564) {
      if (btnvalue === 0) {
        setbtnvalue(280);
      }
      if (btnvalue === 280) {
        setbtnvalue(560);
      }
      if (btnvalue === 560) {
        setbtnvalue(840);
      }
      if (btnvalue === 840) {
        setbtnvalue(1120);
      }
      if (btnvalue === 1120) {
        setbtnvalue(1400);
      }
      if (btnvalue === 1400) {
        setbtnvalue(1400);
      }
    }
  }

  function lscroll() {
    setbtnvalue(0);

    if (window.innerWidth <= 768) {
      if (btnvalue === 560) {
        setbtnvalue(0);
      }
      if (btnvalue === 1120) {
        setbtnvalue(560);
      }
    }

    if (window.innerWidth <= 564) {
      if (btnvalue === 1400) {
        setbtnvalue(1120);
      }

      if (btnvalue === 1120) {
        setbtnvalue(840);
      }

      if (btnvalue === 840) {
        setbtnvalue(560);
      }

      if (btnvalue === 560) {
        setbtnvalue(280);
      }

      if (btnvalue === 280) {
        setbtnvalue(0);
      }
    }
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
