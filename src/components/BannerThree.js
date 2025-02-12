"use client";
import Link from "next/link";
import React, { useState } from "react";

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}
      >
        <img className="bg-img-2" src="assets/img/banner-3/4.png" alt="img" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h6
                  className="subtitle "
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  Get Your Project Live in Just 30 Days!
                </h6>
                <h2
                  className="title"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Innovative Web, <span> Built </span>for Growth.
                </h2>
                <p
                  className="content pe-xl-5"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  We craft high-performance, visually stunning, and
                  user-friendly websites designed to convert. On time, every
                  time.
                </p>
                <Link
                  className="btn btn-border-base "
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  href="/contact"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 banner-main-img-wrapper">
              <div
                className="banner-thumb-3"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <div className="main-img-wrap">
                  <img
                    className="main-img"
                    src="assets/img/banner-3/mb1.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerThree;
