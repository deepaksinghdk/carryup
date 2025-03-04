import AboutAreaThree from "@/components/AboutAreaThree";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import WorkProcessFour from "@/components/WorkProcessFour";





export const metadata = {
  title: "Web Design Service",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Breadcrumb img="./assets/img/banner06.avif" />

      <AboutAreaThree />

      {/* Project Area One */}
      <ProjectAreaOne />

      <WorkProcessFour />

    </>
  );
};

export default page;
