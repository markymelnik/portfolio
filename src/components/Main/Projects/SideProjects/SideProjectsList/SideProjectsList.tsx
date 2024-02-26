import { type MutableRefObject, useState } from "react";

import SideProject from "../SideProject/SideProject";
import DownIcon from "../DownIcon";
import "./_side-projects-list.scss";

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
          <span>See More</span>
          <span>{<DownIcon isActive={showSideProjectsList} />}</span>
        </button>
      </div>

      <div
        className={`side-projects-description ${
          showSideProjectsList ? `show` : ``
        }`}
      >
        Some smaller projects I built along the way
      </div>
      <ul
        className={`side-projects-list ${showSideProjectsList ? `show` : ``}`}
      >
        <SideProject
          projectId={`project-5`}
          projectYear={2023}
          projectName={`Shopping Cart`}
          projectDescription={`A mock shopping site with dynamic cart functionality. Great practice with React.`}
          projectDemoUrl={`https://shopping-cart.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/shopping-cart`}
        />
        <SideProject
          projectId={`project-6`}
          projectYear={2023}
          projectName={`Memory Cards`}
          projectDescription={`Test your memory with this memory game. Don't click the same cat twice 🐱.`}
          projectDemoUrl={`https://memory-cards.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/memory-cards`}
        />
        <SideProject
          projectId={`project-7`}
          projectYear={2023}
          projectName={`Tic-Tac-Toe`}
          projectDescription={`A classic game of tic-tac-toe. Have a friend with you or you'll be playing against yourself!`}
          projectDemoUrl={`https://tic-tac-toe.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/tic-tac-toe`}
        />
        <SideProject
          projectId={`project-8`}
          projectYear={2022}
          projectName={`Etch-A-Sketch`}
          projectDescription={`A drawing tool with grid size and color sliders. Great practice with event handlers.`}
          projectDemoUrl={`https://etch-a-sketch.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/etch-a-sketch`}
        />
        <SideProject
          projectId={`project-9`}
          projectYear={2022}
          projectName={`Calculator`}
          projectDescription={`Your standard 4 function calculator. This was one of my initial projects while learning basics.`}
          projectDemoUrl={`https://calculator.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/calculator`}
        />
        {/* <SideProject
          projectId={`project-9`}
          projectYear={2022}
          projectName={`Weather App`}
          projectDescription={`Find the weather in your city in seconds! This was my first use of a 3rd Party API.`}
          projectDemoUrl={`https://weather-app.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/weather-app`}
        /> */}
        <SideProject
          projectId={`project-10`}
          projectYear={2022}
          projectName={`Café Page`}
          projectDescription={`A simple café site. Great practice with built-in page navigation and UI.`}
          projectDemoUrl={`https://cafe-page.markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/cafe-page`}
        />
      </ul>
    </>
  );
};

export default SideProjectsList;
