import { type MutableRefObject, useState } from "react";

import SideProject from "../SideProject/SideProject";
import { Icons } from "../../../../../lib/icons/Icons";
import { CONTENT } from "../../../../../lib/content";
import "./side-projects-list.scss";

type SideProjectsListProps = {
  seeMoreRef: MutableRefObject<HTMLButtonElement | null>;
};

const SideProjectsList = ({ seeMoreRef }: SideProjectsListProps) => {
  const [showSideProjectsList, setShowSideProductsList] =
    useState<boolean>(false);

  return (
    <>
      <div className="side-projects-top">
        <button
          ref={seeMoreRef}
          className="side-projects-toggle-btn"
          onClick={() => setShowSideProductsList((prev) => !prev)}
        >
          <span>{CONTENT.projects.side.button}</span>
          <span className={`sp-rotate-btn ${showSideProjectsList ? 'rotate': ''}`}>{<Icons.CaretDown />}</span>
        </button>
      </div>

      <h3
        className={`side-projects-description ${
          showSideProjectsList ? `show` : ``
        }`}
      >
        {CONTENT.projects.side.header}
      </h3>
      <ul
        className={`side-projects-list ${showSideProjectsList ? `show` : ``}`}
      >
        <SideProject
          projectId={CONTENT.projects.side.project[5].id}
          projectYear={CONTENT.projects.side.project[5].year}
          projectName={CONTENT.projects.side.project[5].name}
          projectDescription={CONTENT.projects.side.project[5].desc}
          projectDemoUrl={CONTENT.projects.side.project[5].demourl}
          projectSourceUrl={CONTENT.projects.side.project[5].sourceurl}
        />
        <SideProject
          projectId={CONTENT.projects.side.project[6].id}
          projectYear={CONTENT.projects.side.project[6].year}
          projectName={CONTENT.projects.side.project[6].name}
          projectDescription={CONTENT.projects.side.project[6].desc}
          projectDemoUrl={CONTENT.projects.side.project[6].demourl}
          projectSourceUrl={CONTENT.projects.side.project[6].sourceurl}
        />
        <SideProject
          projectId={CONTENT.projects.side.project[7].id}
          projectYear={CONTENT.projects.side.project[7].year}
          projectName={CONTENT.projects.side.project[7].name}
          projectDescription={CONTENT.projects.side.project[7].desc}
          projectDemoUrl={CONTENT.projects.side.project[7].demourl}
          projectSourceUrl={CONTENT.projects.side.project[7].sourceurl}
        />
        <SideProject
          projectId={CONTENT.projects.side.project[8].id}
          projectYear={CONTENT.projects.side.project[8].year}
          projectName={CONTENT.projects.side.project[8].name}
          projectDescription={CONTENT.projects.side.project[8].desc}
          projectDemoUrl={CONTENT.projects.side.project[8].demourl}
          projectSourceUrl={CONTENT.projects.side.project[8].sourceurl}
        />
        <SideProject
          projectId={CONTENT.projects.side.project[9].id}
          projectYear={CONTENT.projects.side.project[9].year}
          projectName={CONTENT.projects.side.project[9].name}
          projectDescription={CONTENT.projects.side.project[9].desc}
          projectDemoUrl={CONTENT.projects.side.project[9].demourl}
          projectSourceUrl={CONTENT.projects.side.project[9].sourceurl}
        />
        <SideProject
          projectId={CONTENT.projects.side.project[10].id}
          projectYear={CONTENT.projects.side.project[10].year}
          projectName={CONTENT.projects.side.project[10].name}
          projectDescription={CONTENT.projects.side.project[10].desc}
          projectDemoUrl={CONTENT.projects.side.project[10].demourl}
          projectSourceUrl={CONTENT.projects.side.project[10].sourceurl}
        />
          {/* <SideProject
          projectId={`project-11`}
          projectYear={2022}
          projectName={`Weather App`}
          projectDescription={`Find the weather in your city in seconds! This was my first use of a 3rd Party API.`}
          projectDemoUrl={`https://weather-app.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/weather-app`}
        /> */}
      </ul>
    </>
  );
};

export default SideProjectsList;
