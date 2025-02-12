import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ServiceAreaNine = () => {
  return (
    <>
      {/* start service area */}
      <div className="service-area service-area_9">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title">
                <h6 className="sub-title">Our Feature Service</h6>
                <h2 className="title">
                  We <span>Specialize</span> In The <br /> Features Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner text-center">
                <div className="thumb">
                  <img src="assets/img/home-11/service-1.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">E-commerce</Link>
                  </h5>
                  <p>
                    Online stores with Shopify, WooCommerce, or custom tech.
                  </p>
                  {/* <Link className="read-more-text" href="/blog-details">
                    Touch More <FaPlus />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner text-center">
                <div className="thumb">
                  <img src="assets/img/home-11/service-2.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">Corporate</Link>
                  </h5>
                  <p>
                    Responsive sites with HTML, Bootstrap, and robust backends.
                  </p>
                  {/* <Link className="read-more-text" href="/blog-details">
                    Touch More <FaPlus />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner text-center">
                <div className="thumb">
                  <img src="assets/img/home-11/service-3.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/service-details">Web Apps</Link>
                  </h5>
                  <p>Interactive apps using Angular, React, and Express.js.</p>
                  {/* <Link className="read-more-text" href="/blog-details">
                    Touch More <FaPlus />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end service area */}
    </>
  );
};

export default ServiceAreaNine;
