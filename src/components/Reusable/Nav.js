import { CgProfile } from 'react-icons/cg';

function Nav() {
  return (
    <>
      {/* nav bar */}
      <nav className="nav">
        <div className="logo-box">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Flogo.png?alt=media&token=0ef04a68-89eb-435b-bb69-503336dcf431"
            alt="header_background"
          />
        </div>

        {/* replace by router */}
        <div className="menu">
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="logs">
          <CgProfile size={35} />
        </div>
      </nav>
    </>
  );
}

export default Nav;
