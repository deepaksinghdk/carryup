import Breadcrumb from "@/components/Breadcrumb";
import ContactMain from "@/components/ContactMain";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";





export const metadata = {
  title: "Contact || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
    
      {/* Navigation Bar */}
      <Breadcrumb    img="./assets/img/banner06.avif"  title="  Contact"  />

      {/* Contact Main */}
      <ContactMain />

    
    </>
  );
};

export default page;
