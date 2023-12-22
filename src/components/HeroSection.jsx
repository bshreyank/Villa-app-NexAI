import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./images/banner-01.jpg')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./images/banner-02.jpg')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./images/banner-03.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroSection
