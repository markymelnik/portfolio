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
          overrideSource={true}
          projectImage='img'
          newProject={true}
        />
        <MainProject
          projectId={`project-2`}
          projectYear={2023}
          projectName={`markmelnik.com`}
          projectDescription={`Hey, you're on this site right now! I designed it to be simple yet elegant. Let me know what you think 👀.`}
          projectDemoUrl={`https://markmelnik.com`}
          projectSourceUrl={`https://github.com/markymelnik/personal-site`}
          projectImage='img'
        />
        <MainProject
          projectId={`project-3`}
          projectYear={2023}
          projectName={`Battleship`}
          projectDescription={`A game of Battleship that can be played in the web browser. This solution is written in vanilla JavaScript, HTML, and CSS. I underwent a test-driven development process using the Jest testing library to see this project to completion.`}
          projectDemoUrl={`https://battleship-kappa.vercel.app/`}
          projectSourceUrl={`https://github.com/markymelnik/battleship`}
          projectImage='img'
        />
        <MainProject
          projectId={`project-4`}
          projectYear={2023}
          projectName={`Shopping Cart`}
          projectDescription={`A mock ecommerce app.`}
          projectDemoUrl={`https://example.com`}
          projectSourceUrl={`https://github.com/markymelnik/shopping-cart`}
          projectImage='img'
        />
      </ul>
    </>
  )
}

export default MainProjectsList;