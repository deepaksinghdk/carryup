"use client";

import { useEffect, useRef, useState } from "react";

const TimeLine = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const [isHorizontalScrollActive, setIsHorizontalScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const horizontalScroll = horizontalRef.current;
      if (!container || !horizontalScroll) return;

      const rect = container.getBoundingClientRect();
      const start = window.innerHeight / 2; // Start when it's in the center of the viewport
      const end = rect.top + rect.height - window.innerHeight;

      if (rect.top <= start && rect.bottom >= start) {
        setIsHorizontalScrollActive(true);
        document.body.style.overflowY = "hidden"; // Stop vertical scrolling
      } else {
        setIsHorizontalScrollActive(false);
        document.body.style.overflowY = "auto"; // Restore vertical scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflowY = "auto"; // Reset vertical scroll on cleanup
    };
  }, []);

  useEffect(() => {
    if (!isHorizontalScrollActive) return;

    let scrollLeft = 0;
    const scrollSpeed = 10;
    const container = horizontalRef.current;

    const scrollInterval = setInterval(() => {
      if (!container || !isHorizontalScrollActive) {
        clearInterval(scrollInterval);
        return;
      }

      scrollLeft += scrollSpeed;
      container.scrollLeft = scrollLeft;

      if (scrollLeft >= container.scrollWidth - container.clientWidth) {
        clearInterval(scrollInterval);
        setIsHorizontalScrollActive(false);
        document.body.style.overflowY = "auto"; // Restore vertical scrolling
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isHorizontalScrollActive]);

  const steps = [
    { step: "Step 1", title: "Research & Discovery", description: "Understanding user needs and market trends." },
    { step: "Step 2", title: "Define & Ideate", description: "Analyzing research insights and brainstorming ideas." },
    { step: "Step 3", title: "Wireframing & Prototyping", description: "Creating wireframes and interactive prototypes." },
    { step: "Step 4", title: "User Testing", description: "Gathering feedback through usability testing." },
    { step: "Step 5", title: "Development", description: "Building the final product using modern tech." },
    { step: "Step 6", title: "Launch & Optimization", description: "Deploying the product and optimizing based on feedback." },
  ];

  return (
    <div>
      {/* Before Timeline Section */}
      <div style={{ height: "80vh", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2>Welcome Section</h2>
      </div>

      {/* Timeline Section */}
      <div ref={containerRef} className="horizontal-scroll-container" style={{ position: "relative", overflow: "hidden", height: "100vh", display: "flex", alignItems: "center" }}>
        <div ref={horizontalRef} className="horizontal-content" style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", scrollBehavior: "smooth", width: "max-content", padding: "0 4vw" }}>
          {steps.map((step, index) => (
            <div key={index} className="timeline-item text-center mx-3" style={{ width: "250px" }}>
              <div className="bg-white border rounded-circle shadow d-flex align-items-center justify-content-center mx-auto"
                   style={{ width: "70px", height: "70px", fontWeight: "bold" }}>
                <span className="text-primary">{step.step}</span>
              </div>
              <div className="mt-2">
                <h6 className="fw-bold">{step.title}</h6>
                <p className="text-muted small">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Section (After Timeline) */}
      <div style={{ height: "80vh", background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2>Next Section Content</h2>
      </div>
    </div>
  );
};

export default TimeLine;
