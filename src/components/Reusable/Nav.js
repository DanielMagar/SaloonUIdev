import { CgProfile } from 'react-icons/cg';
// import logo from '../../image/header/white-logo.png';

function Nav() {
  return (
    <>
      {/* nav bar */}
      <nav className="nav">
        <div className="logo-box">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Flogo%20(2).png?alt=media&token=132fa1d3-16ef-4359-a6b7-57139aa808ee"
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
