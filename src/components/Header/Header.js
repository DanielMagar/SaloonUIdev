import Nav from '../Reusable/Nav.js';
import woman from '../../image/header/woman.png';
function Header() {
  return (
    <header className="header">
      <Nav />
      {/* main */}
      <main className="main">
        <div className="main-line">
          <p className="greet">WelCome to lotus saloon</p>
          <p className="headline">Rejuvenated Body & Soul</p>
          <p className="headline-des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta
            repellendus porro, beatae nisi id.
          </p>
          <div className="book">Book an appointment →</div>
        </div>
        <div className="headerimg">
          <img src={woman} alt="woman" />
        </div>
      </main>
    </header>
  );
}

export default Header;
