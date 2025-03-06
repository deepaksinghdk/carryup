import AboutAreaThree from "@/components/AboutAreaThree";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectAreaOne from "@/components/ProjectAreaOne";
import Timeline from "../../components/TimeLine/TimeLine";
import WorkProcessFour from "@/components/WorkProcessFour";
import FutureReadyTools from "@/components/FutureReadyTools";
import TimeLine from "../../components/TimeLine/TimeLine";





export const metadata = {
  title: "Web Design Service",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Breadcrumb   img="./assets/img/banner06.avif"  />

      <AboutAreaThree />
     
<TimeLine/>

      {/* Project Area One */}
      <ProjectAreaOne />


      <FutureReadyTools/>

      <WorkProcessFour />

    </>
  );
};

export default page;
