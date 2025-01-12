import AboutAreaTwo from "@/components/AboutAreaTwo";
import BannerFour from "@/components/BannerFour";
import BrandAreaOne from "@/components/BrandAreaOne";
import CareerAreaOne from "@/components/CareerAreaOne";
import ContactAreaFour from "@/components/ContactAreaFour";
import CounterAreaFour from "@/components/CounterAreaFour";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterThree from "@/components/FooterThree";
import NavbarThree from "@/components/NavbarThree";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import ServiceAreaNine from "@/components/ServiceAreaNine";
import TestimonialThree from "@/components/TestimonialThree";
import WorkProcessOne from "@/components/WorkProcessOne";





export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Banner Four */}
      <BannerFour />

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

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* Footer Three */}
      <FooterThree />
    </>
  );
};

export default page;
