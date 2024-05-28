import React from "react";
import classes from "./Testimonials.module.css";
import Client from "../../Assets/lady.png";
import Slider from "react-slick";

const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
        breakpoint: 768,
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
  return (
    <div className={classes.container}>
    <div className={classes.innerContainer}>
      <div className={classes.topT}>
        <h5>Testimonials</h5>
        <h2>What Our Customers Says About Us</h2>
      </div>
      <Slider {...settings} className={classes.cardContainer}>
      <div className={classes.cardWrap}>
        <div className={classes.card}>
          <div className={classes.Images} >
          <img src={Client} alt="Client" />
          </div>
          <h4>Tolu Oyeh</h4>
          <h6>Business woman</h6>
          <p>
            Their professionalism, reliability, and unwavering support make them
            the ideal partner for anyone in the agro-allied industry. I highly
            recommend Mayframe farms & Agro-Allied for their outstanding
            contributions to the agricultural sector.
          </p>
        </div>
        </div>
        <div className={classes.cardWrap}>
        <div className={classes.card}>
        <div className={classes.Images} >
          <img src={Client} alt="Client" />
          </div>
          <h4>Tolu Oyeh</h4>
          <h6>Business woman</h6>
          <p>
            Their professionalism, reliability, and unwavering support make them
            the ideal partner for anyone in the agro-allied industry. I highly
            recommend Mayframe farms & Agro-Allied for their outstanding
            contributions to the agricultural sector.
          </p>
        </div>
        </div>
        <div className={classes.cardWrap}>
        <div className={classes.card}>
        <div className={classes.Images} >
          <img src={Client} alt="Client" />
          </div>
          <h4>Tolu Oyeh</h4>
          <h6>Business woman</h6>
          <p>
            Their professionalism, reliability, and unwavering support make them
            the ideal partner for anyone in the agro-allied industry. I highly
            recommend Mayframe farms & Agro-Allied for their outstanding
            contributions to the agricultural sector.
          </p>
        </div>
      </div>
        </Slider>
      </div>
    </div>
  );
};

export default AutoPlay;
