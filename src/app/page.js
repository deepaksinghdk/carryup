import AboutAreaTwo from "@/components/AboutAreaTwo";
import BannerThree from "@/components/BannerThree";
import BrandAreaOne from "@/components/BrandAreaOne";
import ContactAreaFour from "@/components/ContactAreaFour";
import CounterAreaFour from "@/components/CounterAreaFour";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterOne from "@/components/FooterOne";
import Navbar from "@/components/NavBar";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import ServiceAreaNine from "@/components/ServiceAreaNine";
import TestimonialNine from "@/components/TestimonialNine";
import WorkProcessOne from "@/components/WorkProcessOne";

export const metadata = {
  title: "Carryup - Innovative AI-Driven Solutions",
  description:
    "Empowering enterprises for a digital future with AI-Driven transformations. Turning possibilities into reality with our digital expertise.",
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
      {/* <CareerAreaOne /> */}

      {/* Project Area One */}
      <ProjectAreaOne />

      {/* Contact Area Four */}
      <ContactAreaFour />

      {/* Testimonial Nine */}
      <TestimonialNine />

      {/* Counter Area Four */}
      <CounterAreaFour />

      {/* Footer Three */}
      <FooterOne />
    </>
  );
};

export default page;
