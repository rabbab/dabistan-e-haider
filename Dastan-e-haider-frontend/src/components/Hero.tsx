import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/hero.scss"
import logo from '../assets/images/sm-logo.png';
import bannerImage from '../assets/images/haider-home-banner.png';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='home-banner'>
            <div className='header'>
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
                        <div data-aos="fade-down" className='banner-logo'>
                                <Link to="/" className="home-logo">
                                    <img src={logo} alt="Home Logo" />
                                </Link>
                        </div>
                        <ul data-aos="fade-down" className={menuOpen ? "open" : ""}>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/teacher">Teacher</NavLink></li>
                            <li><NavLink to="/courses">Courses</NavLink></li>
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                            <li><NavLink to="/books">Books</NavLink></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                        </ul>
                        <div data-aos="fade-down" className="donate-us">
                                <div className="expandable-div"></div>
                                <span> Donate us</span>
                        </div>
                </nav>
            </div>
          <div className={`banner-content ${menuOpen ? 'overlay' : ''}`}>
                <div data-aos="fade-up-right" className='banner-ayat'>
                    <p>اَلَا بِذِکْرِ اللہِ تَطْمَئِنُّ الْقُلُوۡبُ</p>
                    <span>
                      Unquestionably, by the remembrance of Allah hearts 
                      are assured.
                  </span>
                </div>

                <div className='banner-img'>
                    <img src={bannerImage} alt="Home Banner" />
                </div>
                <div className='gradient-circle'></div>
            </div>
    </div>
  )
}

export default Hero
