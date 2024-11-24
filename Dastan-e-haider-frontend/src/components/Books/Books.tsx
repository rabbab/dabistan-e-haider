import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './Books.scss';
import { books } from '../../assets/book';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide:2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
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
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-image-wrapper">
                <div className="book-image-inner">
                  <img
                    src={book.imgFront}
                    alt="Front Cover"
                    className="book-image-front"
                  />
                  <img
                    src={book.imgBack}
                    alt="Back Cover"
                    className="book-image-back"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Books;
