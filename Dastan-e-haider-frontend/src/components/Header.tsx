import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
          <Link to="/" className="logo">
            Website
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      );
}

export default Header