import { CONTENT } from "../../../../../lib/content";
import { Icons } from "../../../../../lib/icons/Icons";
import "./side-project.scss";

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
            <span className="side-project-link-text">{CONTENT.projects.button.demo}</span>
            <Icons.Link size={20} />
          </a>
        )}
        {projectSourceUrl && (
          <a
            href={projectSourceUrl}
            className="side-project-code-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="side-project-link-text">{CONTENT.projects.button.source}</span>
            <Icons.Link size={20} />
          </a>
        )}
      </div>
    </li>
  );
};

export default SideProject;
