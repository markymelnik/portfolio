import { forwardRef } from "react";

import OverrideButton from "../OverrideButton/OverrideButton";
import NoDemoButton from "../NoDemoButton/NoDemoButton";
import { Icons } from "../../../../../lib/icons/Icons";
import { CONTENT } from "../../../../../lib/content";
import "./main-project.scss";

type MainProjectProps = {
  projectId: string;
  projectYear: number;
  projectName: string;
  projectDescription: string;
  projectDemoUrl?: string;
  projectSourceUrl?: string;
  overrideDemo?: boolean;
  overrideSource?: boolean;
  projectImage?: string;
  imageDescription?: string;
  newProject?: boolean;
  linkDescription?: string;
};

const MainProject = forwardRef<HTMLLIElement, MainProjectProps>(
  (
    {
      projectId,
      projectYear,
      projectName,
      projectDescription,
      projectDemoUrl,
      projectSourceUrl,
      overrideDemo,
      overrideSource,
      projectImage,
      imageDescription,
      newProject,
      linkDescription,
    },
    ref
  ) => {
    return (
      <li ref={ref} className={`main-project ${projectId}`}>
        {newProject && <div className="new-project-label">{CONTENT.projects.main.label}</div>}
        <div className="main-project-stuff">
          <div className="main-project-info">
            <div className="main-project-year">{projectYear}</div>
            <h3 className="main-project-name">{projectName}</h3>
            <p className="main-project-description">{projectDescription}</p>
          </div>
          <div className="main-project-links">
            {overrideDemo ? (
              <NoDemoButton />
            ) : (
              <a
                href={projectDemoUrl}
                className="main-project-demo-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="main-project-link-text">{CONTENT.projects.button.demo}</span>
                <Icons.Link size={20} />
              </a>
            )}
            {overrideSource ? (
              <OverrideButton />
            ) : (
              <a
                href={projectSourceUrl}
                className="main-project-code-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="main-project-link-text">{CONTENT.projects.button.demo}</span>
                <Icons.Link size={20} />
              </a>
            )}
          </div>
        </div>
        <a
          href={projectDemoUrl}
          className="main-project-image"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkDescription}
        >
          <img src={projectImage} alt={imageDescription} />
        </a>
      </li>
    );
  }
);

export default MainProject;
