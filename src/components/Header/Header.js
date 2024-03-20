import Nav from '../Reusable/Nav.js';

const woman =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fwoman1.png?alt=media&token=0a98b45a-3c13-45f3-8a32-407e78d8e2e9';

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
