import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ProjectAreaOne = () => {
  return (
    <div className="project-section project-section_1 pd-top-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h6 className="sub-title">Gallery Here</h6>
              <h2 className="title">
                Latest <span>Project</span> Are Here
              </h2>
            </div>
          </div>
        </div>

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-tabs1"
            role="tabpanel"
            aria-labelledby="nav-tabs1-tab"
          >
            <div className="row">
              <div className="col-md-4">
                <div className="single-project-inner">
                  <img src="assets/img/gallery/1.png" alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
                <div className="single-project-inner">
                  <img src="assets/img/gallery/5.png" alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
                <div className="single-project-inner">
                  <img src="assets/img/gallery/6.png" alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-project-inner">
                  <img src="assets/img/gallery/2.png" alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
                <div className="single-project-inner">
                  <img src="assets/img/gallery/7.png" alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-project-inner">
                  <img src="assets/img/gallery/3.png" alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
                <div className="single-project-inner">
                  <img src="assets/img/gallery/4.png" alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
                <div className="single-project-inner">
                  <img src="assets/img/gallery/8.png" alt="img" />
                  <div className="details">
                    <span>
                      <FaPlus />
                    </span>
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAreaOne;
