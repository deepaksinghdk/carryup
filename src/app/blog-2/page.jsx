import BlogGroupTwo from "@/components/BlogGroupTwo";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";





export const metadata = {
  title: "Blog || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>  
       
       <Breadcrumb img="./assets/img/banner06.avif"  title="Blog    "  />
      <BlogGroupTwo />

      
    </>
  );
};

export default page;
