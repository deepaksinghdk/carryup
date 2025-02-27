import React from "react";

const FaqAreaTwo = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div className="faq-area pd-bottom-120">
        <div className="container">
          <div className="row pd-top-120">
            <div className="col-xl-7 col-lg-6 col-md-8 order-lg-last">
              <div className="about-thumb-inner video-thumb">
                <img
                  className="main-img"
                  src="assets/img/about/15.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 align-self-center">
              <div className="section-title mb-0 mt-4 mt-lg-0">
                <h6 className="sub-title">YOUR ANSWER</h6>
                <h2 className="title">
                  Have Any <span>Question</span> Please?
                </h2>
              </div>
              <div
                className="accordion accordion-inner style-2 accordion-icon-left mt-3"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We provide web design, development, e-commerce solutions,
                      and custom web applications.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do you ensure the quality of your projects?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We follow a structured process with rigorous testing to
                      guarantee top quality.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is your approach to client communication?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We maintain clear, regular communication, keeping clients
                      updated at every stage.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How experienced is your team?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Our young, skilled team delivers innovative and
                      high-quality web solutions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What technologies do you specialize in?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We specialize in HTML, CSS, JavaScript (React, Angular),
                      PHP, Node.js, CMS platforms, and all trending tech stacks
                      tailored to client requirements.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaTwo;
