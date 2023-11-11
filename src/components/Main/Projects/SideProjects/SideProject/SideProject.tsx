import LinkIcon from "../../LinkIcon";
import "./_side-project.scss";

type SideProjectProps = {
  projectId: string;
  projectYear: number;
  projectName: string;
  projectDescription: string;
  projectDemoUrl?: string;
  projectSourceUrl?: string;
};

const SideProject = ({
  projectId,
  projectYear,
  projectName,
  projectDescription,
  projectDemoUrl,
  projectSourceUrl,
}: SideProjectProps) => {
  return (
    <li className={`side-project ${projectId}`}>
      <div className="side-project-info">
        <div className="side-project-year">{projectYear}</div>
        <h3 className="side-project-name">{projectName}</h3>
        <p className="side-project-description">{projectDescription}</p>
      </div>
      <div className="side-project-links">
        {projectDemoUrl && (
          <a
            href={projectDemoUrl}
            className="side-project-demo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="side-project-link-text">Demo</span>
            <LinkIcon />
          </a>
        )}
        {projectSourceUrl && (
          <a
            href={projectSourceUrl}
            className="side-project-code-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="side-project-link-text">Source</span>
            <LinkIcon />
          </a>
        )}
      </div>
    </li>
  );
};

export default SideProject;
