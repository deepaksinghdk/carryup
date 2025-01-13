import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/logo2.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    Empowering your digital presence with custom web solutions
                    that drive success.
                  </p>
                  {/* <p className="mt-3">
                    <FaPhoneAlt /> (+91) 914 077 9652
                  </p> */}
                  <p className="mt-2">
                    <FaEnvelope /> hello@carryup.in
                  </p>
                  <ul className="social-media">
                    {/* <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li> */}
                    <li>
                      <Link href="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Web Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Ecommerce Website
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Corporate Website
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Animation Website
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Web Apps
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Other Services</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Maintainance
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Remote team
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> IT Consultation{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Project Modification
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> IT Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Tech Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Case Study</h4>
                <ul>
                  <li>
                    <div className="media">
                      {/* <div className="media-left">
                        <img src="assets/img/widget/1.png" alt="blog" />
                      </div> */}
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 01, 2025</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            Ecommerce Future in India.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      {/* <div className="media-left">
                        <img src="assets/img/widget/2.png" alt="blog" />
                      </div> */}
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2025</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">AI Websites Reality</Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>
                  © Carryup Innovations Private Limited 2025 | All Rights
                  Reserved
                </p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="#">Terms &amp; Condition</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
