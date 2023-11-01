import { forwardRef } from "react";

import MainProjectsList from "./MainProjects/MainProjectsList/MainProjectsList";
import SideProjectsList from "./SideProjects/SideProjectsList/SideProjectsList";
import "./_projects.scss";

interface ProjectsProps extends React.HTMLProps<HTMLDivElement> {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <section ref={ref} className="projects-container" {...props}>
      <MainProjectsList />
      <SideProjectsList />
    </section>
  );
});

export default Projects;
