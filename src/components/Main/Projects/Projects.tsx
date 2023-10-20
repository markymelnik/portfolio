import { forwardRef } from 'react';
import './_projects.scss';

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="projects-container">Projects</div>
  )
});

export default Projects;