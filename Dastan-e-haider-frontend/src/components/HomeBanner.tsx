import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/homeBanner.scss"
import logo from '../assets/images/logo.png';
import homeBanner from '../assets/images/haider-home-banner.png';

const HomeBanner = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='home-banner'>
        <nav>
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
          </nav>
          <div className='banner-content'>
                <div className='banner-logo'>
                    <Link to="/" className="home-logo">
                        <img src={logo} alt="Home Logo" />
                    </Link>
                </div>

                <div className='banner-ayat'>
                    <p>اَلَا بِذِکْرِ اللہِ تَطْمَئِنُّ الْقُلُوۡبُ</p>
                    <span>
                      Unquestionably, by the remembrance of Allah hearts <br />
                      are assured.
                  </span>
                </div>

                <div className='banner-img'>
                    <img src={homeBanner} alt="Home Banner" />
                </div>
                <div className='gradient-circle'></div>
            </div>
    </div>
  )
}

export default HomeBanner
