import homeBanner from '../../assets/images/haider-home-banner.png';
import "./HeroSection.scss";

const HeroSection = () => {
    return (
      <div className="hero-section">
        <div className="banner-content">
          <div data-aos="fade-up-right" className="banner-ayat">
            <p>اَلَا بِذِکْرِ اللہِ تَطْمَئِنُّ الْقُلُوۡبُ</p>
            <span>
              Unquestionably, by the remembrance of Allah hearts 
              are assured.
            </span>
          </div>
          <img className="banner-img" src={homeBanner} alt="Home Banner" />
        </div>
        <div className="gradient-circle"></div>
      </div>
    );
  };

export default HeroSection
