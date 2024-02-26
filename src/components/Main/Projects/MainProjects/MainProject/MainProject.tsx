import React from "react";

import LinkIcon from "../../LinkIcon";
import OverrideButton from "../OverrideButton/OverrideButton";
import NoDemoButton from "../NoDemoButton/NoDemoButton";
import "./_main-project.scss";

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

const MainProject = React.forwardRef<HTMLLIElement, MainProjectProps>(
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
        {newProject && <div className="new-project-label">Work In Progress</div>}
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
                <span className="main-project-link-text">Demo</span>
                <LinkIcon />
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
                <span className="main-project-link-text">Source</span>
                <LinkIcon />
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
