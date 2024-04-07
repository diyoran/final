import React from 'react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import artist from '../img/artist.png'
import programmer from '../img/programmer.png'
import copywriter from '../img/copywriter.png'

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={500}
        totalSlides={3}
        infinite={true}
        isPlaying={true}
        interval={3000}
        
      >
        <Slider className='slider'>
          <Slide index={0}><img src={artist} alt="error" /></Slide>
          <Slide index={1}><img src={programmer} alt="error" /></Slide>
          <Slide index={2}><img src={copywriter} alt="error" /></Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}