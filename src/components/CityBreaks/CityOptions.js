import './CityOptions.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function CityOptions(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
  };
    return (
        <div className="leftComponent">
            <h3 id="city" >{props.cityName}</h3>
            <br />
            <p id="cityInfo" >{props.cityInfo}</p>
            <br />
            {/* Creating the carousel of images */}
            <Carousel 
                activeIndex={index} 
                onSelect={handleSelect} 
                className="cityCarousel" 
                style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}>
                <Carousel.Item>
                    <img 
                        className="carouselImages" 
                        src={props.srcFirst} 
                        alt={props.altOne} 
                        style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="carouselImages" 
                        src={props.srcSecond} 
                        alt={props.altTwo} 
                        style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="carouselImages" 
                        src={props.srcThird} 
                        alt={props.altThree} 
                        style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="carouselImages" 
                        src={props.srcFour} 
                        alt={props.altFour} 
                        style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="carouselImages" 
                        src={props.srcFive} 
                        alt={props.altFive} 
                        style={{ maxHeight: '800px', maxWidth: '800px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CityOptions;