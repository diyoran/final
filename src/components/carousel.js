import Carousel from 'react-bootstrap/Carousel';
import artist from '../img/artist.png'


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={artist} className='carousel' alt="error" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
        <img src='' className='carousel' alt="error" />
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
      <img src={artist} className='carousel' alt="error" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
