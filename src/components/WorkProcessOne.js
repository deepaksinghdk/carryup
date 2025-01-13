import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className="work-process-area pd-top-120">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">OUR SIMPLE PROCESS</h6>
            <h2 className="title">
              How We Bring <span>Your Vision</span> to Life
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/9.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">01</p>
                  <h5 className="mb-3">Sitemap & Wireframe</h5>
                  <p className="content">
                    Defining the structure and UI/UX flow of your site.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/10.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">02</p>
                  <h5 className="mb-3">Design</h5>
                  <p className="content">
                    Crafting visually appealing and user-friendly layouts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/11.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">03</p>
                  <h5 className="mb-3">Development</h5>
                  <p className="content">
                    Turning designs into functional, high-performance websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/12.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">04</p>
                  <h5 className="mb-3">Maintenance</h5>
                  <p className="content">
                    Ensuring updates, Bug fixes, and optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
