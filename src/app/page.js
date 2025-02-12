import AboutAreaEight from "@/components/AboutAreaEight";
import AboutAreaFive from "@/components/AboutAreaFive";
import AboutAreaFour from "@/components/AboutAreaFour";
import AboutAreaNine from "@/components/AboutAreaNine";
import AboutAreaSeven from "@/components/AboutAreaSeven";
import AboutAreaSix from "@/components/AboutAreaSix";
import AboutAreaThree from "@/components/AboutAreaThree";
import AboutAreaTwo from "@/components/AboutAreaTwo";
import BannerThree from "@/components/BannerThree";
import BrandAreaOne from "@/components/BrandAreaOne";
import ContactAreaFour from "@/components/ContactAreaFour";
import ContactAreaSix from "@/components/ContactAreaSix";
import ContactAreaThree from "@/components/ContactAreaThree";
import ContactAreaTwo from "@/components/ContactAreaTwo";
import FooterOne from "@/components/FooterOne";
import NavbarTwo from "@/components/NavbarTwo";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import ServiceAreaGroup from "@/components/ServiceAreaGroup";
import ServiceAreaGroupFive from "@/components/ServiceAreaGroupFive";
import ServiceAreaGroupFour from "@/components/ServiceAreaGroupFour";
import ServiceAreaGroupThree from "@/components/ServiceAreaGroupThree";
import ServiceAreaGroupTwo from "@/components/ServiceAreaGroupTwo";
import ServiceAreaNine from "@/components/ServiceAreaNine";
import TestimonialEight from "@/components/TestimonialEight";
import TestimonialFive from "@/components/TestimonialFive";
import TestimonialNine from "@/components/TestimonialNine";
import TestimonialSeven from "@/components/TestimonialSeven";
import TestimonialSix from "@/components/TestimonialSix";
import TestimonialThree from "@/components/TestimonialThree";
import TestimonialTwo from "@/components/TestimonialTwo";
import WorkProcessOne from "@/components/WorkProcessOne";
import Head from "next/head";

export const metadata = {
  title: "Carryup - Expert Web Design & Development",
  description:
    "Crafting high-performance websites that drive results. From custom design to seamless development, Carryup transforms your online presence.",
};

const page = () => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d) { 
                w.CollectId = "67acd52612715d6ecaf4d1e6"; 
                var h = d.head || d.getElementsByTagName("head")[0]; 
                var s = d.createElement("script"); 
                s.setAttribute("type", "text/javascript"); 
                s.async = true; 
                s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
                h.appendChild(s); 
              })(window, document);
            `,
          }}
        />
      </Head>

      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Banner Three */}
      <BannerThree />

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* Project Area One */}
      <ProjectAreaOne />

      {/* About Area Two */}
      <AboutAreaTwo />

      {/* ServiceArea */}
      <ServiceAreaGroup />

      {/* Work Process One */}
      <WorkProcessOne />

      <AboutAreaEight />

      {/* Testimonial Nine */}
      <TestimonialNine />

      {/* Contact Area Four */}
      <ContactAreaFour />

      {/* <AboutAreaThree /> */}

      {/* Footer Three */}
      <FooterOne />
    </>
  );
};

export default page;
