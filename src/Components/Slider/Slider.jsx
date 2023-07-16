import React, { useContext, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { objectContext } from "../../ContextProviders/ObjectProvider";
import Card from "../Card/VideoCard";
import Button from "../Button/Button";
import { color_fuerza } from "../../UI/variables";


 const Responsive = () => {
  
  const sliderRef = useRef(null);
  const { filteredVideos } = useContext(objectContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Reset the slider to the initial slide
      sliderRef.current.slickSetOption(settings); // Update the slider settings
    }
  }, []);

    return (
      <div>
        {
          filteredVideos.map(video => <Button color={color_fuerza} text="Fuerza" />)
        }

        <Slider {...settings} >
          <Card content="1"></Card>
          <Card content="2"></Card>
          <Card content="3"></Card>
          <Card content="4"></Card>
          <Card content="5"></Card>
          <Card content="6"></Card>
          <Card content="7"></Card>
          <Card content="8"></Card>
        </Slider>
      </div>
    );
  }

  export default Responsive