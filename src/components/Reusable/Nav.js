import { CgProfile } from 'react-icons/cg';
import logo from '../../image/header/white-logo.png';

function Nav() {
  return (
    <>
      {/* nav bar */}
      <nav className="nav">
        <div className="logo-box">
          <img src={logo} alt="header_background" />
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
