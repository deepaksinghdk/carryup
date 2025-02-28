import AboutAreaOne from "@/components/AboutAreaOne";
import Breadcrumb from "@/components/Breadcrumb";
 




export const metadata = {
  title: "About | CarryUp",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
     

     <Breadcrumb img="./assets/img/banner06.avif"  title="About Us  "  />
      {/* About Area One */}
      <AboutAreaOne />

 

    </>
  );
};

export default page;
