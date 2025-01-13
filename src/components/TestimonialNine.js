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
      {/* testimonial-area start */}
      <div
        className="testimonial-area testimonial-area_9 pd-top-90"
        style={{ backgroundImage: 'url("./assets/img/bg/11.png")' }}
      >
        <div className="container pb-5">
          <div className="section-title">
            <h6 className="sub-title">TESTIMONIAL</h6>
            <h2 className="title">Only goal to give you best</h2>
          </div>
          <div className="testimonial-slider-1 owl-carousel slider-control-round slider-control-dots slider-control-right-top">
            <Slider {...settings}>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Devon Lane</h5>
                  <p className="designation mb-3">Marketing Coordinator</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                  <div className="ratting-inner mt-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Devon Lane</h5>
                  <p className="designation mb-3">Marketing Coordinator</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                  <div className="ratting-inner mt-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Devon Lane</h5>
                  <p className="designation mb-3">Marketing Coordinator</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                  <div className="ratting-inner mt-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Devon Lane</h5>
                  <p className="designation mb-3">Marketing Coordinator</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC
                  </p>
                  <div className="ratting-inner mt-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial-area end */}
    </>
  );
};

export default TestimonialNine;
