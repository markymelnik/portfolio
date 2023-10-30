import { forwardRef } from "react";
import "./_projects.scss";
import ProjectBox from "./ProjectBox/ProjectBox";

interface ProjectsProps extends React.HTMLProps<HTMLDivElement> {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <div ref={ref} className="projects-container" {...props}>
      <div className="projects-title"><span>.01</span>Projects</div>
      <div className="projects-list">
        <ProjectBox
          projectId={`project-1`}
          projectYear={2023}
          projectName={`markmelnik.com`}
          projectDescription={`This website!`}
          projectSourceUrl={`https://google.com`}
        />
        <ProjectBox
          projectId={`project-2`}
          projectYear={2023}
          projectName={`FitFinder`}
          projectDescription={`A web application to find a place to workout.`}
          projectDemoUrl={`https://fitfinder.app`}
          projectSourceUrl={`https://google.com`}
        />
        <ProjectBox
          projectId={`project-3`}
          projectYear={2023}
          projectName={`Battleship`}
          projectDescription={`A web-based battleship game.`}
          projectDemoUrl={`https://google.com`}
          projectSourceUrl={`https://google.com`}
        />
        <ProjectBox
          projectId={`project-4`}
          projectYear={2023}
          projectName={`project-4`}
          projectDescription={`project description`}
          projectDemoUrl={`https://google.com`}
          projectSourceUrl={`https://google.com`}
        />
      </div>
    </div>
  );
});

export default Projects;
