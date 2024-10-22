import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">Seth Valentine</h1> {/* Title on the left */}
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume">
                Resume
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;