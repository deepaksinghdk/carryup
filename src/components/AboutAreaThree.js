import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
const AboutAreaThree = () => {
  return (
    <>
      {/* =============== About Area Three End ===============*/}
      <div className="about-area ">
        <div className="container">
          <div className="bg-base client-border-radius p-xl-5 p-3 mt-5">
            <div className="client-slider">
              <Marquee gradient={false}>
                <div className="thumb">
                  <img src="assets/img/client/1.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/2.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/3.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/4.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/5.svg" alt="img" />
                </div>
                <div className="thumb">
                  <img src="assets/img/client/6.svg" alt="img" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Three End ===============*/}
    </>
  );
};

export default AboutAreaThree;
