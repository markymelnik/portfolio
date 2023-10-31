import LinkIcon from "../LinkIcon";
import "./_project-box.scss";

type ProjectBoxProps = {
  projectId: string;
  projectYear: number;
  projectName: string;
  projectDescription: string;
  projectDemoUrl?: string;
  projectSourceUrl?: string;
};

const ProjectBox = ({
  projectId,
  projectYear,
  projectName,
  projectDescription,
  projectDemoUrl,
  projectSourceUrl,
}: ProjectBoxProps) => {
  return (
    <li className={`project-box ${projectId}`}>
      <div className="project-box-left">
      <div className="project-info">
        <div className="project-year">{projectYear}</div>
        <div className="project-name">{projectName}</div>
        <div className="project-description">{projectDescription}</div>
      </div>
      <div className="project-links">
        {projectDemoUrl && (
          <a href={projectDemoUrl} className="project-demo-link" target="_blank" rel="noopener noreferrer">
            <span className='project-link-text'>Demo</span>
            <LinkIcon />
          </a>
        )}
        {projectSourceUrl && (
          <a href={projectSourceUrl} className="project-code-link" target="_blank" rel="noopener noreferrer">
            <span className='project-link-text'>Source</span>
            <LinkIcon />
          </a>
        )}
      </div>
      </div>
      <div className="project-image"></div>
    </li>
  );
};

export default ProjectBox;
