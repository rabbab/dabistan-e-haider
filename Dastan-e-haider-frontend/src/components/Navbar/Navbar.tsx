import "./Navbar.css";
import logo from '../../assets/images/sm-logo.png';
import { NavLink } from 'react-router-dom'
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className="nav-wrapper">
        <div className="nav-content">
            <img className="logo" src={logo}/>
            <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
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
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink className="menu-item" to="/home">Home</NavLink></li>
                <li><NavLink className="menu-item" to="/about">About</NavLink></li>
                <li><NavLink className="menu-item" to="/teacher">Teacher</NavLink></li>
                <li><NavLink className="menu-item" to="/courses">Courses</NavLink></li>
                <li><NavLink className="menu-item" to="/blogs">Blogs</NavLink></li>
                <li><NavLink className="menu-item" to="/books">Books</NavLink></li>
                <li><NavLink className="menu-item" to="/contact">Contact Us</NavLink></li>

                <button className="donate-us" onClick={()=> {}}>
                    Donate Us
                </button>
            </ul>
           
            
            {/* <button className="menu-btn" onClick={() => {}}>
                <span className={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>menu</span>
            </button> */}
        </div>
    </nav>
    </>
  )
}

export default Navbar
