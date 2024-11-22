import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './Books.scss'; 

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Books = () => {
  return (
    <div className="book-section">
      <div className="book-section-header">
        <h2>Explore Our Books</h2>
        <p>Discover our collection of curated books</p>
      </div>
      <div className="book-carousel">
        <Slider {...settings}>
          <div>
            <a href="https://example.com/book1" target="_blank" rel="noopener noreferrer">
              <img src="book1.jpg" alt="Book 1" />
            </a>
          </div>
          <div>
            <a href="https://example.com/book2" target="_blank" rel="noopener noreferrer">
              <img src="book2.jpg" alt="Book 2" />
            </a>
          </div>
          <div>
            <a href="https://example.com/book3" target="_blank" rel="noopener noreferrer">
              <img src="book3.jpg" alt="Book 3" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Books;
