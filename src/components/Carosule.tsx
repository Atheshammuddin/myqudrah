import { Carousel } from "react-bootstrap";

import image1 from "../assets/images/3.jpeg";
import image2 from "../assets/images/4.jpg";
import image3 from "../assets/images/7.jpg";

function Carosule() {
  return (
    <div className="customs">
      <Carousel
        id="carouselExampleAutoplaying"
        className="carousel slide"
        interval={5000} // Set interval in milliseconds for autoplay
        pause={false} // Disable pause on hover
      >
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="First slide" />
          <Carousel.Caption>
            <h4>Welcome to Qudrah</h4>
            <h6>
              Building the Future of Telecommunications and Energy with
              Innovation and Expertise
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h4>Transforming Telecommunications and Energy Services</h4>
            <h6>
              Delivering Innovative Engineering Solutions with Precision and
              Excellence
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Third slide" />
          <Carousel.Caption>
            <h4>Powering Progress with Quality and Reliability</h4>
            <h6>
              Delivering Turnkey Solutions for Telecommunications and Energy
              Efficiency
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Control
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        />
        <Carousel.Control
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        /> */}
      </Carousel>
    </div>
  );
}

export default Carosule;
