import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
const AboutAreaThree = () => {
  return (
    <>
      {/* =============== About Area Three End ===============*/}
      <div  className="pd-bottom-100" >
      <div className="about-area bg-gradient-gray pd-top-120   ">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 "
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner mb-4 mb-lg-0">
                <img
                  className="main-img"
                  src="assets/img/about/11.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 wow animated fadeInRight"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0">
                <h6 className="sub-title">Service</h6>
                <h2 className="title">
                  Web <span>Design</span>
                </h2>
                <p className="content mb-4">
                  We design custom, responsive websites that enhance user
                  experience and drive results. From UI/UX design to e-commerce
                  and website redesign, we create high-quality,
                  performance-driven solutions tailored to your needs.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> Web Design
                      </li>
                      <li>
                        <FaCheckCircle /> Mobile App Design
                      </li>
                      <li>
                        <FaCheckCircle /> Product Design
                      </li>
                      <li>
                        <FaCheckCircle /> Dashboard Design
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> E-commerce UI/UX
                      </li>
                      <li>
                        <FaCheckCircle /> Conversational UX
                      </li>
                      <li>
                        <FaCheckCircle /> Data Visualization Design
                      </li>
                      <li>
                        <FaCheckCircle /> Startup Design
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="content">
                  Looking for top-tier design services? Our expert team crafts
                  visually stunning, user-friendly designs that boost engagement
                  and conversions. Whether you need a sleek website, intuitive
                  mobile app, or data-driven dashboard, we deliver
                  high-performance solutions tailored to your brand. Let’s bring
                  your vision to life—contact us today!
                </p>
                <Link className="btn btn-border-base" href="/about">
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-base client-border-radius p-xl-5 p-3 mt-5">
            <div className="client-slider">
              <Marquee gradient={false}>
                <div className="thumb">
                  <img src="assets/img/client/1.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/2.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/3.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/4.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/5.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/6.svg" alt="img" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* =============== About Area Three End ===============*/}
    </>
  );
};

export default AboutAreaThree;
