import Carousel from 'react-bootstrap/Carousel';
import castleedi from './homeimages/castleedi.png';
import leaningpisa from './homeimages/leaningpisa.jpg';
import famouseiffel from './homeimages/famouseiffel.jpg'
import './ImageCarousel.css';


function ImageCarousel() {
  
  return (
    <Carousel className='Carousel' style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}>
      <Carousel.Item>
        <img 
        className='ImageCarousel'
        src={castleedi}
        alt="Edinburgh Castle in Scotland."
        style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}
        />
        <Carousel.Caption className='Caption'>
          <h3>Edinburgh Castle</h3>
          <p>Discover a Scottish landmark</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='ImageCarousel'
        src={famouseiffel}
        alt="Eiffel Tower."
        style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>The Eiffel Tower</h3>
          <p>Get an eye-full of the Eiffel Tower</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className='ImageCarousel'
        src={leaningpisa}
        alt="Leaning Tower of Pisa in Italy."
        style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>The Leaning Tower of Pisa</h3>
          <p>
          Visit the Leaning Tower of Pisa, then grab some pizza.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ImageCarousel;
