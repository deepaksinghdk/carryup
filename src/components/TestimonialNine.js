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
            <h2 className="title">
              What Our <span>Clients Say</span> About Us
            </h2>
          </div>
          <div className="testimonial-slider-1 owl-carousel slider-control-round slider-control-dots slider-control-right-top">
            <Slider {...settings}>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Divya Darshan</h5>
                  <p className="designation mb-3">Founder</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    We’re really happy with the Website built for our streetwear
                    brand. The team took the time to understand our vision. It’s
                    been a smooth experience, and we’re seeing more engagement
                    from our customers.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Abhijit MD</h5>
                  <p className="designation mb-3">Marketing Head</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    Working with Carryup was an absolute pleasure. They built
                    our e-commerce website with all the features we needed and
                    more. The process was smooth, and the team was incredibly
                    responsive. Highly recommend for any business looking to
                    create a professional online presence.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Rakshit</h5>
                  <p className="designation mb-3">Founder</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    We needed a corporate website that would reflect our brand’s
                    professionalism, and Carryup delivered beyond expectations.
                    Their attention to detail and commitment to excellence made
                    all the difference. Our new site has significantly improved
                    our client engagement.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Aaron waliya</h5>
                  <p className="designation mb-3">Founder & CEO</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    From start to finish, Team exceeded our expectations in
                    developing our educational platform. The website is not only
                    user-friendly but also visually appealing. Their innovative
                    approach brought our ideas to life in ways we hadn’t even
                    imagined!
                  </p>
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
