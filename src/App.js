import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Testimonials from './components/Testimonials/Testimonials';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Testimonials />
      <Services />
    </div>
  );
}

export default App;
