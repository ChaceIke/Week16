import Carousel from 'react-bootstrap/Carousel';
import Code from '../../Assets/code.jpg';
import Unicorn from '../../Assets/unicorn.jpg';
import Meeting from '../../Assets/meeting.jpg';

// This is a bootstrap carousel with the information changed to fit the company's information.
function CompanyImages() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Meeting}
          alt="company meeting"
        />
        <Carousel.Caption>
          <h1 className='text-carousel'>Dedicated</h1>
          <p>Our employees hard at work discussing defense strategies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Code}
          alt="guy working on computer"
        />

        <Carousel.Caption>
          <h1 className='text-carousel'>Elite Software</h1>
          <p>We use top of the line programs in our defense of your information</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Unicorn}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='text-carousel'>Company Culture</h1>
          <p>Here at securicorp, we believe a healthy company culture provides employees
            with the best workspace and mindset to defend effectively.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CompanyImages;