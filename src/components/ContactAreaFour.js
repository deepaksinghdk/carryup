import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ContactAreaFour = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className="contact-area pd-top-90 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-lg-end "
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner ms-xl-5 p-xl-5 pt-4 ">
                <img
                  className="animate-main-img"
                  src="assets/img/about/18.png"
                  alt="img"
                />
                <img
                  className="main-img m-4"
                  src="assets/img/about/19.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 order-lg-first "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-5 mt-lg-0">
                <h6 className="sub-title">Let’s Connect</h6>
                <h2 className="title">
                  Transform Your <span>Business</span>
                </h2>
                <p className="content">
                  Ready to elevate your business? We craft modern, user-friendly
                  websites tailored to drive your growth. Get in touch today!
                </p>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input type="text" placeholder="Name Here" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input-inner style-border">
                        <input type="text" placeholder="Phone Number Here" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border">
                        <input type="text" placeholder="Email ID Here" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input-inner style-border">
                        <textarea
                          placeholder="Message/Query Here"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <Link className="btn btn-border-base mt-0" href="#">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default ContactAreaFour;
