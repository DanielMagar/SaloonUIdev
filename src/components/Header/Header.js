import Nav from '../Reusable/Nav.js';

function Header() {
  return (
    <header className="header">
      <Nav />
      {/* main */}
      <main className="main">
        {/* router / anchor tag replace with p tag */}
        <p className="greet">WelCome to lotus saloon</p>
        <p className="headline">Rejuvenated Body & Soul</p>
        <p className="headline-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta
          repellendus porro, beatae nisi id.
        </p>
        <div className="book">Book an appointment →</div>
      </main>
    </header>
  );
}

export default Header;
