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
                  <img src="assets/img/carryuplight.png" alt="img" />
                </div>
                <div className="details">
                  {/* <p>
                    Empowering your digital presence with custom web solutions
                    that drive success.
                  </p> */}
                  <p className="mt-3">
                    <FaPhoneAlt /> (+91) 988 016 9090
                  </p>
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
                      <FaArrowRight /> Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Web Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <Link href="/about">
                      <FaArrowRight /> About
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Career
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Reach Us</h4>
                <ul>
                  <li>
                    <Link href="#">
                      <FaArrowRight /> Contact
                    </Link>
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
