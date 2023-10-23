import { forwardRef } from 'react';
import './_projects.scss';

interface ProjectsProps extends React.HTMLProps<HTMLDivElement> {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <div ref={ref} className="projects-container" {...props}>Projects</div>
  )
});

export default Projects;