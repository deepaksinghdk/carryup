import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className="about-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0 "
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                <img
                  className="main-img"
                  src="assets/img/about/10.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0">
                <h6 className="sub-title">ABOUT US</h6>
                <h2 className="title">
                  Empowering <span>Businesses</span> with Cutting-Edge
                  Technology
                </h2>
                <p className="content mb-4">
                  At Carryup, we craft innovative web and mobile app solutions
                  tailored to your business needs. Whether you're a startup or
                  an established brand, we help you build future-ready digital
                  experiences.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> Expert website development.
                      </li>
                      <li>
                        <FaCheckCircle /> Scalable and secure solutions.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> Tailored to your business goals.
                      </li>
                      <li>
                        <FaCheckCircle /> User-friendly designs.
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="content">
                  We specialize in website development, delivering scalable,
                  high-quality digital solutions tailored to your needs. As your
                  tech partner, we ensure every project drives your success.
                </p>
                <Link className="btn btn-border-base" href="/about">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;
