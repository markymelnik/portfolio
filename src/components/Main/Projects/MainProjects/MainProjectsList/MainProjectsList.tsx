import type { MutableRefObject } from "react";
import MainProject from "../MainProject/MainProject";
import InDevelopmentScreenshot from '../../../../../assets/images/project/in-dev-screenshot.webp';
import BallerBlitzScreenshot from '../../../../../assets/images/project/ballerblitz-screenshot.webp';
import FitFinderScreenshot from '../../../../../assets/images/project/fitfinder-screenshot.webp';
import PersonalSiteScreenshot from '../../../../../assets/images/project/portfolio-screenshot.webp';
import { CONTENT } from "../../../../../lib/content";
import "./main-projects-list.scss";

type MainProjectsList = {
  projectRefs: MutableRefObject<HTMLLIElement | null>[];
};

const MainProjectsList = ({ projectRefs }: MainProjectsList) => {
  return (
    <>
      <h2 className="main-projects-title">
        <span>{CONTENT.projects.number}</span>{CONTENT.projects.header}
      </h2>
      <ul className="main-projects-list">
        <MainProject
          ref={projectRefs[0]}
          projectId={`${CONTENT.projects.main.project[1].id} new-project`}
          projectYear={CONTENT.projects.main.project[1].year}
          projectName={CONTENT.projects.main.project[1].name}
          projectDescription={CONTENT.projects.main.project[1].desc}
          projectDemoUrl={CONTENT.projects.main.project[1].demourl}
          imageDescription={CONTENT.projects.main.project[1].imagedesc}
          linkDescription={CONTENT.projects.main.project[1].linkdesc}
          projectSourceUrl={CONTENT.projects.main.project[1].sourceurl}
          projectImage={InDevelopmentScreenshot.src}
          newProject={true}
          overrideDemo={true}
          overrideSource={true}
        />
        <MainProject
          ref={projectRefs[1]}
          projectId={CONTENT.projects.main.project[2].id}
          projectYear={CONTENT.projects.main.project[2].year}
          projectName={CONTENT.projects.main.project[2].name}
          projectDescription={CONTENT.projects.main.project[2].desc}
          projectDemoUrl={CONTENT.projects.main.project[2].demourl}
          imageDescription={CONTENT.projects.main.project[2].imagedesc}
          linkDescription={CONTENT.projects.main.project[2].linkdesc}
          projectSourceUrl={CONTENT.projects.main.project[2].sourceurl}
          projectImage={BallerBlitzScreenshot.src}
        />
        <MainProject
          ref={projectRefs[2]}
          projectId={CONTENT.projects.main.project[3].id}
          projectYear={CONTENT.projects.main.project[3].year}
          projectName={CONTENT.projects.main.project[3].name}
          projectDescription={CONTENT.projects.main.project[3].desc}
          projectDemoUrl={CONTENT.projects.main.project[3].demourl}
          imageDescription={CONTENT.projects.main.project[3].imagedesc}
          linkDescription={CONTENT.projects.main.project[3].linkdesc}
          projectSourceUrl={CONTENT.projects.main.project[3].sourceurl}
          projectImage={FitFinderScreenshot.src}
        />
        <MainProject
          ref={projectRefs[3]}
          projectId={CONTENT.projects.main.project[4].id}
          projectYear={CONTENT.projects.main.project[4].year}
          projectName={CONTENT.projects.main.project[4].name}
          projectDescription={CONTENT.projects.main.project[4].desc}
          projectDemoUrl={CONTENT.projects.main.project[4].demourl}
          imageDescription={CONTENT.projects.main.project[4].imagedesc}
          linkDescription={CONTENT.projects.main.project[4].linkdesc}
          projectSourceUrl={CONTENT.projects.main.project[4].sourceurl}
          projectImage={PersonalSiteScreenshot.src}
        />
      </ul>
    </>
  );
};

export default MainProjectsList;
