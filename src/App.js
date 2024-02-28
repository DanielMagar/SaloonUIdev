import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
   <div className='main-container'>
    <div className='container'>
      <section>
        <Header/>
      </section>
      <section>
        Place your desire Body in this section
      </section>
      <section>
        <Header/>
      </section>
    </div>
   </div>
  );
}

export default App;
