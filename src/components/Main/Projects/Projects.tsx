import { forwardRef, useRef } from "react";

import useProjectObserver from "../../../hooks/useProjectObserver";
import MainProjectsList from "./MainProjects/MainProjectsList/MainProjectsList";
import SideProjectsList from "./SideProjects/SideProjectsList/SideProjectsList";
import ProjectVector from "../../../lib/vectors/ProjectVector/ProjectVector";
import "./projects.scss";

interface ProjectsProps extends React.HTMLProps<HTMLDivElement> {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  const projectRef1 = useRef<HTMLLIElement>(null);
  const projectRef2 = useRef<HTMLLIElement>(null);
  const projectRef3 = useRef<HTMLLIElement>(null);
  const projectRef4 = useRef<HTMLLIElement>(null);

  const seeMoreRef = useRef<HTMLButtonElement>(null);

  const projectRefs = [projectRef1, projectRef2, projectRef3, projectRef4];

  useProjectObserver({ refs: [...projectRefs, seeMoreRef] });

  return (
    <section ref={ref} className="projects-container" {...props}>
      <ProjectVector />
      <MainProjectsList projectRefs={projectRefs} />
      <SideProjectsList seeMoreRef={seeMoreRef} />
    </section>
  );
});

export default Projects;
