import React from 'react';
import Slider from "react-slick";
import slide_one from '../../images/slide_one.jpg';
import slide_two from '../../images/slide_two.jpg';
import slide_three from '../../images/slide_three.jpg';
import Countdown from './Countdown';


const Carousel = () => {
  const settings = {
    dots:false,
    infinite: true,
    autoplay: true,
    speed: 200,
  }
  return (
    <div className="carrousel_wrapper" style={{
    height:`${window.innerHeight}px`, //calculates screen height whenever it loads
    overflow:'hidden'
    }}>
      <Slider {...settings}>
      <div> 
          <div className="carrousel_image" 
                style={{background:`url(${slide_one})`, height:`${window.innerHeight}px`}}>
          </div>
      </div>
      <div>
      <div className="carrousel_image" 
                style={{background:`url(${slide_two})`, height:`${window.innerHeight}px`}}>
          </div>
      </div>
      <div>
      <div className="carrousel_image" 
                style={{background:`url(${slide_three})`, height:`${window.innerHeight}px`}}>
          </div>
      </div>
      </Slider>
      <Countdown/>
    </div>
  );
};

export default Carousel;
