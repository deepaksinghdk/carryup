"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialNine = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* Testimonial Area Start */}
      <div className="testimonial-area testimonial-area_9 pd-top-90">
        <div className="container pb-5">
          <div className="section-title">
            <h6 className="sub-title">TESTIMONIAL</h6>
            <h2 className="title">
              What Our <span>Clients Say</span>
            </h2>
          </div>
          <div className="testimonial-slider-1 owl-carousel slider-control-round slider-control-dots slider-control-right-top">
            <Slider {...settings}>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Divya Darshan</h5>
                  <p className="designation mb-3">Founder</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="testimonial-icon" />
                  </div>
                  <p>
                    Carryup built a stunning website for our brand, perfectly
                    capturing our vision. Smooth process and great results!
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Abhijit MD</h5>
                  <p className="designation mb-3">Marketing Head</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="testimonial-icon" />
                  </div>
                  <p>
                    Working with Carryup was seamless. They delivered a
                    feature-rich e-commerce site that exceeded expectations.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Rakshit</h5>
                  <p className="designation mb-3">Founder</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="testimonial-icon" />
                  </div>
                  <p>
                    Carryup created a professional corporate website that
                    boosted client engagement. Their attention to detail was
                    amazing.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Aaron Waliya</h5>
                  <p className="designation mb-3">Founder & CEO</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="testimonial-icon" />
                  </div>
                  <p>
                    The team built an engaging educational platform that was
                    beyond our expectations. Creative and innovative work!
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* Testimonial Area End */}
    </>
  );
};

export default TestimonialNine;
