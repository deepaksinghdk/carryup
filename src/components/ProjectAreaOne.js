import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ProjectAreaOne = () => {
  return (
    <div className="project-section project-section_1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h6 className="sub-title">Key Highlights</h6>
              <h2 className="title">
                Explore Our <span>Featured Projects</span>
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
                <div>
                  <img src="assets/img/gallery/project1.png" alt="img" />
                  {/* <div className="details">
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="assets/img/gallery/project2.png" alt="img" />
                  {/* <div className="details">
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="assets/img/gallery/project3.png" alt="img" />
                  {/* <div className="details">
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="assets/img/gallery/project4.png" alt="img" />
                  {/* <div className="details">
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="assets/img/gallery/project5.png" alt="img" />
                  {/* <div className="details">
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="assets/img/gallery/project6.png" alt="img" />
                  {/* <div className="details">
                    <Link className="read-more-text" href="#">
                      VIEW PROJECT
                    </Link>
                  </div> */}
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
