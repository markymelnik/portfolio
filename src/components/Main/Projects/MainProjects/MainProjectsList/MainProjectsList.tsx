import type { MutableRefObject } from "react";

import MainProject from "../MainProject/MainProject";
import "./_main-projects-list.scss";

type MainProjectsList = {
  projectRefs: MutableRefObject<HTMLLIElement | null>[];
};

const FitFinderScreenshot = "/src/assets/images/project/fitfinder-screenshot.jpg";
const PersonalSiteScreenshot = 'src/assets/images/project/personal-site-screenshot.jpg'
const BattleshipScreenshot = "src/assets/images/project/battleship-screenshot.jpg";
const BallBattleScreenshot = "src/assets/images/project/ball-battle-screenshot.jpg";

const MainProjectsList = ({ projectRefs }: MainProjectsList) => {
  return (
    <>
      <h2 className="main-projects-title">
        <span>.02</span>My Projects
      </h2>
      <ul className="main-projects-list">
        <MainProject
          ref={projectRefs[0]}
          projectId={`project-1`}
          projectYear={2024}
          projectName={`Ball Battle`}
          projectDescription={`A basketball prediction and social networking application.`}
          projectDemoUrl={`https://markmelnik.com`}
          overrideDemo={true}
          overrideSource={true}
          projectImage={BallBattleScreenshot}
          imageDescription={"Screenshot of ball battle project page"}
          linkDescription={"Visit my ball battle site"}
          newProject={true}
        />
        <MainProject
          ref={projectRefs[1]}
          projectId={`project-2`}
          projectYear={2023}
          projectName={`Fit Finder`}
          projectDescription={`Looking for a new workout spot? Find it with FitFinder! This project was a tremendous learning experience from start to finish. The resulting solution is the product of many design choices and technical implementations on both the frontend and backend.`}
          projectDemoUrl={`https://fitfinder.app`}
          overrideSource={true}
          projectImage={FitFinderScreenshot}
          imageDescription={"Screenshot of fit finder project page"}
          linkDescription={"Visit my fit finder project site"}
        />
        <MainProject
          ref={projectRefs[2]}
          projectId={`project-3`}
          projectYear={2023}
          projectName={`markmelnik.com`}
          projectDescription={`Hey, you're on this site right now! I designed it to be simple yet elegant. I utilized the Intersection Observer API to create the dynamic navbar and scroll into view transitions. Let me know what you think!`}
          projectDemoUrl={`https://markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/personal-site`}
          projectImage={PersonalSiteScreenshot}
          imageDescription={"Screenshot of personal portfolio project page"}
          linkDescription={"Visit my personal portfolio project site"}
        />
        <MainProject
          ref={projectRefs[3]}
          projectId={`project-4`}
          projectYear={2023}
          projectName={`Battleship`}
          projectDescription={`A game of Battleship played in the web browser. This solution is written in vanilla JavaScript, HTML, and CSS. I underwent a test-driven development process using the Jest testing library to see this project to completion.`}
          projectDemoUrl={`https://battleship.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/battleship`}
          projectImage={BattleshipScreenshot}
          imageDescription={"Screenshot of battleship project page"}
          linkDescription={"Visit my battleship project site"}
        />
      {/*   <MainProject
          ref={projectRefs[3]}
          projectId={`project-4`}
          projectYear={2023}
          projectName={`Shopping Cart`}
          projectDescription={`A mock shopping site with dynamic cart functionality that you would encounter on an e-commerce site.`}
          projectDemoUrl={`https://shopping-cart.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/shopping-cart`}
          projectImage={ShoppingCartScreenshot}
          imageDescription={"Screenshot of shopping cart project page"}
          linkDescription={"Visit my shopping cart project site"}
        /> */}
      </ul>
    </>
  );
};

export default MainProjectsList;
