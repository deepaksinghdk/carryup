"use client";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import "./timeline.css";

const TimeLine = () => {
  const targetRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // Extends scrolling time
  });

  // Adjust horizontal movement range
  const xTransform = useTransform(scrollYProgress, [0, 1], ["-1%", "-40%"]);


  const x = useSpring(xTransform, {
    stiffness: 100, // Controls the elasticity
    damping: 20, // Controls how fast it settles
    mass: 0.5, // Controls the weight
  });



  return (
    <div className="timeline-wrapper " >

      <div className="carousel" ref={targetRef}>


        <div className="section-title text-center" style={{ top: "58px", position: "absolute" }}
        >
          <h6 class="sub-title">Service</h6>
          <h2 class="title">Web <span>Design</span></h2>
        </div>

        <div className="contentContainer">





          <motion.div className="images" style={{ x }}    >



            <div className="imageItem">

              <div style={{ top: "-44px", left: "152px", position: "absolute", borderLeft: "2px solid #c2c2c2", height: "16%", }} ></div>


              <div className="image-container text-center">
                <img className="image" width={"100px"} src="/assets/img/Group 1000004756.png" />
                <h4 className="mt-3">Research & Discovery</h4>
                <p className="date" >Understanding user needs, business goals, and market trends through user interviews, surveys, and competitor analysis.</p>
              </div>
            </div>





            <div className="imageItem">
            <div style={{ top: "-44px", left: "152px", position: "absolute", borderLeft: "2px solid #c2c2c2", height: "16%", }} ></div>



              <div className="image-container text-center">
                <img className="image" width={"100px"} src="/assets/img/Group 1000004756 (1).png" />
                <h4 className="mt-3">Research & Discovery</h4>
                <p className="date" >Understanding user needs, business goals, and market trends through user interviews, surveys, and competitor analysis.</p>
              </div>
            </div>






            <div className="imageItem">
            <div style={{ top: "-44px", left: "152px", position: "absolute", borderLeft: "2px solid #c2c2c2", height: "16%", }} ></div>


              <div className="image-container text-center">
                <img className="image" width={"100px"} src="/assets/img/Group 1000004756 (2).png" />
                <h4 className="mt-3">Research & Discovery</h4>
                <p className="date" >Understanding user needs, business goals, and market trends through user interviews, surveys, and competitor analysis.</p>
              </div>
            </div>








            <div className="imageItem">
            <div style={{ top: "-44px", left: "152px", position: "absolute", borderLeft: "2px solid #c2c2c2", height: "16%", }} ></div>


              <div className="image-container text-center">
                <img className="image" width={"100px"} src="/assets/img/Group 1000004756 (3).png" />
                <h4 className="mt-3">Research & Discovery</h4>
                <p className="date" >Understanding user needs, business goals, and market trends through user interviews, surveys, and competitor analysis.</p>
              </div>
            </div>









            <div className="imageItem">
            <div style={{ top: "-44px", left: "152px", position: "absolute", borderLeft: "2px solid #c2c2c2", height: "16%", }} ></div>


              <div className="image-container text-center">
                <img className="image" width={"100px"} src="/assets/img/Group 1000004756 (4).png" />
                <h4 className="mt-3">Research & Discovery</h4>
                <p className="date" >Understanding user needs, business goals, and market trends through user interviews, surveys, and competitor analysis.</p>
              </div>
            </div>








            <div className="imageItem">
            <div style={{ top: "-44px", left: "152px", position: "absolute", borderLeft: "2px solid #c2c2c2", height: "16%", }} ></div>



              <div className="image-container text-center">
                <img className="image" width={"100px"} src="/assets/img/Group 1000004756 (5).png" />
                <h4 className="mt-3">Research & Discovery</h4>
                <p className="date" >Understanding user needs, business goals, and market trends through user interviews, surveys, and competitor analysis.</p>
              </div>
            </div>




          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
