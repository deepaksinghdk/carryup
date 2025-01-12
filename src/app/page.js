import AboutAreaTwo from "@/components/AboutAreaTwo";
import BannerThree from "@/components/BannerThree";
import BrandAreaOne from "@/components/BrandAreaOne";
import CareerAreaOne from "@/components/CareerAreaOne";
import ContactAreaFour from "@/components/ContactAreaFour";
import CounterAreaFour from "@/components/CounterAreaFour";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterThree from "@/components/FooterThree";
import Navbar from "@/components/NavBar";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import ServiceAreaNine from "@/components/ServiceAreaNine";
import TestimonialThree from "@/components/TestimonialThree";
import WorkProcessOne from "@/components/WorkProcessOne";

export const metadata = {
  title: "Carryup - AI Backed Solutions & Technology",
  description:
    "Carryup provide you to build digital, it services, it solutions, network solution, startup, technology, technology company, technology service.",
};

const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Banner Three */}
      <BannerThree />

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* About Area Two */}
      <AboutAreaTwo />

      {/* ServiceAreaNine */}
      <ServiceAreaNine />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* FAQ Area Two */}
      <FaqAreaTwo />

      {/* Career Area One */}
      <CareerAreaOne />

      {/* Project Area One */}
      <ProjectAreaOne />

      {/* Contact Area Four */}
      <ContactAreaFour />

      {/* Testimonial Three */}
      <TestimonialThree />

      {/* Counter Area Four */}
      <CounterAreaFour />

      {/* Footer Three */}
      <FooterThree />
    </>
  );
};

export default page;
