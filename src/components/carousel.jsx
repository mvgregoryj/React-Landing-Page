import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carouselImage'; // Asegúrate de que la ruta sea correcta

export const CustomCarousel = (props) => {
  const { data } = props;

  return (
    <div id="carousel" style={{}}>
      <Carousel>
        {data && data.map((item, index) => (
          <Carousel.Item key={index} interval={1000}>
            <CarouselImage src={item.src} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
