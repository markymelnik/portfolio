import LinkIcon from "../../LinkIcon";
import "./_main-project.scss";

type MainProjectProps = {
  projectId: string;
  projectYear: number;
  projectName: string;
  projectDescription: string;
  projectDemoUrl?: string;
  projectSourceUrl?: string;
};

const MainProject = ({
  projectId,
  projectYear,
  projectName,
  projectDescription,
  projectDemoUrl,
  projectSourceUrl,
}: MainProjectProps) => {
  return (
    <li className={`main-project ${projectId}`}>
      <div className="main-project-image">
        <img />
      </div>
      <div className="main-project-stuff">
        <div className="main-project-info">
          <div className="main-project-year">{projectYear}</div>
          <h3 className="main-project-name">{projectName}</h3>
          <p className="main-project-description">{projectDescription}</p>
        </div>
        <div className="main-project-links">
          {projectDemoUrl && (
            <a href={projectDemoUrl} className="main-project-demo-link" target="_blank" rel="noopener noreferrer">
              <span className='main-project-link-text'>Demo</span>
              <LinkIcon />
            </a>
          )}
          {projectSourceUrl && (
            <a href={projectSourceUrl} className="main-project-code-link" target="_blank" rel="noopener noreferrer">
              <span className='main-project-link-text'>Source</span>
              <LinkIcon />
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default MainProject;
