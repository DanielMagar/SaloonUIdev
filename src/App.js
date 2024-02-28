import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/main';
function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
        <Main />
      </header>
    </div>
  );
}

export default App;
