import MainProject from "../MainProject/MainProject";
import './_main-projects-list.scss';

const MainProjectsList = () => {
  return (
    <>
      <h2 className="main-projects-title"><span>.02</span>My Projects</h2>
      <ul className="main-projects-list">
        <MainProject
          projectId={`project-1`}
          projectYear={2023}
          projectName={`FitFinder`}
          projectDescription={`Looking for a new workout spot? Find it with FitFinder! This project was a tremendous learning experience from start to finish. The resulting solution is the product of many design choices and technical implementations on both the front and back end.`}
          projectDemoUrl={`https://fitfinder.app`}
          projectSourceUrl={`https://google.com`}
        />
        <MainProject
          projectId={`project-2`}
          projectYear={2023}
          projectName={`markmelnik.com`}
          projectDescription={`Hey, that's my website! I designed it to be simple yet elegant.`}
          projectDemoUrl={`https://google.com`}
          projectSourceUrl={`https://google.com`}
        />
        <MainProject
          projectId={`project-3`}
          projectYear={2023}
          projectName={`Battleship`}
          projectDescription={`A game of Battleship that can be played in the web browser. This solution is written in vanilla JavaScript, HTML, and CSS. I underwent a test-driven development process using the Jest testing library to see this project to completion.`}
          projectDemoUrl={`https://google.com`}
          projectSourceUrl={`https://google.com`}
        />
        <MainProject
          projectId={`project-4`}
          projectYear={2023}
          projectName={`project-4`}
          projectDescription={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos! At, quisquam dolores eum labore expedita, porro voluptatum blanditiis, in officiis dolor amet optio cumque. Beatae in officia placeat incidunt.`}
          projectDemoUrl={`https://google.com`}
          projectSourceUrl={`https://google.com`}
        />
      </ul>
    </>
  )
}

export default MainProjectsList;