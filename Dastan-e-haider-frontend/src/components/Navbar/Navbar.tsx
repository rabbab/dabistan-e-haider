import "./Navbar.scss";
import logo from '../../assets/images/sm-logo.png';
import { NavLink } from 'react-router-dom'
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className="nav-wrapper">
        <div className="nav-content">
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                    // Render cross icon only when the menu is open
                    <div className="cross-icon">✕</div>
                    ) : (
                    // Render hamburger menu only when the menu is closed
                    <>
                        <span></span>
                        <span></span>
                        <span></span>
                    </>
                    )}
                </div>
                <img className="logo" src={logo}/>
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/teacher">Teacher</NavLink></li>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li>
                    <div className="donate-us">
                        <div className="expandable-div"></div>
                        <span> Donate us</span>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
