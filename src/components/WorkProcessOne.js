import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const WorkProcessOne = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div
        className="service-area bg-cover pd-top-120 pd-bottom-90 pd-top-110 pd-bottom-90"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
       <div className="container">
  <div className="row justify-content-center">
    <div className="col-xl-6 col-lg-8">
      <div className="section-title text-center">
        <h6 className="sub-title">OUR SIMPLE PROCESS</h6>
        <h2 className="title">
          How We Bring <span>Your Vision</span> to Life
        </h2>
      </div>
    </div>
  </div>
  <div className="row align-items-stretch"> {/* Ensures equal height cards */}
    <div className="col-xl-3 col-md-6 d-flex">
      <div className="single-work-process-inner d-flex flex-column w-100">
        <div className="thumb mb-4">
          <img src="assets/img/icon/18.svg" alt="img" />
        </div>
        <div className="details flex-grow-1">
          <p className="process-count">01</p>
          <h5 className="mb-3">Sitemap & Wireframe</h5>
          <p className="content">
            Defining the structure and UI/UX flow of your site.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 d-flex">
      <div className="single-work-process-inner d-flex flex-column w-100">
        <div className="thumb mb-3">
          <img src="assets/img/icon/16.svg" alt="img" />
        </div>
        <div className="details flex-grow-1">
          <p className="process-count">02</p>
          <h5 className="mb-3">Design</h5>
          <p className="content">
            Crafting visually appealing and user-friendly layouts.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 d-flex">
      <div className="single-work-process-inner d-flex flex-column w-100">
        <div className="thumb mb-3">
          <img src="assets/img/icon/17.svg" alt="img" />
        </div>
        <div className="details flex-grow-1">
          <p className="process-count">03</p>
          <h5 className="mb-3">Development</h5>
          <p className="content">
            Turning designs into functional, high-performance websites.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 d-flex">
      <div className="single-work-process-inner d-flex flex-column w-100">
        <div className="thumb mb-3">
          <img src="assets/img/icon/20.svg" alt="img" />
        </div>
        <div className="details flex-grow-1">
          <p className="process-count">04</p>
          <h5 className="mb-3">Maintenance</h5>
          <p className="content">
            Ensuring updates, bug fixes, and optimal performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default WorkProcessOne;
